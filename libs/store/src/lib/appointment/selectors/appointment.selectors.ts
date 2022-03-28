// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// StoreM
import { AppointmentState } from '../reducers/reducer-map';

export const getAppointmentsModuleState =
  createFeatureSelector<AppointmentState>('Appointment');

// VIEW DATA SELECTORS
export const getAppointmentsState = createSelector(
  getAppointmentsModuleState,
  (state) => state.AppointmentsDataState
);

export const getAppointments = createSelector(
  getAppointmentsState,
  (state) => state.appointments
);

export const isViewReady = createSelector(getAppointmentsState, (state) => {
  return !!state.appointments;
});

// VIEW FORM SELECTORS
export const getAppointmentsFormState = createSelector(
  getAppointmentsModuleState,
  (state) => state.AppointmentsFormState
);

export const getAppointmentList = createSelector(
  getAppointmentsFormState,
  (state) => state.appointmentList
);

