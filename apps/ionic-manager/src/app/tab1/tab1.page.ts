import { Component, OnInit } from '@angular/core';
import { BaseAppointmentsFacade } from '../store/peliculas/appointment.facade';

@Component({
  selector: 'appointment-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(public appointmentsFacade: BaseAppointmentsFacade) {}

  ngOnInit(): void {
    this.appointmentsFacade.loadViewData();
  }
}
