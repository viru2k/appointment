import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PendingAppointsPage } from './pending-appoints.page';
import { PendingAppointsPageRoutingModule } from './pending-appoints-routing.module';
import { AppointmentsStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

//UI components
import { UIModule } from '@appointment/ui';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PendingAppointsPageRoutingModule,
    AppointmentsStoreModule,
    TranslationsModule,
    UIModule,
  ],
  declarations: [PendingAppointsPage],
})
export class PendingAppointsPageModule {}
