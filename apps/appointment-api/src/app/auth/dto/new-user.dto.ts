import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  Min,
  MinLength,
  MaxLength,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';
import { RoleEnums } from '../enums/role-enums';

export class NewUser {
  @ApiProperty({ type: 'string', required: true })
  @MinLength(4)
  @Min(4)
  @IsNotEmpty()
  username: string;
  @ApiProperty({ type: 'string', required: true })
  @MinLength(4)
  @Min(4)
  @IsNotEmpty()
  password: string;
  @ApiProperty({ type: 'string', required: true })
  @MinLength(4)
  @Min(4)
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({
    enum: RoleEnums,
    isArray: true,
    required: true,
  })
  role: RoleEnums;
}
