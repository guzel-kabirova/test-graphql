import {Component} from '@angular/core';

import {DATA} from './list.mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public list = DATA;

  constructor() { }
}
