import { MapMarker } from 'libs/common/src';
import { useEffect, useState, useCallback } from 'react';

export default function useMarkers() {
  const [markers, setMarkers] = useState<MapMarker[]>([]);

  useEffect(() => refreshMarkers(), []);

  function refreshMarkers() {
    fetch('api/markers')
      .then((res) => res.json())
      .then(setMarkers);
  }

  const createMarker = useCallback(
    async (name: string): Promise<void> => {
      await fetch('api/markers', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ name }),
      });
      refreshMarkers();
    },
    [refreshMarkers]
  );

  const deleteMarker = useCallback(
    async (id: number): Promise<void> => {
      await fetch('api/markers', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });
      refreshMarkers();
    },
    [refreshMarkers]
  );

  return {
    markers,
    createMarker,
    deleteMarker,
  };
}
