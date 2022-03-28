import { Component, OnInit } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';

@Component({
  selector: 'appointment-appoints',
  templateUrl: 'appoints.page.html',
  styleUrls: ['appoints.page.scss'],
})
export class AppointsPage implements OnInit {
  constructor(public appointmentsFacade: BaseAppointmentsFacade) {}

  ngOnInit(): void {
    console.log('loadong');
    this.appointmentsFacade.loadViewData();
    //  this.setAppointmentSubscription();
  }

  newAppointment(): void {}
  //setAppointmentSubscription;
}
