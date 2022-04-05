import { Component } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';

@Component({
  selector: 'appointment-appoints',
  templateUrl: 'appoints.page.html',
  styleUrls: ['appoints.page.scss'],
})
export class AppointsPage {
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
