import { ApiProperty } from '@nestjs/swagger';

// class validator
import {
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  IsNotEmpty,
  Matches,
} from 'class-validator';

// Enum
import { RoleEnums } from '../enums/role-enums';

export class NewUser {
  @ApiProperty({ type: 'string', required: true })
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  username: string;
  @ApiProperty({ type: 'string', required: true })
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  password: string;

  @ApiProperty({ type: 'string', required: true })
  @MinLength(4)
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
