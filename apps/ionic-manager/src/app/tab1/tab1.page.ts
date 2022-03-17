import { Component, OnInit } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';

@Component({
  selector: 'appointment-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(public appointmentsFacade: BaseAppointmentsFacade) {}

  ngOnInit(): void {
    console.log('loadong');
    this.appointmentsFacade.loadViewData();
  }
}
