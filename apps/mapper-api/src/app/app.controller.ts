import { Body, Controller, Delete, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('markers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() payload: { name: string }) {
    Logger.log(payload)
    return this.appService.create(payload.name);
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
