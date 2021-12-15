import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SearchCandidate } from 'libs/common/src';

@Injectable()
export class PlacesService {

  async search(searchTerm: string): Promise<SearchCandidate[]> {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchTerm}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${process.env.GOOGLE_API_MAP_KEY}`
    );

    return response.data;
  }
}
