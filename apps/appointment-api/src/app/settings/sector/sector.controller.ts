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
//Nest
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';

//Services
import { SectorService } from './sector.service';

//Model
import { FilterSector } from './dto/filter-sector.dto';

import { CurrentSector } from './dto/current-sector.dto';

//Entity

import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

import { GetUser } from '../../auth/decorators/get-user.decorator';
import { User } from '../../auth/entities/user.entity';
import { NewSector } from './dto/new-sector.dto';

@ApiTags('Sector')
@Controller('sector')
@UseGuards(AuthGuard())
export class SectorController {
  constructor(private sectorService: SectorService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: CurrentSector,
    isArray: true,
    description: 'Return a list of Sector',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getAll(
    @Query() filter: FilterSector,
    @GetUser() user: User
  ): Promise<CurrentSector[]> {
    return this.sectorService.getAllSector(filter, user);
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'The results element has been correct' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getById(
    @Param('id') id: string,
    @GetUser() user: User
  ): Promise<CurrentSector> {
    return this.sectorService.getSectorById(id, user);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The resource has been  successfully created',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  postSector(@Body() newSectorDto: NewSector): Promise<CurrentSector> {
    return this.sectorService.newSector(newSectorDto);
  }

  @Patch('/:id')
  @ApiOkResponse({ description: 'The resource has been  successfully updated' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  putSector(
    @Param('id') id: string,
    @Body() CurrentSector: CurrentSector,
    @GetUser() user: User
  ): Promise<CurrentSector> {
    //  return this.sectorService.putSector(id, CurrentSector, user);
    return null;
  }
}
