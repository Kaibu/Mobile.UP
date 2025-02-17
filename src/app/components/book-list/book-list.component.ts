import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { utils } from '../../lib/util';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() public book: any;
  @Input() public i;
  @Output() mediaType = new EventEmitter();

  bookDetails = {
    'icon': null,
    'publisher': ''
  };

  constructor() { }

  ngOnInit() {
    this.checkMediaType(utils.convertToArray(
      this.book.typeOfResource)[0],
      utils.convertToArray(this.book.originInfo)[0],
      utils.convertToArray(this.book.physicalDescription)[0]);
    this.getPublisher();
  }

  /**
   * @name getPublisher
   */
  getPublisher() {
    if (this.book.relatedItem) {
      const tmp = utils.convertToArray(this.book.relatedItem);
      let i;
      for (i = 0; i < tmp.length; i++) {
        if (tmp[i].originInfo && tmp[i].originInfo.publisher) {
          if (tmp[i].originInfo.publisher.trim().length > 0) {
            this.bookDetails.publisher = tmp[i].originInfo.publisher;
            break;
          }
        }
      }
    }
  }

  /**
   * @name checkMediaType
   * @param typeOfResource
   * @param originInfo
   * @param physicalDescription
   */
  checkMediaType(typeOfResource, originInfo, physicalDescription) {

    const physicalDescriptionArr = utils.convertToArray(physicalDescription.form);
    if (physicalDescription) {
      physicalDescription = physicalDescriptionArr.filter(x => x._ === 'remote' || x._ === 'microform');
      if (physicalDescription[0]) { physicalDescription = physicalDescription[0]._; }
    }
    if (typeOfResource._) { typeOfResource = typeOfResource._; }

    if (physicalDescription === 'microform') {
      this.mediaType.emit('mediatype_e');
    }

    const soundRec: boolean = typeOfResource.includes('sound recording');

    if (physicalDescription === 'remote') {
      this.mediaType.emit('mediatype_o');
      this.bookDetails.icon = 'cloud'; // O = Online
      return;
    }

    if (typeOfResource) {
      switch (typeOfResource) {
        case 'manuscript': {
          this.mediaType.emit('mediatype_h');
          this.bookDetails.icon = 'help-circle'; // H = ???
          break;
        }
        case 'still image': {
          this.mediaType.emit('mediatype_i');
          this.bookDetails.icon = 'images'; // I = Image
          break;
        }
        case 'cartographic': {
          this.mediaType.emit('mediatype_k');
          this.bookDetails.icon = 'map'; // K = Kartografie
          break;
        }
        case 'notated music': {
          this.mediaType.emit('mediatype_m');
          this.bookDetails.icon = 'musical-notes'; // M = Music
          break;
        }
        case 'moving image': {
          this.mediaType.emit('mediatype_v');
          this.bookDetails.icon = 'videocam'; // V = Video
          break;
        }
        case 'text': {
          if (originInfo && (originInfo.issuance === 'serial' || originInfo.issuance === 'continuing')) {
            this.mediaType.emit('mediatype_t');
            this.bookDetails.icon = 'document'; // T = Text
            break;
          } else {
            this.mediaType.emit('mediatype_b');
            this.bookDetails.icon = 'bookmarks'; // B = Book
            break;
          }
        }
        case 'software, multimedia': {
          if (originInfo && (originInfo.issuance === 'serial' || originInfo.issuance === 'continuing')) {
            if (physicalDescription === 'remote') {
              this.mediaType.emit('mediatype_p');
              this.bookDetails.icon = 'paper'; // P = Paper
              break;
            } else {
              this.mediaType.emit('mediatype_t');
              this.bookDetails.icon = 'document'; // T = Text
              break;
            }
          } else if (physicalDescription === 'remote') {
            this.mediaType.emit('mediatype_o');
            this.bookDetails.icon = 'cloud'; // O = Online
            break;
          } else {
            this.mediaType.emit('mediatype_s');
            this.bookDetails.icon = 'disc'; // S = Software
            break;
          }
        }
        default: {
          if (soundRec) {
            this.mediaType.emit('mediatype_g');
            this.bookDetails.icon = 'volume-high'; // G = Recordings
            break;
          } else {
            this.mediaType.emit('mediatype_x');
            this.bookDetails.icon = 'help-circle'; // X = undefined
            break;
          }
        }
      }
    }
  }

  /**
   * has to be declared for html pages to use the imported function
   * couldn't find a better solution
   * @param array
   */
  convertToArray(array) {
    return utils.convertToArray(array);
  }

}
