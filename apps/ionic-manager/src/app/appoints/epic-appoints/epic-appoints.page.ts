import { Component } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';

@Component({
  selector: 'appointment-epic-appoints',
  templateUrl: 'epic-appoints.page.html',
})
export class EpicAppointsPage {
  constructor(public appointmentsFacade: BaseAppointmentsFacade) {}

  ionViewWillEnter(): void {
    this.appointmentsFacade.loadViewData();
    //  this.setAppointmentSubscription();
  }

  ionViewDidLeave(): void {
    console.log('destroyed');
    this.appointmentsFacade.clearAppointments();
    this.appointmentsFacade.clearAppointmentsForm();
  }

  newAppointment(): void {}
  //setAppointmentSubscription;
}
