//Nest
import { Module } from '@nestjs/common';

//TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/auth.module';

// Controller
import { ModuleController } from './module.controller';

//Service
import { ModuleService } from './module.service';

// Repository
import { ModuleRepository } from './repositories/module.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleRepository]), AuthModule],
  controllers: [ModuleController],
  providers: [ModuleService],
})
export class ModuleModule {}
