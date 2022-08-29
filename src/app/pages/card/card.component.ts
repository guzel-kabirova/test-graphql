import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  constructor(private _location: Location) { }

  back() {
    this._location.back();
  }
}
