import { Injectable } from '@nestjs/common';

import { NewAppointent } from './dto/new-appointment.dto';
import { CurrentAppointment } from './dto/current-appointment.dto';

@Injectable()
export class AppointmentsService {
  appointments: CurrentAppointment[] = [];

  getAllAppointemnts(): CurrentAppointment[] {
    return this.appointments;
  }

  getAppointmentsByPOS(id: string): CurrentAppointment {
    return null;
  }

  newAppointment(createAppoinmentDto: NewAppointent): NewAppointent {
    const { description, status } = createAppoinmentDto;
    const newAppointentElement: NewAppointent = { description, status };

    this.appointments.push(<CurrentAppointment>newAppointentElement);
    return newAppointentElement;
  }

  updateAppointment(
    currentAppointment: CurrentAppointment
  ): CurrentAppointment {
    const { id, description, status } = currentAppointment;
    const updateAppointmentElement: CurrentAppointment = {
      id,
      description,
      status,
    };

    // this.appointments.push(newAppointment);
    return updateAppointmentElement;
  }
}
