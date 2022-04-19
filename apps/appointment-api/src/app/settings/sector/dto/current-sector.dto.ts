//Swagger
import { ApiProperty } from '@nestjs/swagger';

// class validator
import { IsNotEmpty } from 'class-validator';

//Entity
import { PointOfAttention } from '../../pointofattention/entities/pointofattention.entity';

export class CurrentSector {
  @ApiProperty({ type: 'string', required: false })
  id: string;

  @ApiProperty({ type: 'string', required: false })
  @IsNotEmpty()
  sectorName: string;

  @ApiProperty({ type: 'string', required: false })
  @IsNotEmpty()
  sectorLetter: string;

  @ApiProperty({ type: 'boolean', required: false })
  @IsNotEmpty()
  isPrioritySector: boolean;

  @ApiProperty({ type: 'string', required: false })
  pointOfAttention: PointOfAttention;
}
