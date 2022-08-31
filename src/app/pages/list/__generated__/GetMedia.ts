/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {MediaFormat} from './../../../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetMedia
// ====================================================

export interface GetMedia_Page_pageInfo {
  __typename: 'PageInfo';
  /**
   * The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic
   */
  total: number | null;
  /**
   * The current page
   */
  currentPage: number | null;
  /**
   * The last page
   */
  lastPage: number | null;
}

export interface GetMedia_Page_media_title {
  __typename: 'MediaTitle';
  /**
   * The romanization of the native language title
   */
  romaji: string | null;
  /**
   * The official english title
   */
  english: string | null;
  /**
   * Official title in it's native language
   */
  native: string | null;
}

export interface GetMedia_Page_media {
  __typename: 'Media';
  /**
   * The id of the media
   */
  id: number;
  /**
   * The official titles of the media in various languages
   */
  title: GetMedia_Page_media_title | null;
  /**
   * The genres of the media
   */
  genres: (string | null)[] | null;
  /**
   * The format the media was released in
   */
  format: MediaFormat | null;
}

export interface GetMedia_Page {
  __typename: 'Page';
  /**
   * The pagination information
   */
  pageInfo: GetMedia_Page_pageInfo | null;
  media: (GetMedia_Page_media | null)[] | null;
}

export interface GetMedia {
  Page: GetMedia_Page | null;
}

export interface GetMediaVariables {
  page?: number | null;
}
