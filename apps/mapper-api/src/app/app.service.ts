import { Injectable, Logger } from '@nestjs/common';
import { MapMarker } from 'libs/common/src';

@Injectable()
export class AppService {
  mapMarkers: MapMarker[] = [];

  getAll(): MapMarker[] {
    return this.mapMarkers;
  }

  create(name: string): void {
    let newMarker = { name, id: this.mapMarkers.length + 1 };
    this.mapMarkers = [...this.mapMarkers, newMarker];
  }

  delete(idToDelete: number): void {
    this.mapMarkers = this.mapMarkers.filter(({id}) => id !== idToDelete)
  }
}
