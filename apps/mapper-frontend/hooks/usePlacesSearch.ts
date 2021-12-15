import { useState } from 'react';
import axios from 'axios';
import { SearchCandidate } from 'libs/common/src';

function usePlacesSearch() {
  const [searchCandidates, setSearchCandidates] = useState<SearchCandidate[]>(
    []
  );

  async function updateSearch(searchTerm: string) {
    if (!searchTerm) setSearchCandidates([]);
    else {
      let response = await axios.post('/api/places', { searchTerm });
      setSearchCandidates(response.data);
    }
  }

  return { searchCandidates, updateSearch };
}

export default usePlacesSearch;
