import { FilterAuth } from './dto/filter-auth.dto';
import { CurrentAuth } from './dto/current-auth.dto';
//Agular
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Query,
} from '@nestjs/common';

//Services
import { AuthService } from './auth.service';

//Model

import { Auth } from './entities/auth.entity';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { NewUser } from './dto/new-user.dto';

@ApiTags('Auth')
@Controller('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() newUser: NewUser): Promise<void> {
    return this.authService.signUp(newUser);
  }
}
