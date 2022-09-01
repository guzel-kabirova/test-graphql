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
  @Input()
  public label = '';
  @Input()
  public isChecked = false;
  @Output()
  public onCheckboxChange = new EventEmitter<ICheckboxValue>();

  constructor() { }

  onSelect(event: Event) {
    const output = {
      isChecked: (event.target as HTMLInputElement).checked,
      label: this.label,
    };

    this.onCheckboxChange.emit(output);
  }
}
