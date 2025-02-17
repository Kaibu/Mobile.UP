import {Component, Input, OnInit} from '@angular/core';
import {Feature} from 'geojson';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-campus-map-feature-modal',
  templateUrl: './campus-map-feature-modal.component.html',
  styleUrls: ['./campus-map-feature-modal.component.scss']
})
export class CampusMapFeatureModalComponent implements OnInit {

  @Input() feature: Feature;

  title: string;
  descriptionItems: string[] = [];

  constructor(private modalCtrl: ModalController) {
  }

  /**
   * initializes the modals description by splitting the description at newline
   * characters
   */
  ngOnInit() {
    if (this.feature.properties.description) {
      this.descriptionItems = this.feature.properties.description.split('\n');
    }
  }

  /**
   * closes this modal
   */
  closeModal() {
    this.modalCtrl.dismiss();
  }

}
