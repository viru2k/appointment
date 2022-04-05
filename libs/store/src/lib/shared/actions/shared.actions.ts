// Ngrx
import { createAction, props } from '@ngrx/store';

export const showLoader = createAction('[Loader] Show Loader');

export const hideLoader = createAction('[Loader] Hide Loader');

export const setCurrentLanguage = createAction(
  '[Translation] Set Current Language',
  props<{ language: string }>()
);
