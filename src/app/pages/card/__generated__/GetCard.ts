/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {MediaFormat, MediaStatus} from './../../../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetCard
// ====================================================

export interface GetCard_Media_title {
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

export interface GetCard_Media {
  __typename: 'Media';
  /**
   * The official titles of the media in various languages
   */
  title: GetCard_Media_title | null;
  /**
   * The genres of the media
   */
  genres: (string | null)[] | null;
  /**
   * The format the media was released in
   */
  format: MediaFormat | null;
  /**
   * Where the media was created. (ISO 3166-1 alpha-2)
   */
  countryOfOrigin: any | null;
  /**
   * The current releasing status of the media
   */
  status: MediaStatus | null;
  /**
   * Short description of the media's story and characters
   */
  description: string | null;
}

export interface GetCard {
  /**
   * Media query
   */
  Media: GetCard_Media | null;
}

export interface GetCardVariables {
  id?: number | null;
}
