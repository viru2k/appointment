import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PermissionsPage } from './permission.page';
import { PermissionsPageRoutingModule } from './permission-routing.module';
import { AppointmentsStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

//UI components
import { UIModule } from '@appointment/ui';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PermissionsPageRoutingModule,
    AppointmentsStoreModule,
    TranslationsModule,
    UIModule,
  ],
  declarations: [PermissionsPage],
})
export class PermissionsPageModule {}
