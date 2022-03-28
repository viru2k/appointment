// Angular
import { Injectable } from '@angular/core';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Rxjs
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';

// Store
import { LoginActions } from '../actions/action-types';

// API
import { AuthService } from '@appointment/api';

import { LoaderActions } from '../../shared/actions/action-types';
import { NewUser, AuthUser } from '@appointment/models';

// Show/hide spinner actions
const SHOW_LOADER_ACTIONS = [
  LoginActions.signIn,
  LoginActions.signUp,
  LoginActions.getCurrentProfile,
];
const HIDE_LOADER_ACTIONS = [
  LoginActions.signInSuccess,
  LoginActions.signUpSuccess,
  LoginActions.getCurrentProfileSuccess,
  LoginActions.signInFail,
  LoginActions.signUpFail,
];

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.signIn),
      exhaustMap((payload) =>
        this.authService.authControllerSignIn({ body: payload.payload }).pipe(
          map((data) => {
            return LoginActions.signInSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(LoginActions.signInFail(error)))
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.signUp),
      exhaustMap((payload) =>
        this.authService.authControllerSignUp({ body: payload.payload }).pipe(
          map((data) => {
            return LoginActions.signUpSuccess();
          }),
          catchError((error) => of(LoginActions.signInFail(error)))
        )
      )
    )
  );

  showLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...SHOW_LOADER_ACTIONS),
      map(() => LoaderActions.showLoader())
    )
  );

  hideLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...HIDE_LOADER_ACTIONS),
      map(() => LoaderActions.hideLoader())
    )
  );
}
