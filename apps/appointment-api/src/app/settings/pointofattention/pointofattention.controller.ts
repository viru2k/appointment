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
import { PointOfAttentionService } from './pointofattention.service';

//Model
import { FilterPointOfAttention } from './dto/filter-pointofattention.dto';

import { CurrentPointOfAttention } from './dto/current-pointofattention.dto';

//Entity

import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

import { GetUser } from './../../auth/decorators/get-user.decorator';
import { User } from '../../auth/entities/user.entity';
import { PointOfAttention } from './entities/pointofattention.entity';
import { NewPointOfAttention } from './dto/new-pointofattention.dto';

@ApiTags('PointOfAttention')
@Controller('pointofattention')
@UseGuards(AuthGuard())
export class PointOfAttentionController {
  constructor(private pointOfAttentionService: PointOfAttentionService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: CurrentPointOfAttention,
    isArray: true,
    description: 'Return a list of PointOfAttention',
  })
  /*   @ApiOkResponse({
    status: 200,
    description: 'Return a list of PointOfAttention',
    schema: {
      properties: {
        : {
          type: 'array',
          items: { $ref: getSchemaPath(CurrentPointOfAttention) },
        },
      },
    },
  }) */
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getAll(
    @Query() filter: FilterPointOfAttention,
    @GetUser() user: User
  ): Promise<CurrentPointOfAttention[]> {
    return this.pointOfAttentionService.getAllPointOfAttention(filter, user);
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'The results element has been correct' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getById(
    @Param('id') id: string,
    @GetUser() user: User
  ): Promise<CurrentPointOfAttention> {
    return this.pointOfAttentionService.getpointOfAttentionById(id, user);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The resource has been  successfully created',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  postPointOfAttention(
    @Body() newPointOfAttentionDto: NewPointOfAttention
  ): Promise<CurrentPointOfAttention> {
    return this.pointOfAttentionService.newPointOfAttention(
      newPointOfAttentionDto
    );
  }

  @Patch('/:id')
  @ApiOkResponse({ description: 'The resource has been  successfully updated' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  putPointOfAttention(
    @Param('id') id: string,
    @Body() CurrentPointOfAttention: CurrentPointOfAttention,
    @GetUser() user: User
  ): Promise<PointOfAttention> {
    return this.pointOfAttentionService.putPointOfAttention(
      id,
      CurrentPointOfAttention,
      user
    );
  }
}
