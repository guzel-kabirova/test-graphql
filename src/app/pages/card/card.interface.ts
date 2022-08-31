import {GetCard_Media} from './__generated__/GetCard';
import {prepareTitle} from '../../utils/prepareTitle';
import {getStringFromArray} from '../../utils/getStringFromArray';
import {MediaFormat} from '../../../../__generated__/globalTypes';

export class CardModel {
  title: string;
  genres: string;
  format: MediaFormat | '';
  countryOfOrigin: string;
  status: string;
  description: string;

  constructor(card: GetCard_Media) {
    this.title = prepareTitle(card.title);
    this.genres = getStringFromArray(card.genres, ', ');
    this.format = card.format ?? '';
    this.countryOfOrigin = card.countryOfOrigin;
    this.status = card.status ?? '';
    this.description = card.description ?? '';
  }
}
