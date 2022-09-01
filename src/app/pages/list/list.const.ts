import {MediaFormat} from '../../../../__generated__/globalTypes';
import {IPagination} from './list.interface';

export const DEFAULT_PAGE_NUMBER = 1;

export const FORMAT_LIST = [
  MediaFormat.MANGA, MediaFormat.MOVIE, MediaFormat.MUSIC,
  MediaFormat.NOVEL, MediaFormat.ONA, MediaFormat.ONE_SHOT,
  MediaFormat.OVA, MediaFormat.SPECIAL, MediaFormat.TV,
  MediaFormat.TV_SHORT];

export const DEFAULT_PAGINATION: IPagination = {
  total: DEFAULT_PAGE_NUMBER,
  currentPage: DEFAULT_PAGE_NUMBER,
  lastPage: DEFAULT_PAGE_NUMBER,
};

export enum DisplayProperty {
  Block = 'block',
  None = 'none'
}
