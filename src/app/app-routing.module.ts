import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListComponent} from './pages/list/list.component';
import {CardComponent} from './pages/card/card.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'card', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
