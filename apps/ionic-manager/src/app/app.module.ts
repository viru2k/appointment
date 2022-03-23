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
import {
  faSquare,
  faCheckSquare,
  faVolumeUp,
  faCog,
  faListCheck,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
} from '@fortawesome/free-regular-svg-icons';

// Store
import {
  AppointmentsStoreModule,
  CoreStoreModule,
  SharedStoreModule,
} from '@appointment/store';

//Translations
import { TranslationsModule } from '@appointment/translations';

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
    TranslationsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faVolumeUp,
      faListCheck,
      faIdCard,
      faCog,
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare
    );
  }
}
