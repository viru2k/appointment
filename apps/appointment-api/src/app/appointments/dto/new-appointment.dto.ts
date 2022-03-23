import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../auth/entities/user.entity';
import { AppointmentStatusEnums } from '../enums/appointment-status-enums';

export class NewAppointent {
  @ApiProperty({ type: 'string', required: false })
  description: string;

  @ApiProperty({
    enum: AppointmentStatusEnums,
    isArray: true,
    required: true,
  })
  status: AppointmentStatusEnums;
  user: User;
}
