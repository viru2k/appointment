//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// Entity
import { Appointment } from './entities/appointment.entity';

// Repository
import { AppointmentRepository } from './repositories/appointment.repository';

// DTO
import { NewAppointent } from './dto/new-appointment.dto';
import { CurrentAppointment } from './dto/current-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(AppointmentRepository)
    private appointmentRepository: AppointmentRepository
  ) {}

  async getAllAppointemnts(): Promise<Appointment[]> {
    const appointment = this.appointmentRepository.find();
    return appointment;
  }

  async getAppointmenById(id: string): Promise<Appointment> {
    const appointment = this.appointmentRepository.findOneOrFail(id);
    return appointment;
  }

  getAppointmentsByPOS(id: string): CurrentAppointment {
    return null;
  }

  async newAppointment(
    createAppoinmentDto: NewAppointent
  ): Promise<Appointment> {
    return this.appointmentRepository.newAppontment(createAppoinmentDto);
  }
  /*
  updateAppointment(
    currentAppointment: CurrentAppointment
  ): CurrentAppointment {
    const { id, description, status } = currentAppointment;
    const updateAppointmentElement: CurrentAppointment = {
      id,
      description,
      status,
    };


    return updateAppointmentElement;
  } */
}
