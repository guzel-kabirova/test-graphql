import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
  @Input() isRow = true;
  @Input() name = '';
  @Input() text = '';

  constructor() { }
}
