import names from './names.json';
import React, { useState } from 'react';

function Search() {
  const [searchkey, setSearchKey] = useState("");

  return (
    <>
      Search: <input
        type="search"
        placeholder="Search here"
        onChange={(event) => {
          setSearchKey(event.target.value);
        }}
      />
      {names
        .filter((value) => {
          if (searchkey === "") {
            return true;
          } else if (value.name.toLowerCase().includes(searchkey.toLowerCase())) {
            return true;
          } else {
            return false; 
          }
        })
        .map((name, index) => {
          return <div key={index}>{name.name}</div>; // Use 'key' prop with a unique identifier or 'index'.
        })}
    </>
  );
}

export default Search;

