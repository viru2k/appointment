import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentPage } from './appointment.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AppointmentPageRoutingModule } from './appointment-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AppointmentPageRoutingModule,
  ],
  declarations: [AppointmentPage],
})
export class AppointmentPageModule {}
