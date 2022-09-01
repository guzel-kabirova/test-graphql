import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';

import {GetGenreCollection} from './__generated__/GetGenreCollection';
import {GetMedia} from './__generated__/GetMedia';
import {IPagination, ListItemModel} from './list.interface';
import {DEFAULT_PAGINATION} from './list.const';
import {IForm} from './list-filters/list-filters.component';
import {selectTrulyObjectProperties} from '../../utils/selectTrulyObjectProperties';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private _pagination = new BehaviorSubject<IPagination>(DEFAULT_PAGINATION);
  public pagination$ = this._pagination.asObservable();

  private _filters = new BehaviorSubject<Partial<IForm> | null>(null);

  private _mediaList = new BehaviorSubject<ListItemModel[]>([]);
  public mediaList$ = this._mediaList.asObservable();

  private _genres = new BehaviorSubject<string[]>([]);
  public genres$ = this._genres.asObservable();

  private _genreCollection = gql`query GetGenreCollection{GenreCollection}`;

  private _media = gql`query GetMediaFilter($page: Int, $name: String, $genres: [String], $format: MediaFormat){
    Page (page: $page, perPage: 10) {
      pageInfo {
        total
        currentPage
        lastPage
      }
      media(genre_in: $genres, format: $format, search: $name) {
        id
        title {
          romaji
          english
          native
        }
        genres
        format
      }
    }
  }`;

  constructor(private _apollo: Apollo) { }

  setPaginationToStore(pagination: IPagination) {
    this._pagination.next(pagination);
  }

  getPaginationFromStore(): IPagination {
    return this._pagination.getValue();
  }

  setFiltersToStore(filters: Partial<IForm>) {
    this._filters.next(filters);
  }

  getFiltersFromStore(): Partial<IForm> | null {
    return this._filters.getValue();
  }

  setMediaListToStore(media: ListItemModel[]) {
    this._mediaList.next(media);
  }

  getMediaListFromStore(): ListItemModel[] {
    return this._mediaList.getValue();
  }

  setGenresToStore(genres: string[]) {
    this._genres.next(genres);
  }

  getGenresFromStore(): string[] {
    return this._genres.getValue();
  }

  getMedia(page: number, filters?: Partial<IForm>): Observable<ListItemModel[]> {
    return this._apollo.query<GetMedia>({
      query: this._media,
      variables: selectTrulyObjectProperties({...filters, page}),
    }).pipe(
      map(data => {
        this.setPaginationToStore(data.data.Page?.pageInfo as IPagination);
        if (data.data.Page && data.data.Page.media) {
          return data.data.Page.media.map(el => el && new ListItemModel(el)).filter(el => !!el) as ListItemModel[];
        }
        return [];
      }),
      tap(mediaList => this.setMediaListToStore(mediaList)),
    );
  }

  getGenreCollection(): Observable<string[]> {
    return this._apollo.query<GetGenreCollection>({query: this._genreCollection}).pipe(
      map(data => {
        const genres = data.data.GenreCollection;
        if (genres && genres.length) {
          return genres.filter(el => !!el) as string[];
        }
        return [];
      }),
      tap(genres => this.setGenresToStore(genres)),
    );
  }
}
