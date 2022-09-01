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
import {fromEvent, Subject, takeUntil, tap} from 'rxjs';
import {DOCUMENT} from '@angular/common';

import {ICheckboxValue} from '../checkbox/checkbox.component';
import {DestroyService} from '../../services/destroy.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class SelectComponent implements OnInit {
  @Input()
  public items: string[] = [];

  @Input()
  public label = '';
  @Input()
  public placeholder = '';

  @Input()
  public defaultSelectedValues: string[] = [];
  @Output()
  public selectedValuesChanged = new EventEmitter<string[]>();

  public isOpen = false;

  private _selectedValues: string[] = [];

  private _selectedCount = 0;

  set selectedCount(count: number) {
    this._selectedCount = count;
  }

  get selectedCount(): number {
    return this._selectedValues.length;
  }

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    @Inject(DestroyService) private _destroy$: Subject<void>,
    private _elRef: ElementRef,
    private _cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscribeOnClicks();
    this._selectedValues = this.defaultSelectedValues;
  }

  private subscribeOnClicks() {
    fromEvent(this._document, 'click').pipe(
      tap(event => {
        if (this._elRef?.nativeElement.contains(event.target as Node)) {
          return;
        } else {
          this.isOpen = false;
          this._cdr.detectChanges();
          this.emitData();
        }
      }),
      takeUntil(this._destroy$),
    ).subscribe();
  }

  public onClick() {
    this.isOpen = !this.isOpen;

    if (!this.isOpen) {
      this.emitData();
    }
  }

  private emitData() {
    this.selectedValuesChanged.emit(this._selectedValues);
  }

  public selectChanged(value: ICheckboxValue) {
    if (value.isChecked) {
      this._selectedValues.push(value.label);
    } else {
      this._selectedValues = this._selectedValues.filter(el => el !== value.label);
    }
    this.selectedCount = this._selectedValues.length;
  }
}
