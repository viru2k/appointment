import { AppointmentEntity } from './entities/appointment.entity';
import { Injectable } from '@nestjs/common';

import { NewAppointent } from './dto/new-appointment.dto';
import { CurrentAppointment } from './dto/current-appointment.dto';
import { AppointmentRepository } from './repositories/appointment.repository';

//TypeOrm
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(AppointmentRepository)
    private appointmentRepository: AppointmentRepository
  ) {}

  async getAllAppointemnts(): Promise<AppointmentEntity[]> {
    const appointment = this.appointmentRepository.find();
    return appointment;
  }

  async getAppointmenById(id: string): Promise<AppointmentEntity> {
    const appointment = this.appointmentRepository.findOneOrFail(id);
    return appointment;
  }

  getAppointmentsByPOS(id: string): CurrentAppointment {
    return null;
  }

  async newAppointment(
    createAppoinmentDto: NewAppointent
  ): Promise<AppointmentEntity> {
    const { description, status } = createAppoinmentDto;
    const newAppointentElement = this.appointmentRepository.create({
      description,
      status,
    });
    await this, this.appointmentRepository.save(newAppointentElement);
    return newAppointentElement;
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
