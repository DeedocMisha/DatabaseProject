import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

import { MainTable } from './models/vehicle-data.model';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'passw',
      database: 'database',
      models: [MainTable],
      autoLoadModels: true,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    SequelizeModule.forFeature([MainTable]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
