import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {MediaFormat} from '../../../../__generated__/globalTypes';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadiobuttonComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() isChecked = false;

  @Output() onRadioChanged = new EventEmitter<MediaFormat>();

  constructor() { }

  radioChanged(event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.onRadioChanged.emit(this.label as MediaFormat);
    }
  }
}
