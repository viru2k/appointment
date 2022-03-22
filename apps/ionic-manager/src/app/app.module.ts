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

// Store
import {
  AppointmentsStoreModule,
  CoreStoreModule,
  SharedStoreModule,
} from '@appointment/store';

//Translations
import { TranslationsModule } from '@appointment/translations';

//Translation Transloco
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

// Componets
import { LoaderComponent } from './shared/components/loader/loader.component';

export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () =>
    import(`./../../../../libs/translations/src/lib/i18n/${lang}.json`);
  return acc;
}, {});
@NgModule({
  declarations: [AppComponent, LoaderComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    // Store
    CoreStoreModule,
    SharedStoreModule,
    AppointmentsStoreModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}
