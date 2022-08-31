import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListFiltersComponent} from './list-filters.component';
import {InputModule} from '../../../components/input/input.module';
import {RadiobuttonModule} from '../../../components/radiobutton/radiobutton.module';
import {SelectModule} from '../../../components/select/select.module';


@NgModule({
  declarations: [ListFiltersComponent],
  imports: [
    CommonModule,
    InputModule,
    RadiobuttonModule,
    SelectModule,
  ],
  exports: [ListFiltersComponent],
})
export class ListFiltersModule {
}
