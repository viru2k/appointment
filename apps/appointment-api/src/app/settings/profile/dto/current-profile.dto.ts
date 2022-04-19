//Swagger
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

//Entity
import { User } from '../../../auth/entities/user.entity';

// Dto
import { BasicUser } from '../../../auth/dto/basic-user-dto';

// Enums
import { Module } from '../../modules/entities/module.entity';

export class CurrentProfile {
  @ApiProperty({ type: 'string', required: false })
  id: string;

  @ApiProperty({ type: 'boolean', required: false })
  sendNotification: boolean;

  @ApiProperty({ type: Module, required: false })
  @Expose({ toPlainOnly: false })
  module: Module;

  @ApiProperty({ type: BasicUser, required: false })
  @Expose({ toPlainOnly: false })
  user: User;
}
