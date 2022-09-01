import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {tap} from 'rxjs';
import {DOCUMENT} from '@angular/common';

import {selectTrulyObjectProperties} from '../../../utils/selectTrulyObjectProperties';
import {MediaFormat} from '../../../../../__generated__/globalTypes';

export interface IForm {
  name: string;
  genres: string[];
  format: MediaFormat;
}

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFiltersComponent implements OnInit {
  @Input()
  public formats: string[] = [];

  @Input()
  public genres: string[] = [];

  @Input()
  public defaultFilters?: Partial<IForm> | null;

  @Output()
  onFormChanged = new EventEmitter<Partial<IForm>>();
  @Output()
  onFiltersClose = new EventEmitter<void>();

  public form?: FormGroup;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _fb: FormBuilder,
    private _cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.subscribeOnFormChanged();
  }

  createForm() {
    this.form = this._fb.group({
      name: [this.defaultFilters?.name ?? ''],
      genres: [this.defaultFilters?.genres ?? []],
      format: [this.defaultFilters?.format ?? ''],
    });
  }

  updateSelectedValues(genres: string[]) {
    this.form?.patchValue({genres});
  }

  updateRadioValues(format: string) {
    this.form?.patchValue({format});
  }

  subscribeOnFormChanged() {
    this.form?.valueChanges.pipe(
      tap(() => this.onFormChanged.emit(selectTrulyObjectProperties(this.form?.value))),
    ).subscribe();
  }

  closeFilters() {
    this.onFiltersClose.emit();
  }
}
