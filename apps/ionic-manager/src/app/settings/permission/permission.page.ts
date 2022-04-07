import { Component } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';

@Component({
  selector: 'appointment-permission',
  templateUrl: 'permission.page.html',
})
export class PermissionsPage {
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
