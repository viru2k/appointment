// Ngrx
import { createAction, props } from '@ngrx/store';

// API
import { AuthUser, NewUser } from '@appointment/models';

// VIEW DATA REQUEST ACTIONS
export const signIn = createAction(
  '[Login] Sign In ',
  props<{ payload: AuthUser }>()
);

export const signInSuccess = createAction(
  '[Login] Sign In  Success',
  props<{ payload: string }>()
);

export const signInFail = createAction(
  '[Login] Sign In Fail',
  props<{ payload: any }>()
);

export const signUp = createAction(
  '[Login] Sign Up ',
  props<{ payload: NewUser }>()
);

export const signUpSuccess = createAction('[Login] Sign Up  Success');

export const signUpFail = createAction(
  '[Login] Sign Up Fail',
  props<{ payload: any }>()
);

export const getCurrentProfile = createAction(
  '[Login] Get Current Profile',
  props<{ payload: AuthUser }>()
);

export const getCurrentProfileSuccess = createAction(
  '[Login] Get Current Profile Success',
  props<{ payload: AuthUser }>()
);

// FORM ACTIONS
export const updateForm = createAction(
  '[Login] Update Form',
  props<{
    [key: string]: any;
  }>()
);

// CLEAN ACTIONS
export const clearForm = createAction('[Login] Clear Form');

export const clearCurrentLoginForm = createAction(
  '[Login] Clear Current Login Form'
);

export const clearData = createAction('[Login] Clear  Data');
