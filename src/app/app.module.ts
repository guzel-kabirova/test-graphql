import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListModule} from './pages/list/list.module';
import {CardModule} from './pages/card/card.module';
import {InputModule} from './components/input/input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    CardModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
