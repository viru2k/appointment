import { Component, OnInit } from '@angular/core';
import { BaseLoginFacade } from '@appointment/store';
import { AuthUser } from '../../../../../appointment-api/src/app/auth/dto/auth-user.dto';

@Component({
  selector: 'appointment-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public loginFacade: BaseLoginFacade) {
    this.setAuthTokenSubscription();
  }

  ngOnInit(): void {}

  doLogin(): void {
    this.loginFacade.updateUserName('user1');
    this.loginFacade.updatePassword('Brida1234');
    const user: AuthUser = {
      username: 'user1',
      email: 'gastonvillafane@gmail.com',
      password: 'Brida1234',
    };
    this.loginFacade.signIn(user);
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
}
