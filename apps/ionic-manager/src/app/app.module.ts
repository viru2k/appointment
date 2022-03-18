import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/** Imports for font awesome */

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Store
import { AppointmentsStoreModule, CoreStoreModule } from '@appointment/store';

//Translations
import { TranslationsModule } from '@appointment/translations';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () =>
    import(`./../../../../libs/translations/src/lib/i18n/${lang}.json`);
  return acc;
}, {});
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    CoreStoreModule,
    AppointmentsStoreModule,
    TranslationsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}
