import { Component } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';

@Component({
  selector: 'appointment-profile',
  templateUrl: 'profile.page.html',
})
export class ProfilePage {
  constructor(public appointmentsFacade: BaseAppointmentsFacade) {}

  ionViewWillEnter(): void {
    this.appointmentsFacade.loadViewData();
    //  this.setAppointmentSubscription();
    console.log('at profile');
  }

  ionViewDidLeave(): void {
    console.log('destroyed');
    this.appointmentsFacade.clearAppointments();
    this.appointmentsFacade.clearAppointmentsForm();
  }

  newAppointment(): void {}
  //setAppointmentSubscription;
}
