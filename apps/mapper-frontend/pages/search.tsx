import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { SearchCandidate } from 'libs/common/src';

function SearchPage() {
  const [searchCandidates, setSearchCandidates] = useState<SearchCandidate[]>(
    []
  );

  const handleInputChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    let searchTerm = evt.target.value;
    if (!!searchTerm) {
      await axios
        .post('/api/places', { searchTerm })
        .then((response) => setSearchCandidates(response.data.candidates));
    }
  };

  return (
    <>
      <input type="text" onChange={handleInputChange} />
      {searchCandidates.length &&
        searchCandidates.map((sc, ind: number) => {
          return <div key={ind}>{sc.name}</div>;
        })}

      <pre>{JSON.stringify(searchCandidates, null, 4)}</pre>
    </>
  );
}

export default SearchPage;
