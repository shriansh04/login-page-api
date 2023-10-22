import React, { useState, useEffect } from 'react';

interface NameData {
  name: string;
}

function Search() {
  const [searchKey, setSearchKey] = useState('');
  const [filteredNames, setFilteredNames] = useState<NameData[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const search = async () => {
      try {
        const response = await fetch(`/api/search?searchFor=${searchKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch filtered names');
        }
        const filteredNames = await response.json();
        console.log(filteredNames);
        setFilteredNames(filteredNames);
        setError('');
      } catch (error) {
        console.error('API call error:', error);
        setError('Failed to fetch filtered names');
      }
    };
    search();
  }, [searchKey]);

  return (
    <>
      Search: <input
        type="search"
        placeholder="Search here"
        value={searchKey}
        onChange={(event) => {
          setSearchKey(event.target.value);
        }}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {filteredNames.map((node, index) => (
        <div key={index}>{node.name}</div>
      ))}
    </>
  );
}

export default Search;
