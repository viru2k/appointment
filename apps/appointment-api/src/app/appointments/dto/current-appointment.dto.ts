import { AppointmentStatusEnums } from '../enums/appointment-status-enums';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../auth/entities/user.entity';

export class CurrentAppointment {
  @ApiProperty({ type: 'string', required: true })
  id: string;
  @ApiProperty({ type: 'string', required: false })
  description: string;
  @ApiProperty({ type: 'number', required: false })
  number: number;
  @ApiProperty({ type: 'string', required: false })
  ticket: string;
  @ApiProperty({
    enum: AppointmentStatusEnums,
    isArray: true,
    required: true,
  })
  status: AppointmentStatusEnums;
  user: User;
}
