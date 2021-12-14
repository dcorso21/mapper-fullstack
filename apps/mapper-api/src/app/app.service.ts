import { Injectable, Logger } from '@nestjs/common';
import { MapMarker } from 'libs/common/src';

@Injectable()
export class AppService {
  mapMarkers: MapMarker[] = [];

  getAll(): MapMarker[] {
    return this.mapMarkers;
  }

  create(name: string): void {
    Logger.log(`Creating: ${name}`)
    let newMarker = { name, id: this.mapMarkers.length + 1 };
    this.mapMarkers = [...this.mapMarkers, newMarker];
  }

  delete(idToDelete: number): void {
    Logger.log(`Deleting: ${idToDelete}`)
    this.mapMarkers = this.mapMarkers.filter(({id}) => id !== idToDelete)
  }
}
