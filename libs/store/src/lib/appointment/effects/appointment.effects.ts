// Angular
import { Injectable } from '@angular/core';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Rxjs
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';

// Store
import { AppointmentActions } from '../actions/action-types';

// API
import { AppointmentsService } from '@appointment/api';

import { LoaderActions } from '../../shared/actions/action-types';
import { NewAppointent, CurrentAppointment } from '@appointment/models';

// Show/hide spinner actions
const SHOW_LOADER_ACTIONS = [AppointmentActions.getAppointments];
const HIDE_LOADER_ACTIONS = [
  AppointmentActions.getAppointmentsSuccess,
  AppointmentActions.getAppointmentFail,
];

@Injectable()
export class AppointmentEffects {
  constructor(
    private actions$: Actions,
    private appointmentsService: AppointmentsService
  ) {}

  getAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentActions.getAppointments),
      exhaustMap(() =>
        this.appointmentsService
          .appointmentsControllerGetAllAppointments()
          .pipe(
            map((data: CurrentAppointment[]) => {
              return AppointmentActions.getAppointmentsSuccess({
                payload: data,
              });
            }),
            catchError((error) =>
              of(AppointmentActions.getAppointmentFail(error))
            )
          )
      )
    )
  );
  /* 
  updateAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentActions.updateAppointment),
      exhaustMap((payload) =>
        this.appointmentsService.appointmentsControllerPutAppointment(payload.appointment).pipe(
          map((data) => {
            return AppointmentActions.updateAppointmentsuccess({
               data
            });
          }),
          catchError((error) =>
            of(AppointmentActions.getAppointmentFail(error))
          )
        )
      )
    )
  ); */
  /* 
  setAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentActions.setAppointment),
      exhaustMap((payload) =>
        this.appointmentsService.appointmentsControllerPostAppointment(payload).pipe(
          map((data: NewAppointent) => {
            return AppointmentActions.setAppointmentsuccess({
              payload: data,
            });
          }),
          catchError((error) =>
            of(AppointmentActions.getAppointmentFail(error))
          )
        )
      )
    )
  );
 */

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
