import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginPageRoutingModule,
    LoginStoreModule,
    TranslationsModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
