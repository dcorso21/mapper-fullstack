import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('App CRUD features', () => {
    it('should create read and delete markers', () => {
      service.create("test")
      expect(service.getAll()).toEqual([{name: "test", id: 1}]);
      service.delete(1)
      expect(service.getAll()).toEqual([]);
    });
  });
});
