import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

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
    ReactiveFormsModule,
  ],
  exports: [ListFiltersComponent],
})
export class ListFiltersModule {
}
