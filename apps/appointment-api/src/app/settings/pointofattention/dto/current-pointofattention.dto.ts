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
import { CurrentSector } from '../../sector/dto/current-sector.dto';
import { BasicUser } from '../../../auth/dto/basic-user-dto';
import { Expose } from 'class-transformer';

export class CurrentPointOfAttention {
  @ApiProperty({ type: 'string', required: false })
  id: string;
  @ApiProperty({ type: 'string', required: false })
  pointName: string;
  @ApiProperty({ type: 'number', required: false })
  pointNumber: number;
  @ApiProperty({ type: 'string', required: false })
  pointLetter: string;
  @ApiProperty({
    enum: PointOfAttentionType,
    isArray: true,
    required: false,
  })
  pointOfAttentionType: PointOfAttentionType;

  @ApiProperty({
    enum: CallPriorityType,
    isArray: true,
    required: false,
  })
  callPriorityType: CallPriorityType;
  @ApiProperty({ type: BasicUser, required: false })
  @Expose({ toPlainOnly: false })
  user: User;
  @ApiProperty({ type: CurrentSector, required: false })
  sector: Sector;
}
