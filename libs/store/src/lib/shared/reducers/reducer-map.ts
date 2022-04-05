// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import { routerReducer } from '@ngrx/router-store';
import { RouterNavigatorDataState } from './router-navigator.reducers';

export interface sharedState {
  appRouterReducer: RouterNavigatorDataState;
}
export const sharedsReducers: ActionReducerMap<sharedState> = {
  appRouterReducer: routerReducer,
};
