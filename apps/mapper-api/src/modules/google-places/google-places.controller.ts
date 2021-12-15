import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { PlacesService } from './google-places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  test() {
    return { hello: 'world' };
  }

  @Post()
  create(@Body() payload: { searchTerm: string }) {
    return this.placesService.search(payload.searchTerm);
  }
}
