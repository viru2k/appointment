import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';
import { RegisterPageRoutingModule } from './register-routing.module';
import { LoginStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegisterPageRoutingModule,
    LoginStoreModule,
    TranslationsModule,
  ],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
