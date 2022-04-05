import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppointmentsStoreModule } from '@appointment/store';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

//font awesome setup

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UIModule } from '@appointment/ui';

// Translations
import { TranslationsModule } from '@appointment/translations';

// Components
import { AccordionModule } from 'ngx-bootstrap/accordion';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    FontAwesomeModule,
    UIModule,
    TranslationsModule,
    AccordionModule.forRoot(),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
