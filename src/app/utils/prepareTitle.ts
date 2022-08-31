import {GetMedia_Page_media_title} from '../pages/list/__generated__/GetMedia';
import {GetCard_Media_title} from '../pages/card/__generated__/GetCard';

export const prepareTitle = (titleObj: GetMedia_Page_media_title | GetCard_Media_title | null | undefined): string => {
  if (!titleObj) {
    return '';
  }
  return titleObj.english ?? titleObj.romaji ?? titleObj.native ?? '';
};
