// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Ngrx
import { select, Store } from '@ngrx/store';

// Store
import { AppointmentActions } from './actions/action-types';
import { AppointmentState } from './reducers/reducer-map';
import { AppointmentsFormState } from './reducers/appointment.reducers';

import * as fromSelectors from './selectors/appointment.selectors';
import { CurrentAppointment, NewAppointent } from '@appointment/models';

/**
 *  This file is created to do as is name said, a nexus from the store and view
 *  for handle observables and methods which reacts with user actions
 * **/

@Injectable({ providedIn: 'root' })
export class BaseAppointmentsFacade {
  // DATA VIEW OBSERVABLES
  isViewReady$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.isViewReady)
  );

  Appointments$: Observable<CurrentAppointment[]> = this.parentStore.pipe(
    select(fromSelectors.getAppointments)
  );

  peliculaList$: Observable<CurrentAppointment[]> = this.parentStore.pipe(
    select(fromSelectors.getAppointmentList)
  );

  // FORM VIEW OBSERVABLES
  formData$: Observable<AppointmentsFormState> = this.parentStore.pipe(
    select(fromSelectors.getAppointmentsFormState)
  );

  /*  selectedAppointment$: Observable<CurrentAppointment> = this.parentStore.pipe(
    select(fromSelectors.getSelectedAppointment)
  ); */

  constructor(private parentStore: Store<AppointmentState>) {}

  loadViewData(): void {
    this.parentStore.dispatch(AppointmentActions.getAppointments());
    this.isViewReady$.pipe(take(1)).subscribe((isReady: boolean) => {
      if (isReady) {
        return;
      }
    });
  }

  updateCurrentAppointment(selectedAppointment: CurrentAppointment): void {
    this.parentStore.dispatch(
      AppointmentActions.updateForm({ selectedAppointment })
    );
  }

  /**  Not used because of out time
   *   This methos are used to  handle a reactive form, picking up any change made at the form
   *   and saving at the store
   * **/
  updatetitulo(titulo: string): void {
    this.parentStore.dispatch(AppointmentActions.updateForm({ titulo }));
  }

  setAppointment(newAppointent: NewAppointent): void {
    this.parentStore.dispatch(
      AppointmentActions.setAppointment({ payload: newAppointent })
    );
  }

  /*   updateAppointment(movie: CurrentAppointment): void {
    this.parentStore.dispatch(AppointmentActions.updateAppointment({ movie }));
  }
 */

  clearAppointments(): void {
    this.parentStore.dispatch(AppointmentActions.clearData());
  }

  clearAppointmentsForm(): void {
    this.parentStore.dispatch(AppointmentActions.clearForm());
  }

  clearCurrentAppointmentForm(): void {
    this.parentStore.dispatch(AppointmentActions.clearCurrentAppointmentForm());
  }
}
