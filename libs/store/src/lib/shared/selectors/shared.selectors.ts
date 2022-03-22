// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { LoaderState } from '../reducers/shared.reducers';

export const selectLoaderState = createFeatureSelector<LoaderState>('shared');

export const getLoader = createSelector(selectLoaderState, (state) => {
  return state.loader;
});
