import { ApiProperty } from '@nestjs/swagger';

// class validator
import { IsNotEmpty } from 'class-validator';

// Entity
import { User } from '../../auth/entities/user.entity';

// Enum
import { AppointmentStatusEnums } from '../enums/appointment-status-enums';

export class NewAppointent {
  @ApiProperty({ type: 'string', required: false })
  @IsNotEmpty()
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
  @IsNotEmpty()
  status: AppointmentStatusEnums;
  user: User;
}
