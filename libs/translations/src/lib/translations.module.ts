// Angular
import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Transloco
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

// used for currency, date and decimal localization
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`../lib/i18n/${lang}.json`);
  return acc;
}, {});

@NgModule({
  imports: [TranslocoLocaleModule.forRoot()],
  exports: [TranslocoModule, TranslocoLocaleModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['es', 'en'],
        defaultLang: 'es',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: false,
      }),
    },
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'scopeTranslation',
        loader,
      },
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class TranslationsModule {}
