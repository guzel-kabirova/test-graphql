import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {ListComponent} from './pages/list/list.component';
import {CardComponent} from './pages/card/card.component';
import {CardResolverService} from './pages/card/card-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {
    path: 'list/:id', component: CardComponent, resolve: {
      card: CardResolverService,
    },
  },
  {path: 'error', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
