import { Test } from '@nestjs/testing';

import { PlacesController } from './google-places.controller';
import { PlacesService } from './google-places.service';

describe('AppController', () => {
  let placesController: PlacesController;

  beforeAll(async () => {
    let app = await Test.createTestingModule({
      controllers: [PlacesController],
      providers: [PlacesService],
    }).compile();

    placesController = app.get<PlacesController>(PlacesController);
  });

  describe('search', () => {
    it('should search for a term (paris)', async () => {
      let candidates = await placesController.search({ searchTerm: 'paris' });
      expect(candidates[0].name).toEqual("Paris");
    });
  });
});
