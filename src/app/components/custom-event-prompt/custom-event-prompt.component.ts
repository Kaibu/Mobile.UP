import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {IEventObject, IRhythm, Rhythms, weekdaysMapping} from '../../pages/timetable/createEvents';
import {RRule } from 'rrule';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DatetimeChangeEventDetail} from '@ionic/core';
import {IConfig} from '../../lib/interfaces';
import {ConfigService} from '../../services/config/config.service';

export interface NewEvent {
  beginDate: string;
  endDate: string;
  recurrenceEnd: string;
  title: string;
  description: string;
  location: string;
  rhythm: IRhythm;
}

@Component({
  selector: 'app-custom-event-prompt',
  templateUrl: './custom-event-prompt.component.html',
  styleUrls: ['./custom-event-prompt.component.scss']
})
export class CustomEventPromptComponent {
  config: IConfig = ConfigService.config;
  objectValues = Object.values;
  rhythms = Rhythms;
  newEvent: FormGroup;
  weekdays = weekdaysMapping;

  constructor(private modalCtrl: ModalController,
              private formBuilder: FormBuilder ) {
    const now = moment();
    this.newEvent = this.formBuilder.group({
      title: [
        '',
        Validators.required
      ],
      description: [
        ''
      ],
      location: [
        ''
      ],
      // campus: [
      //   ''
      // ],
      // building: [
      //
      // ],
      // room: [
      //
      // ],
      beginDate: [
        now.toISOString(),
        Validators.required
      ],
      endDate: [
        now.clone().add(2, 'hours').toISOString(),
        Validators.required
      ],
      // required if a rhythm is selected
      recurrenceEnd: [
        null,
        this.isRecurring
      ],
      // required, but single event is selected by default
      rhythm: [
        this.rhythms.single,
        Validators.required
      ]
    });
  }

  /**
   * returns true when the selected rhythm is not 'single'
   * @param control
   */
  isRecurring(control) {
    const rhythmControl = control.root.get('rhythm');
    if (rhythmControl != null) {
      return rhythmControl.value.name !== 'single';
    }
    return false;
  }

  /**
   * changes the endDate field when a beginDate has been selected. It just adds
   * two hours to beginDate and uses that to patch the value.
   * @param event {string} event
   */
  onBeginDateSelected(event: string) {
    this.newEvent.patchValue({
      endDate: moment(event).add(2, 'hours').toISOString()
    });
  }

  /**
   * sets the recurrenceEnd to the last day of the semester value when a
   * rhythm != 'single' has been selected
   * @param event
   */
  onRhythmSelected(event: string) {
    if (event['name'] !== 'single') {
      this.newEvent.patchValue((
        {recurrenceEnd: moment('2019-09-30', 'YYYY-MM-DD').toISOString()}
      ));
    }
  }

  createEvents(newEvent) {
    const event: NewEvent = newEvent.value;

    const beginDate = new Date(event.beginDate);
    const endDate = new Date(event.endDate);
    const recurrenceEndBegin = event.recurrenceEnd == null
                                ? new Date(event.beginDate)
                                : new Date(event.recurrenceEnd);
    const recurrenceEndEnd = event.recurrenceEnd == null
                                ? new Date(event.endDate)
                                : new Date(event.recurrenceEnd);

    const beginRules = new RRule( {
      freq: event.rhythm.freq,
      interval: event.rhythm.interval,
      byweekday: beginDate.getDay() - 1,
      dtstart: beginDate,
      until: recurrenceEndBegin
    }).all();

    const endRules = new RRule( {
      freq: event.rhythm.freq,
      interval: event.rhythm.interval,
      byweekday: beginDate.getDay() - 1,
      dtstart: endDate,
      until: recurrenceEndEnd
    }).all();

    const rules = beginRules.map(
      (value, index, array) => {
        return <IEventObject>{
          type: 'custom',
          title: event.title,
          color: '#ff504a',
          eventDetails: {
            startTime: event.beginDate,
            endTime: event.endDate,
            startDate: event.beginDate,
            endDate: recurrenceEndEnd.toISOString(),
            location: event.location,
            rhythm: event.rhythm.name,
            lecturers: {
              lecturer: {
                lecturerFirstname: '',
                lecturerLastname: ''
              }
            }
          },
          courseDetails: {
            courseId: '',
            courseName: event.title
          },
          startTime: value,
          endTime: endRules[index]
        };
      }
    );

    return rules;
  }

  /**
   * dismisses the modal without returning events
   */
  cancel() {
    this.modalCtrl.dismiss();
  }

  /**
   * creates RRule object from user input and then creates a list of events from
   * this RRule object. Then dismisss
   */
  submit() {
    this.modalCtrl.dismiss({events: this.createEvents(this.newEvent)});
  }
}
