// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { SharedActions } from '../actions/action-types';

export interface LoaderState {
  loader: boolean;
  language: string;
}

export const initialLoaderState: LoaderState = {
  loader: null,
  language: 'es',
};

export const loaderReducer = createReducer(
  initialLoaderState,

  on(SharedActions.showLoader, (state) => {
    return {
      ...state,
      loader: true,
    };
  }),

  on(SharedActions.hideLoader, (state) => {
    return {
      ...state,
      loader: false,
    };
  }),
  on(SharedActions.hideLoader, (state) => {
    return {
      ...state,
      loader: false,
    };
  }),

  on(SharedActions.setCurrentLanguage, (state, payload) => {
    console.log(payload);
    return {
      ...state,
      language: payload.language,
    };
  })
);

export const TranslationReducer = createReducer(initialLoaderState);

export function loaderReducerFunction(
  state: LoaderState | undefined,
  action: Action
) {
  return loaderReducer(state, action);
}
