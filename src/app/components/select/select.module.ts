import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SelectComponent} from './select.component';
import {CheckboxModule} from '../checkbox/checkbox.module';

@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
  ],
  exports: [
    SelectComponent,
  ],
})
export class SelectModule {
}
