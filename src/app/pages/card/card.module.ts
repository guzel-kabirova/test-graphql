import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardComponent} from './card.component';
import {ListItemModule} from '../../components/list-item/list-item.module';
import {DescriptionModule} from '../../components/description/description.module';


@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    ListItemModule,
    DescriptionModule,
  ],
})
export class CardModule {
}
