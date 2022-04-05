// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import {
  AppointmentsDataState,
  AppointmentsFormState,
  AppointmentsReducerFunction,
  AppointmentsFormReducerFunction,
} from './appointment.reducers';

export interface AppointmentState {
  AppointmentsDataState: AppointmentsDataState;
  AppointmentsFormState: AppointmentsFormState;
}
export const AppointmentReducers: ActionReducerMap<AppointmentState> = {
  AppointmentsDataState: AppointmentsReducerFunction,
  AppointmentsFormState: AppointmentsFormReducerFunction,
};
