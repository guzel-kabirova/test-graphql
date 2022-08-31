import {ChangeDetectionStrategy, Component, forwardRef, Input, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = '';
  public isChecked = false;

  outputValue?: ICheckboxValue;

  onChange!: (value: ICheckboxValue) => void;
  onTouch!: () => void;

  constructor() { }

  onSelect(event: Event) {
    const output = {
      isChecked: (event.target as HTMLInputElement).checked,
      label: this.label,
    };
    this.onChange(output);
  }

  registerOnChange(fn: (value: ICheckboxValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(value: boolean): void {
    this.isChecked = value;
  }
}
