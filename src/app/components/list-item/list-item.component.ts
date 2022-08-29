import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() title = '';
  @Input() type = '';
  @Input() port = '';

  constructor() { }
}
