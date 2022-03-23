//TypeOrm
import { EntityRepository, Repository } from 'typeorm';

// Entity
import { Appointment } from '../entities/appointment.entity';

// DTO
import { NewAppointent } from '../dto/new-appointment.dto';
import { CurrentAppointment } from '../dto/current-appointment.dto';
import { FilterAppointment } from '../dto/filter-appointment.dto';

@EntityRepository(Appointment)
export class AppointmentRepository extends Repository<Appointment> {
  async getAllAppointment(filter: FilterAppointment): Promise<Appointment[]> {
    const { status, search } = filter;
    const query = this.createQueryBuilder('appointment');

    if (status) {
      query.andWhere('appointment.status = :status', { status });
    }
    if (search) {
      query.andWhere('LOWER(appointment.description) LIKE :search', {
        search: `%${search}%`,
      });
    }
    const appointments = await query.getMany();
    return appointments;
  }

  async setAppointment(newAppointent: NewAppointent): Promise<Appointment> {
    console.log(newAppointent);
    const { description, status, user } = newAppointent;
    const newAppointentElement = this.create({
      description,
      status,
      user,
    });
    await this.save(newAppointentElement);
    return newAppointentElement;
  }

  async putAppointment(
    putAppointment: CurrentAppointment
  ): Promise<Appointment> {
    // const { id, description, status } = putAppointment;
    const updateAppointmentElement: CurrentAppointment = putAppointment; /* = {
      putAppointment.id,
      putAppointment.description,
      putAppointment.status,
      putAppointment.user
    }; */
    await this.save(updateAppointmentElement);
    return updateAppointmentElement;
  }
}
