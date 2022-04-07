import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectorPage } from './sector.page';
import { SectorPageRoutingModule } from './sector-routing.module';
import { AppointmentsStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

//UI components
import { UIModule } from '@appointment/ui';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SectorPageRoutingModule,
    AppointmentsStoreModule,
    TranslationsModule,
    UIModule,
  ],
  declarations: [SectorPage],
})
export class SectorPageModule {}
