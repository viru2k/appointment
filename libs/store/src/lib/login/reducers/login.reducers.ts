// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { LoginActions } from '../actions/action-types';

// DATA VIEW STATE
export interface LoginDataState {
  token: string;
}

export const initialState: LoginDataState = {
  token: null,
};

const LoginReducer = createReducer(
  initialState,
  on(LoginActions.signInSuccess, (state, action) => {
    return {
      ...state,
      token: action.payload,
    };
  }),
  // TODO - Pending to resolve
  on(LoginActions.getCurrentProfile, (state, action) => {
    return { ...state, LoginDetails: action.payload };
  }),

  on(LoginActions.clearData, () => {
    return { ...initialState };
  })
);

export function LoginReducerFunction(
  state: LoginDataState | undefined,
  action: Action
): any {
  return LoginReducer(state, action);
}

// FORM VIEW STATE
export interface LoginFormState {
  username: string;
  password: string;
  email: string;
}

export const initialFormState: LoginFormState = {
  username: null,
  password: null,
  email: null,
};

const LoginFormReducer = createReducer(
  initialFormState,
  on(LoginActions.signInFail, (state, action) => {
    return {
      ...state,
      username: null,
      password: null,
      email: null,
    };
  }),

  on(LoginActions.updateForm, (state, action) => {
    const actionValue = {
      [Object.keys(action)[0]]: action[Object.keys(action)[0]],
    };
    return Object.assign({}, state, actionValue);
  }),

  on(LoginActions.clearCurrentLoginForm, (state) => {
    return {
      ...state,
      username: null,
      password: null,
      email: null,
    };
  }),
  on(LoginActions.clearForm, () => {
    return initialFormState;
  })
);

export function LoginFormReducerFunction(
  state: LoginFormState | undefined,
  action: Action
): LoginFormState {
  return LoginFormReducer(state, action);
}
