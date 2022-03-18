import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointsPage } from './appoints.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AppointsPageRoutingModule } from './appoints-routing.module';
import { AppointmentsStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AppointsPageRoutingModule,
    AppointmentsStoreModule,
    TranslationsModule,
  ],
  declarations: [AppointsPage],
})
export class AppointsPageModule {}
