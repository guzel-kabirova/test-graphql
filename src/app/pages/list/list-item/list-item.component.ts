import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {ListItemModel} from '../list.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() item!: ListItemModel;

  constructor() { }
}
