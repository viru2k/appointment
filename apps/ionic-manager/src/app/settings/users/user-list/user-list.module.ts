import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserListPage } from './user-list.page';
import { UserListPageRoutingModule } from './user-list-routing.module';
import { AppointmentsStoreModule } from '@appointment/store';
import { TranslationsModule } from '@appointment/translations';

//UI components
import { UIModule } from '@appointment/ui';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UserListPageRoutingModule,
    AppointmentsStoreModule,
    TranslationsModule,
    UIModule,
  ],
  declarations: [UserListPage],
})
export class UserListPageModule {}
