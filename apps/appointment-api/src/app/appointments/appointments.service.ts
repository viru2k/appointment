//Nest
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// Entity
import { Appointment } from './entities/appointment.entity';

// Repository
import { AppointmentRepository } from './repositories/appointment.repository';

// DTO
import { NewAppointent } from './dto/new-appointment.dto';
import { CurrentAppointment } from './dto/current-appointment.dto';
import { FilterAppointment } from './dto/filter-appointment.dto';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(AppointmentRepository)
    private appointmentRepository: AppointmentRepository
  ) {}

  async getAllAppointemnts(
    filter: FilterAppointment,
    user: User
  ): Promise<CurrentAppointment[]> {
    const appointment = this.appointmentRepository.getAllAppointment(
      filter,
      user
    );
    return appointment;
  }

  async getAppointmenById(id: string, user: User): Promise<CurrentAppointment> {
    const appointment = await this.appointmentRepository.findOne({
      where: { id, user },
    });
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }
    return appointment;
  }

  getAppointmentsByPOS(id: string): CurrentAppointment {
    return null;
  }

  async newAppointment(
    createAppoinmentDto: NewAppointent
  ): Promise<Appointment> {
    return this.appointmentRepository.setAppointment(createAppoinmentDto);
  }

  async putAppointment(
    id: string,
    currentAppointment: CurrentAppointment,
    user: User
  ): Promise<Appointment> {
    const appintment = await this.getAppointmenById(id, user);
    return this.appointmentRepository.putAppointment(currentAppointment);
  }
}
