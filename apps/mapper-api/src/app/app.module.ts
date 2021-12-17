import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { PlacesModule } from '../modules/google-places/google-places.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
