import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// Ionic
import { IonicModule, IonMenu } from '@ionic/angular';
// Translation
import { TranslationsModule } from '@appointment/translations';
import { AppointmentItemComponent } from './mobile/item/appointment/appointment-item';

@NgModule({
  imports: [IonicModule, CommonModule, TranslationsModule],
  providers: [TranslationsModule],
  declarations: [AppointmentItemComponent],
  exports: [AppointmentItemComponent, TranslationsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UIModule {}
