import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modules
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AppointmentsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gaston1234',
      database: 'appointment',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//*******************************HOW TO GENERATE API ********************************** */

/*  LAUNCH  THE API SERVER
 NAVIGATE TO http://localhost:3333/api-json AND DOWNLOAD THE JSON FILE
 REPLACE THE CONTENT for the file swagger/generated-api.json  WITH THE CONTENT OF THE FILE DOWNLOADED
 
 LAUNCH npm run openapi-generate
 FILL WITH PREFERED ENDPOINT I.E  private _rootUrl: string = 'http://localhost:3333/api';  at appointments/libs/api/base-service.ts
 */
