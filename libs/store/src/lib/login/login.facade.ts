// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Ngrx
import { select, Store } from '@ngrx/store';

// Store
import { LoginActions } from './actions/action-types';
import { LoginState } from './reducers/reducer-map';
import { LoginFormState } from './reducers/login.reducers';

import * as fromSelectors from './selectors/login.selectors';
import { AuthUser, NewUser } from '@appointment/models';

/**
 *  This file is created to do as is name said, a nexus from the store and view
 *  for handle observables and methods which reacts with user actions
 * **/

@Injectable({ providedIn: 'root' })
export class BaseLoginFacade {
  // DATA VIEW OBSERVABLES

  token$: Observable<string> = this.parentStore.pipe(
    select(fromSelectors.getToken)
  );

  // FORM VIEW OBSERVABLES
  formData$: Observable<LoginFormState> = this.parentStore.pipe(
    select(fromSelectors.getLoginFormState)
  );

  constructor(private parentStore: Store<LoginState>) {}

  signIn(authUser: AuthUser): void {
    this.parentStore.dispatch(LoginActions.signIn({ payload: authUser }));
  }

  signUp(newUser: NewUser): void {
    this.parentStore.dispatch(LoginActions.signUp({ payload: newUser }));
  }

  updateUserName(username: string): void {
    this.parentStore.dispatch(LoginActions.updateForm({ username }));
  }

  updatePassword(password: string): void {
    this.parentStore.dispatch(LoginActions.updateForm({ password }));
  }

  updateEmail(email: string): void {
    this.parentStore.dispatch(LoginActions.updateForm({ email }));
  }

  clearLogin(): void {
    this.parentStore.dispatch(LoginActions.clearData());
  }

  clearLoginForm(): void {
    this.parentStore.dispatch(LoginActions.clearForm());
  }

  clearCurrentLoginForm(): void {
    this.parentStore.dispatch(LoginActions.clearCurrentLoginForm());
  }
}
