import { ToastService } from './../shared/components/toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { BaseAppointmentsFacade } from '@appointment/store';

@Component({
  selector: 'appointment-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(
    public appointmentsFacade: BaseAppointmentsFacade,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    console.log('loadong');
    this.appointmentsFacade.loadViewData();

    this.toastService.success('You have perrmission1', 6000);
  }
}
