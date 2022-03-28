import { NgModule } from '@angular/core';
import { AppointmentItemComponent } from './mobile/item/appointment/appointment-item';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule],
  providers: [],
  declarations: [AppointmentItemComponent],
  exports: [AppointmentItemComponent],
})
export class UIModule {}
