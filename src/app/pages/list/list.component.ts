import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {ListService} from './list.service';
import {DEFAULT_PAGE_NUMBER, FORMAT_LIST} from './list.const';

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

  constructor(private _listService: ListService) { }

  ngOnInit(): void {
    if (!this._listService.getMediaListFromStore().length) {
      this.getMediaByPage(DEFAULT_PAGE_NUMBER);
    }

    if (!this._listService.getGenresFromStore().length) {
      this._listService.getGenreCollection().subscribe();
    }
  }

  private getMediaByPage(page: number) {
    this._listService.getMedia(page).subscribe();
  }

  changePage(page: number) {
    this.getMediaByPage(page);
  }
}
