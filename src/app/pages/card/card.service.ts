import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {map, Observable} from 'rxjs';

import {GetCard} from './__generated__/GetCard';
import {CardModel} from './card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _card = gql`query GetCard($id: Int){
    Media(id: $id) {
      title {
        romaji
        english
        native
      }
      genres
      format
      countryOfOrigin
      status
      description
    }
  }`;

  constructor(private _apollo: Apollo) { }

  public getCard(id: number): Observable<CardModel | null> {
    return this._apollo.query<GetCard>({query: this._card, variables: {id}}).pipe(
      map(data => {
          const item = data.data.Media;
          return item && new CardModel(item);
        },
      ),
    );
  }
}
