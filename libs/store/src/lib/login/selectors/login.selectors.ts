// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// StoreM
import { LoginState } from '../reducers/reducer-map';

export const getLoginModuleState = createFeatureSelector<LoginState>('Login');

// VIEW DATA SELECTORS
export const getLoginState = createSelector(
  getLoginModuleState,
  (state) => state.LoginDataState
);

export const getToken = createSelector(getLoginState, (state) => state.token);

// VIEW FORM SELECTORS
export const getLoginFormState = createSelector(
  getLoginModuleState,
  (state) => state.LoginFormState
);
