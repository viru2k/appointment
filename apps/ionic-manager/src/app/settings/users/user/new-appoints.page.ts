import { Component } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';

@Component({
  selector: 'appointment-new-appoints',
  templateUrl: 'new-appoints.page.html',
})
export class NewAppointsPage {
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
