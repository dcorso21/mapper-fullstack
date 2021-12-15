import usePlacesSearch from 'apps/mapper-frontend/hooks/usePlacesSearch';
import { ChangeEvent } from 'react';

import { TextField, List, ListItem, ButtonBase } from '@mui/material';

function SearchComponent() {
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
        <List style={{maxHeight: "300px", overflow: "scroll"}}>
          {searchCandidates.map((sc, ind: number) => {
            return (
              <div>
                <ButtonBase style={{ width: '100%' }}>
                  <ListItem divider key={ind}>
                    {sc.name}
                  </ListItem>
                </ButtonBase>
              </div>
            );
          })}
        </List>
      )}
    </>
  );
}

export default SearchComponent;
