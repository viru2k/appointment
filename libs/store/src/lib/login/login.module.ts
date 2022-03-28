// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
import { LoginEffects } from './effects/login.effects';
import { LoginReducers } from './reducers/reducer-map';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('Login', LoginReducers),
    EffectsModule.forFeature([LoginEffects]),
  ],
  providers: [],
})
export class LoginStoreModule {}
