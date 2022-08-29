import {Component} from '@angular/core';

import {DATA, RADIOBUTTON_VALUES} from './list.mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public list = DATA;
  public types = RADIOBUTTON_VALUES;

  constructor() { }
}
