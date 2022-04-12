import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';

import { SettingsPageRoutingModule } from './settings-routing.module';
import { AppointmentsStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    SettingsPageRoutingModule,
    AppointmentsStoreModule,
    TranslationsModule,
  ],
  declarations: [SettingsPage],
})
export class SettingsPageModule {}
