// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// Ngrx
import { select, Store } from '@ngrx/store';

// Store

import { sharedState } from './reducers/reducer-map';

import * as fromSharedSelectors from './selectors/shared.selectors';
import * as fromRouterSelectors from './selectors/reducer-navigator.selectors';
import { LoaderActions } from './actions/action-types';

@Injectable({ providedIn: 'root' })
export class BaseSharedFacade {
  // DATA VIEW OBSERVABLES
  loader$: Observable<boolean> = this.parentStore.pipe(
    select(fromSharedSelectors.getLoader)
  );

  constructor(private parentStore: Store<sharedState>) {}

  showLoader(): void {
    this.parentStore.dispatch(LoaderActions.showLoader());
  }
  HideLoader(): void {
    this.parentStore.dispatch(LoaderActions.hideLoader());
  }
}
