import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {CardService} from './card.service';
import {CardModel} from './card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardResolverService implements Resolve<CardModel | null> {

  constructor(private _cardService: CardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CardModel | null> {
    const id = route.params['id'];
    return this._cardService.getCard(id);
  }
}
