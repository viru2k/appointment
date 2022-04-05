// Ngrx
import { createAction, props } from '@ngrx/store';

// API
import { NewAppointent, CurrentAppointment } from '@appointment/models';

// VIEW DATA REQUEST ACTIONS
export const getAppointments = createAction('[Appointments] Get Appointments');

export const getAppointmentsSuccess = createAction(
  '[Appointments] Get Appointments Success',
  props<{ payload: CurrentAppointment[] }>()
);

export const getAppointmentById = createAction(
  '[Appointment] Get Appointment By Id',
  props<{ payload: CurrentAppointment }>()
);
export const getAppointmentByIdSuccess = createAction(
  '[Appointment] Get Appointment By Id Success',
  props<{ payload: CurrentAppointment }>()
);
//
export const getAppointmentFail = createAction(
  '[Appointment] Get Appointment Fail',
  props<{ payload: any }>()
);

export const deleteAppointment = createAction(
  '[Appointments] Remove Appointment',
  props<{ appointment: CurrentAppointment }>()
);

export const deleteAppointmentsuccess = createAction(
  '[Appointment] Remove Appointment Success',
  props<{ payload: CurrentAppointment[] }>()
);

export const setAppointment = createAction(
  '[Appointment] Set Appointment',
  props<{ payload: NewAppointent }>()
);

export const setAppointmentsuccess = createAction(
  '[Appointment] Set Appointment Success',
  props<{ payload: NewAppointent }>()
);

export const updateAppoint = createAction(
  '[Appointment] Update Appointment',
  props<{ appointment: CurrentAppointment }>()
);

export const updateAppointmentsuccess = createAction(
  '[Appointment] Update Appointment Success',
  props<{ payload: CurrentAppointment[] }>()
);

// FORM ACTIONS
export const updateForm = createAction(
  '[Appointments] Update Form',
  props<{
    [key: string]: any;
  }>()
);

// CLEAN ACTIONS
export const clearForm = createAction('[Appointments] Clear Form');

export const clearCurrentAppointmentForm = createAction(
  '[Appointments] Clear Current Appointment Form'
);

export const clearData = createAction('[Appointments] Clear  Data');
