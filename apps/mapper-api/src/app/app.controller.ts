import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('markers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() { name }: { name: string }) {
    return this.appService.create(name);
  }

  @Get()
  read() {
    return this.appService.getAll();
  }

  @Delete()
  delete(@Body() { id }: { id: number }) {
    return this.appService.delete(id);
  }
}
