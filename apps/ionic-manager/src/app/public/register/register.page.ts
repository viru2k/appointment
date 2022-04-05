import { Component, OnInit } from '@angular/core';
import { BaseLoginFacade } from '@appointment/store';

@Component({
  selector: 'appointment-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(public loginFacade: BaseLoginFacade) {}

  ngOnInit(): void {}
}
