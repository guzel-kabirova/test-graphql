import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadiobuttonComponent {
  @Input() label = '';
  @Input() name = '';

  constructor() { }
}
