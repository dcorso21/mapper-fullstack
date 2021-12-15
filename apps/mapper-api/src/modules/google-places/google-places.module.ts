import { Module } from '@nestjs/common';
import { PlacesController } from './google-places.controller';
import { PlacesService } from './google-places.service';

@Module({
  imports: [],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
