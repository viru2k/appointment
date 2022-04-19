//Swagger
import { ApiProperty } from '@nestjs/swagger';

//Entity
import { User } from './../../../auth/entities/user.entity';
import { Sector } from '../../sector/entities/sector.entity';

//Enums
import {
  CallPriorityType,
  PointOfAttentionType,
} from '../enums/pointofattention-enums';

// class validator
import { IsNotEmpty } from 'class-validator';

export class NewPointOfAttention {
  @ApiProperty({ type: 'string', required: true })
  @IsNotEmpty()
  pointName: string;

  @ApiProperty({ type: 'number', required: true })
  @IsNotEmpty()
  pointNumber: number;

  @ApiProperty({ type: 'string', required: true })
  @IsNotEmpty()
  pointLetter: string;

  @ApiProperty({
    enum: PointOfAttentionType,
    isArray: true,
    required: true,
  })
  @IsNotEmpty()
  pointOfAttentionType: PointOfAttentionType;

  @ApiProperty({
    enum: CallPriorityType,
    isArray: true,
    required: true,
  })
  @IsNotEmpty()
  callPriorityType: CallPriorityType;

  @ApiProperty({ type: 'string', required: true })
  user: User;

  @ApiProperty({ type: 'string', required: true })
  sector: Sector;
}
