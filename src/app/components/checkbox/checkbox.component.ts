import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, Provider} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true,
};

export interface ICheckboxValue {
  isChecked: boolean;
  label: string;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VALUE_ACCESSOR],
})
export class CheckboxComponent {
  @Input() label = '';
  @Input()
  public isChecked = false;
  @Output()
  onCheckboxChange = new EventEmitter<ICheckboxValue>();


  outputValue?: ICheckboxValue;

  constructor() { }

  onSelect(event: Event) {
    const output = {
      isChecked: (event.target as HTMLInputElement).checked,
      label: this.label,
    };

    this.onCheckboxChange.emit(output);
  }
}
