import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {fromEvent, tap} from 'rxjs';
import {DOCUMENT} from '@angular/common';

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

  public isOpen = false;

  selectedValues: string[] = [];

  private _selectedCount = 0;

  set selectedCount(count: number) {
    this._selectedCount = count;
  }

  get selectedCount(): number {
    return this.selectedValues.length;
  }

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _elRef: ElementRef,
    private _cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    fromEvent(this._document, 'click').pipe(
      tap(event => {
        if (this._elRef?.nativeElement.contains(event.target as Node)) {
          return;
        } else {
          this.isOpen = false;
          this._cdr.detectChanges();
        }
      }),
    ).subscribe();
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
