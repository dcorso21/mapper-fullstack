import usePlacesSearch from 'apps/mapper-frontend/hooks/usePlacesSearch';
import { ChangeEvent } from 'react';

import { TextField, List, ListItem, ButtonBase } from '@mui/material';
import { SearchCandidate } from '@mapper-fullstack/common';

interface Props {
  onSelectOption: (selected: SearchCandidate) => void;
}

function SearchComponent({ onSelectOption }: Props) {
  let { searchCandidates, updateSearch } = usePlacesSearch();

  const handleInputChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    let searchTerm = evt.target.value;
    updateSearch(searchTerm);
  };

  return (
    <>
      <TextField
        type="search"
        variant="filled"
        onChange={handleInputChange}
        label="Search"
        fullWidth
      />
      {!!searchCandidates.length && (
        <List style={{ maxHeight: '300px', overflow: 'scroll' }}>
          {searchCandidates.map((sc, ind: number) => (
            <SearchOption
              searchCandidate={sc}
              index={ind}
              onSelectOption={onSelectOption}
            />
          ))}
        </List>
      )}
    </>
  );
}

export default SearchComponent;

interface SearchOptionProps {
  searchCandidate: SearchCandidate;
  index: number;
  onSelectOption: (sc: SearchCandidate) => void;
}

function SearchOption({
  searchCandidate,
  index,
  onSelectOption,
}: SearchOptionProps) {
  return (
    <div>
      <ButtonBase style={{ width: '100%' }}>
        <ListItem
          divider
          key={index}
          onClick={() => onSelectOption(searchCandidate)}
        >
          {searchCandidate.name}
        </ListItem>
      </ButtonBase>
    </div>
  );
}
