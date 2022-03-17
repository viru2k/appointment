// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { AppointmentActions } from '../actions/action-types';
import { CurrentAppointment } from '@appointment/models';

// DATA VIEW STATE
export interface AppointmentsDataState {
  appointments: CurrentAppointment[];
}

export const initialState: AppointmentsDataState = {
  appointments: [],
};

const AppointmentsReducer = createReducer(
  initialState,
  on(AppointmentActions.getAppointmentsSuccess, (state, action) => {
    return {
      ...state,
      appointments: action.payload,
    };
  }),

  on(AppointmentActions.getAppointmentByIdSuccess, (state, action) => {
    return { ...state, AppointmentDetails: action.payload };
  }),

  on(AppointmentActions.clearData, () => {
    return { ...initialState };
  })
);

export function AppointmentsReducerFunction(
  state: AppointmentsDataState | undefined,
  action: Action
): any {
  return AppointmentsReducer(state, action);
}

// FORM VIEW STATE
export interface AppointmentsFormState {
  appointmentList: CurrentAppointment[];
  // selectedAppointment: CurrentAppointment;
}

export const initialFormState: AppointmentsFormState = {
  appointmentList: [],
  //  selectedAppointment: null,
};

const AppointmentsFormReducer = createReducer(
  initialFormState,
  on(AppointmentActions.getAppointmentsSuccess, (state, action) => {
    return {
      ...state,
      appointmentList: action.payload,
    };
  }),

  /*   on(AppointmentActions.setAppointmentsuccess, (state, action) => {
    return {
      ...state,
      appointmentList: action.payload,
    };
  }), */
  on(AppointmentActions.updateAppointmentsuccess, (state, action) => {
    return {
      ...state,
      appointmentList: action.payload,
    };
  }),
  on(AppointmentActions.deleteAppointmentsuccess, (state, action) => {
    return {
      ...state,
      appointmentList: action.payload,
    };
  }),
  on(AppointmentActions.updateForm, (state, action) => {
    const actionValue = {
      [Object.keys(action)[0]]: action[Object.keys(action)[0]],
    };
    return Object.assign({}, state, actionValue);
  }),
  on(AppointmentActions.getAppointmentsSuccess, (state, action) => {
    return {
      ...state,
      appointmentList: action.payload,
    };
  }),
  on(AppointmentActions.clearCurrentAppointmentForm, (state) => {
    return {
      ...state,
      selectedAppointment: null,
      titulo: null,
      fechaEstreno: null,
      recaudacion: null,
      direccion: null,
      genero: null,
      productora: null,
    };
  }),
  on(AppointmentActions.clearForm, () => {
    return initialFormState;
  })
);

export function AppointmentsFormReducerFunction(
  state: AppointmentsFormState | undefined,
  action: Action
): AppointmentsFormState {
  return AppointmentsFormReducer(state, action);
}
