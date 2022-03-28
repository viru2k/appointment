// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import {
  LoginDataState,
  LoginFormState,
  LoginReducerFunction,
  LoginFormReducerFunction,
} from './login.reducers';

export interface LoginState {
  LoginDataState: LoginDataState;
  LoginFormState: LoginFormState;
}
export const LoginReducers: ActionReducerMap<LoginState> = {
  LoginDataState: LoginReducerFunction,
  LoginFormState: LoginFormReducerFunction,
};
