import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
  @Input()
  public isRow = true;
  @Input()
  public name = '';
  @Input()
  public text = '';

  constructor() { }
}
