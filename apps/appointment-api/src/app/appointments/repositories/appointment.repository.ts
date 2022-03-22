import { EntityRepository, Repository } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';
import { NewAppointent } from '../dto/new-appointment.dto';
import { CurrentAppointment } from '../dto/current-appointment.dto';

@EntityRepository(Appointment)
export class AppointmentRepository extends Repository<Appointment> {
  async newAppontment(NewAppointent: NewAppointent): Promise<Appointment> {
    const { description, status } = NewAppointent;
    const newAppointentElement = this.create({
      description,
      status,
    });
    await this.save(newAppointentElement);
    return newAppointentElement;
  }

  async putAppointment(
    putAppointment: CurrentAppointment
  ): Promise<Appointment> {
    const { id, description, status } = putAppointment;
    const updateAppointmentElement: CurrentAppointment = {
      id,
      description,
      status,
    };
    await this.save(updateAppointmentElement);
    return updateAppointmentElement;
  }
}
