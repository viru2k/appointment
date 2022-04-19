//Swagger
import { ApiProperty } from '@nestjs/swagger';

//Entity
import { PointOfAttention } from '../../pointofattention/entities/pointofattention.entity';

// class validator
import { IsNotEmpty } from 'class-validator';

export class NewSector {
  @ApiProperty({ type: 'string', required: true })
  @IsNotEmpty()
  sectorName: string;

  @ApiProperty({ type: 'string', required: true })
  @IsNotEmpty()
  sectorLetter: string;

  @ApiProperty({ type: 'boolean', required: true })
  @IsNotEmpty()
  isPrioritySector: boolean;

  @ApiProperty({ type: 'string', required: false })
  pointOfAttention: PointOfAttention;
}
