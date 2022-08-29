import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ListItemComponent} from './list-item.component';
import {DescriptionModule} from '../description/description.module';


@NgModule({
  declarations: [
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DescriptionModule,
  ],
  exports: [
    ListItemComponent,
  ],
})
export class ListItemModule {
}
