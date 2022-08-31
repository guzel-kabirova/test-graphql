import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListComponent} from './list.component';
import {ListItemModule} from './list-item/list-item.module';
import {PaginationModule} from '../../components/pagination/pagination.module';
import {ListFiltersModule} from './list-filters/list-filters.module';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    ListItemModule,
    PaginationModule,
    ListFiltersModule,
  ],
})
export class ListModule {
}
