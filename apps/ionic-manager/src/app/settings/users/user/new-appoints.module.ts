import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewAppointsPage } from './new-appoints.page';
import { NewAppointsPageRoutingModule } from './new-appoints-routing.module';
import { AppointmentsStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

//UI components
import { UIModule } from '@appointment/ui';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NewAppointsPageRoutingModule,
    AppointmentsStoreModule,
    TranslationsModule,
    UIModule,
  ],
  declarations: [NewAppointsPage],
})
export class NewAppointsPageModule {}
