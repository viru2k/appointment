// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
import { AppointmentEffects } from './effects/appointment.effects';
import { AppointmentReducers } from './reducers/reducer-map';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('Appointment', AppointmentReducers),
    EffectsModule.forFeature([AppointmentEffects]),
  ],
  providers: [],
})
export class AppointmentsStoreModule {}
