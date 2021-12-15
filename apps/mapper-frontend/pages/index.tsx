import { ChangeEvent, useCallback, useState } from 'react';
import SearchComponent from '../components/searchComponent/searchComponent';
import useMarkers from '../hooks/useMarkers';

export function Index() {
  const { markers, createMarker, deleteMarker } = useMarkers();
  const [newEventName, setNewEventName] = useState('');

  const onSetNewEventName = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => setNewEventName(evt.target.value),
    []
  );

  const handleCreateMarker = useCallback(() => {
    let val = newEventName;
    val && createMarker(val).then(() => setNewEventName(''));
  }, [newEventName]);

  return (
    <>
      {/* <input type="text" value={newEventName} onChange={onSetNewEventName} />
      <button onClick={handleCreateMarker}>Save</button>
      {markers.map((m) => (
        <div>
          <span>{m.name}</span>
          <span>
            <button onClick={() => deleteMarker(m.id)}>delete</button>
          </span>
        </div>
      ))} */}

      <SearchComponent/>
    </>
  );
}

export default Index;
