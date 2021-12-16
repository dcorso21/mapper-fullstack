import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('create', () => {
    it('should create a Marker and save it in state', () => {
      expect(appController.read().length).toEqual(0);
      appController.create({ name: 'test' });
      expect(appController.read().length).toEqual(1);
    });
  });

  describe('read', () => {
    it('should return all the markers (in this case 1)', () => {
      expect(appController.read()).toEqual([{ name: 'test', id: 1 }]);
    });
  });

  describe('delete', () => {
    it('should delete a marker', () => {
      appController.delete({ id: 1 });
      expect(appController.read().length).toEqual(0);
    });
  });
});
