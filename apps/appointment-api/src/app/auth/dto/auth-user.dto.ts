import { ApiProperty } from '@nestjs/swagger';

// class validator
import {
  MinLength,
  MaxLength,
  IsNotEmpty,
  Matches,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class AuthUser {
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

  @ApiProperty({ type: 'string', required: false })
  @IsEmail()
  @IsOptional()
  email: string;
}
