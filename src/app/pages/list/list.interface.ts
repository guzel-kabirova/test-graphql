import {MediaFormat} from '../../../../__generated__/globalTypes';
import {GetMedia_Page_media} from './__generated__/GetMedia';
import {prepareTitle} from '../../utils/prepareTitle';
import {getStringFromArray} from '../../utils/getStringFromArray';

export class ListItemModel {
  id: number;
  title: string;
  genres: string;
  format: MediaFormat | '';

  constructor(item: GetMedia_Page_media) {
    const titleObj = item.title;
    this.id = item.id;
    this.title = prepareTitle(titleObj);
    this.genres = getStringFromArray(item.genres, ', ');
    this.format = item.format ?? '';
  }
}

export interface IPagination {
  total: number;
  currentPage: number;
  lastPage: number;
}
