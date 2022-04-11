import { Component, OnInit } from '@angular/core';
import { AuthUser } from '@appointment/models';
import { BaseLoginFacade, BaseSharedFacade } from '@appointment/store';

import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'appointment-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  currentLanguage = 'es';

  constructor(
    public loginFacade: BaseLoginFacade,
    private sharedFacade: BaseSharedFacade,
    private service: TranslocoService
  ) {
    this.setAuthTokenSubscription();
  }

  ngOnInit(): void {
    this.onSiteLanguageSubscription();
  }

  doLogin(): void {
    this.loginFacade.updateUserName('UserTesting1');
    this.loginFacade.updatePassword('123456Test');
    const user: AuthUser = {
      username: 'UserTesting1',
      email: 'usertest1@gmail.com',
      password: '123456Test',
    };
    this.loginFacade.signIn(user);
  }

  changeSiteLanguage(): void {
    this.currentLanguage === 'es'
      ? (this.currentLanguage = 'en')
      : (this.currentLanguage = 'es');
    console.log(this.currentLanguage);
    this.sharedFacade.setLanguage(this.currentLanguage);
  }

  private setusernameSubscription(): void {}

  private setPasswordSubscription(): void {}

  private setAuthTokenSubscription(): void {
    this.loginFacade.token$.subscribe((token: string) => {
      console.log('accessToken', token);
      if (!!token) {
        localStorage.setItem('accessToken', JSON.stringify(token));
        console.log(JSON.parse(localStorage.getItem('accessToken')));
      }
    });
    this.doLogin();
  }

  private onSiteLanguageSubscription(): void {
    this.sharedFacade.language$.subscribe((language: string) => {
      this.service.setActiveLang(language);
    });
  }
}
