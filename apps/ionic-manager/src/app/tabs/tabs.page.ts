import { Component, OnInit } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';
import { TranslocoService } from '@ngneat/transloco';
import { PrivateFlowManager } from './flow/private-flow-manager';
import { BaseSharedFacade } from '../../../../../libs/store/src/lib/shared/shared.facade';

@Component({
  selector: 'appointment-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  currentLanguage = 'es';
  constructor(
    private service: TranslocoService,
    private privateFlowManager: PrivateFlowManager,
    private sharedFacade: BaseSharedFacade
  ) {}

  ngOnInit(): void {
    this.onSiteLanguageSubscription();
  }

  segmentChanged(event: any): void {}

  gotToSettings(): void {
    this.privateFlowManager.navigateTo('private/settings');
  }

  changeSiteLanguage(): void {
    this.currentLanguage === 'es'
      ? (this.currentLanguage = 'en')
      : (this.currentLanguage = 'es');
    console.log(this.currentLanguage);
    this.sharedFacade.setLanguage(this.currentLanguage);
  }

  private onSiteLanguageSubscription(): void {
    this.sharedFacade.language$.subscribe((language: string) => {
      this.service.setActiveLang(language);
    });
  }
}
