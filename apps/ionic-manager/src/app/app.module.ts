// Angular
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Store
import {
  AppointmentsStoreModule,
  CoreStoreModule,
  SharedStoreModule,
  LoginStoreModule,
} from '@appointment/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// JWT
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

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

//Translations
import { TranslationsModule } from '@appointment/translations';

// Componets
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { UIModule } from '../../../../libs/ui/src/lib/ui.module';

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    // Store
    CoreStoreModule,
    LoginStoreModule,
    SharedStoreModule,
    AppointmentsStoreModule,
    // Translation
    TranslationsModule,
    // Custom components
    UIModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function (injector: Injector) {
        return new JwtInterceptor(injector);
      },
      multi: true,
      deps: [Injector],
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
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
