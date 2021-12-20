import { SearchCandidate } from '@mapper-fullstack/common';
import { Button, Card } from '@mui/material';
import { useState, useEffect } from 'react';
import GoogleMapComponent from '../components/GoogleMapComponent/GoogleMapComponent';
import SearchComponent from '../components/searchComponent/searchComponent';
import SimpleModalComponent from '../components/SimpleModalComponent';
import styles from './index.module.scss';

export function Index() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [savedLocations, setSavedLocations] = useState<SearchCandidate[]>([])

  function handleNewLocation(location: SearchCandidate) {
    setSavedLocations((sl) => {
      sl.push(location)
      return sl;
    })
    setModalIsOpen(false);
  }

  return (
    <>
      <SelectionModal
        open={modalIsOpen}
        setOpen={setModalIsOpen}
        onSelect={handleNewLocation}
      />
      <Button onClick={() => setModalIsOpen(true)}>Add New Location</Button>
      {savedLocations.map(sl => {
        return (
          <div className="location">
            {sl.name}
          </div>
        )
      })}
    </>
  );
}

export default Index;

interface SelectionModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSelect: (candidate: SearchCandidate) => void;
}

function SelectionModal({ open, setOpen, onSelect }: SelectionModalProps) {
  const [selectedPlace, setSelectedPlace] = useState<SearchCandidate>();

  const [mapProps, setMapProps] = useState({
    center: {
      lat: 37.24823536219344,
      lng: -78.1169912045482,
    },
    zoom: 5,
  });

  useEffect(() => {
    if (selectedPlace) {
      setMapProps({ ...mapProps, center: selectedPlace.geometry.location });
    }
  }, [selectedPlace]);

  return (
    <SimpleModalComponent open={open} setOpen={setOpen}>
      <div className={styles.mainFrame}>
        <div className={styles.leftPanel}>
          <SearchComponent onSelectOption={setSelectedPlace} />
          {!!selectedPlace && (
            <Card>
              <h2>{selectedPlace.formatted_address}</h2>
              <pre>{JSON.stringify(selectedPlace.geometry.location)}</pre>
            </Card>
          )}
          <Button onClick={() => onSelect(selectedPlace)}>
            Choose Location
          </Button>
        </div>
        <div className={styles.rightPanel}>
          <GoogleMapComponent {...mapProps} />
        </div>
      </div>
    </SimpleModalComponent>
  );
}
