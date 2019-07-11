import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {IEventObject, Rhythms, weekdaysMapping} from '../../pages/timetable/createEvents';
import {RRule } from 'rrule';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DatetimeChangeEventDetail} from '@ionic/core';
import {IConfig} from '../../lib/interfaces';
import {ConfigService} from '../../services/config/config.service';

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

  onRhythmSelected(event: string) {
    if (event['name'] !== 'single') {
      this.newEvent.patchValue((
        {recurrenceEnd: moment('2019-09-30', 'YYYY-MM-DD').toISOString()}
      ));
    }
  }

  createEvents(newEvent) {
    const event = newEvent.value;

    const beginDate = new Date(event.beginDate);
    const endDate = new Date(event.endDate);

    const beginRules = new RRule( {
      freq: event.rhythm.freq,
      interval: event.rhythm.interval,
      byweekday: beginDate.getDay() - 1,
      dtstart: beginDate,
      until: event.recurrenceEnd == null
              ? new Date(event.beginDate)
              : new Date(event.recurrenceEnd)
    }).all();

    const endRules = new RRule( {
      freq: event.rhythm.freq,
      interval: event.rhythm.interval,
      byweekday: beginDate.getDay() - 1,
      dtstart: endDate,
      until: event.recurrenceEnd == null
              ? new Date(event.endDate)
              : new Date(event.recurrenceEnd)
    }).all();

    const rules = beginRules.map(
      (value, index, array) => {
        return <IEventObject>{
          title: event.title,
          eventDetails: {
            location: event.location
          },
          startTime: value,
          endTime: endRules[index]
        };
      }
    );

    console.log(rules)
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
