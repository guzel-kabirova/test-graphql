import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {ListService} from './list.service';
import {DEFAULT_PAGE_NUMBER, FORMAT_LIST} from './list.const';
import {IForm} from './list-filters/list-filters.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  public pagination$ = this._listService.pagination$;
  public list$ = this._listService.mediaList$;
  public genres$ = this._listService.genres$;

  public formats = FORMAT_LIST;

  public defaultFilters?: Partial<IForm> | null;

  constructor(private _listService: ListService) { }

  ngOnInit(): void {
    if (!this._listService.getMediaListFromStore().length) {
      this.getMedia(DEFAULT_PAGE_NUMBER);
    }

    if (!this._listService.getGenresFromStore().length) {
      this._listService.getGenreCollection().subscribe();
    }

    this.defaultFilters = this._listService.getFiltersFromStore();
  }

  private getMedia(page: number, filters?: Partial<IForm>) {
    this._listService.getMedia(page, filters).subscribe();
  }

  changePage(page: number) {
    const filters = this._listService.getFiltersFromStore();
    if (!!filters) {
      this.getMedia(page, filters);
    } else {
      this.getMedia(page);
    }
  }

  filterMedia(filters: Partial<IForm>) {
    this._listService.setFiltersToStore(filters);
    this.getMedia(DEFAULT_PAGE_NUMBER, filters);
  }
}
