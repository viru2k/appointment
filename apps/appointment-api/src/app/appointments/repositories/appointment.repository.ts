import { EntityRepository, Repository } from 'typeorm';
import { AppointmentEntity } from '../entities/appointment.entity';

@EntityRepository(AppointmentEntity)
export class AppointmentRepository extends Repository<AppointmentEntity> {}
