import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ICheckboxValue} from '../checkbox/checkbox.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  @Input() items: string[] = [];

  @Input() label = '';
  @Input() placeholder = '';

  @Input() defaultSelectedValues: string[] = [];
  @Output() selectedValuesChanged = new EventEmitter<string[]>();

  selectedValues: string[] = [];

  private _selectedCount = 0;

  set selectedCount(count: number) {
    this._selectedCount = count;
  }

  get selectedCount(): number {
    return this.selectedValues.length;
  }

  public isOpen = false;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedValues = this.defaultSelectedValues;
  }

  onClick() {
    this.isOpen = !this.isOpen;

    if (!this.isOpen) {
      this.selectedValuesChanged.emit(this.selectedValues);
    }
  }

  selectChanged(value: ICheckboxValue) {
    if (value.isChecked) {
      this.selectedValues.push(value.label);
    } else {
      this.selectedValues = this.selectedValues.filter(el => el !== value.label);
    }
    this.selectedCount = this.selectedValues.length;
  }
}
