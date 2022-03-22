// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { LoaderActions } from '../actions/action-types';

export interface LoaderState {
  loader: boolean;
}

export const initialLoaderState: LoaderState = {
  loader: null,
};

export const loaderReducer = createReducer(
  initialLoaderState,

  on(LoaderActions.showLoader, (state) => {
    return {
      ...state,
      loader: true,
    };
  }),

  on(LoaderActions.hideLoader, (state) => {
    return {
      ...state,
      loader: false,
    };
  })
);

export function loaderReducerFunction(
  state: LoaderState | undefined,
  action: Action
) {
  return loaderReducer(state, action);
}
