import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {CardModel} from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  public card?: CardModel;

  constructor(
    private _location: Location,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => this.card = data['card']);
  }

  back() {
    this._location.back();
  }
}
