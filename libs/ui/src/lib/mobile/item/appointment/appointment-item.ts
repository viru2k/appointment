// Angular
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CurrentAppointment } from '@appointment/models';

// Store

// Api

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.html',
})
export class AppointmentItemComponent implements OnInit, OnDestroy {
  @Input() item: any;
  @Output() editedAppointment = new EventEmitter<CurrentAppointment>();
  @Output() deletedAppointment = new EventEmitter<CurrentAppointment>();
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  editElement(selectedIitem: CurrentAppointment): void {
    this.editedAppointment.emit(selectedIitem);
  }

  deleteElement(selectedIitem: CurrentAppointment): void {
    this.deletedAppointment.emit(selectedIitem);
  }
}
