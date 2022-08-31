import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {ICheckboxValue} from '../checkbox/checkbox.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() items: string[] = [];
  @Input() label = '';
  @Input() placeholder = '';

  @Output() selectedValuesChanged = new EventEmitter<string[]>();

  selectedValues: ICheckboxValue[] = [];
  selectedValuesOutput: string[] = [];

  get selectedCount(): number {
    return this.selectedValues.filter(el => el && el.isChecked).length;
  }

  public isOpen = false;

  constructor() {
  }

  onClick() {
    this.isOpen = !this.isOpen;

    if (!this.isOpen) {
      this.selectedValuesChanged.emit(this.selectedValues.filter(el => el && el.isChecked).map(el => el.label));
    }
  }
}
