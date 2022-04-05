// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { LoaderState } from '../reducers/shared.reducers';

export const selectSharedState = createFeatureSelector<LoaderState>('shared');

export const getLoader = createSelector(selectSharedState, (state) => {
  return state.loader;
});

export const getLanguage = createSelector(selectSharedState, (state) => {
  return state.language;
});
