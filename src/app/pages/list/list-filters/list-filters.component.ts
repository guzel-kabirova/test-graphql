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
import {Subject, takeUntil, tap} from 'rxjs';
import {DOCUMENT} from '@angular/common';

import {selectTrulyObjectProperties} from '../../../utils/selectTrulyObjectProperties';
import {MediaFormat} from '../../../../../__generated__/globalTypes';
import {DestroyService} from '../../../services/destroy.service';

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
  providers: [DestroyService],
})
export class ListFiltersComponent implements OnInit {
  @Input()
  public formats: string[] = [];

  @Input()
  public genres: string[] = [];

  @Input()
  public defaultFilters?: Partial<IForm> | null;

  @Output()
  public onFormChanged = new EventEmitter<Partial<IForm>>();
  @Output()
  public onFiltersClose = new EventEmitter<void>();

  public form?: FormGroup;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    @Inject(DestroyService) private _destroy$: Subject<void>,
    private _fb: FormBuilder,
    private _cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.subscribeOnFormChanged();
  }

  private createForm() {
    this.form = this._fb.group({
      name: [this.defaultFilters?.name ?? ''],
      genres: [this.defaultFilters?.genres ?? []],
      format: [this.defaultFilters?.format ?? ''],
    });
  }

  public updateSelectedValues(genres: string[]) {
    this.form?.patchValue({genres});
  }

  public updateRadioValues(format: string) {
    this.form?.patchValue({format});
  }

  private subscribeOnFormChanged() {
    this.form?.valueChanges.pipe(
      tap(() => this.onFormChanged.emit(selectTrulyObjectProperties(this.form?.value))),
      takeUntil(this._destroy$),
    ).subscribe();
  }

  public closeFilters() {
    this.onFiltersClose.emit();
  }
}
