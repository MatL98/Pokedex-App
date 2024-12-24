import React, { useEffect, useState } from "react";
import './SearchBar.css';


const SearchBar = (props) => {
  const {onSearch, cleanSearch} = props
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search?.length > 0) {
      onSearch(search);
    }
  }, [search]);

  const getName = (e) => {
    let pokemonTyped = e.target.value;

    if (pokemonTyped?.length) {
      let lowerValue = pokemonTyped.toLowerCase()
      setSearch(lowerValue);
    } else {
      cleanSearch()
      setSearch('')
    }
  };

  return (
      <div className="searchBar"> 
          <input id="searchBar-input" onChange={getName} value={search} type="text" placeholder="Buscar Pokemon..."></input>
      </div>
  );
};
export default SearchBar;
