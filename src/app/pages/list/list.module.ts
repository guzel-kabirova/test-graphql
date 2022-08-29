import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListComponent} from './list.component';
import {ListItemModule} from '../../components/list-item/list-item.module';
import {PaginationModule} from '../../components/pagination/pagination.module';
import {InputModule} from '../../components/input/input.module';
import {RadiobuttonModule} from '../../components/radiobutton/radiobutton.module';
import {SelectModule} from '../../components/select/select.module';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    ListItemModule,
    PaginationModule,
    InputModule,
    RadiobuttonModule,
    SelectModule,
  ],
})
export class ListModule {
}
