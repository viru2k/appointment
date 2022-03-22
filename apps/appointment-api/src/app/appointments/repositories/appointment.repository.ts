import { EntityRepository, Repository } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';
import { NewAppointent } from '../dto/new-appointment.dto';

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
}
