import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SettingsPageRoutingModule } from './settings-routing.module';
import { AppointmentsStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SettingsPageRoutingModule,
    AppointmentsStoreModule,
    TranslationsModule,
  ],
  declarations: [SettingsPage],
})
export class SettingsPageModule {}
