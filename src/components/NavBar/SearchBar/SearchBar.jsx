import React, { useEffect, useState } from "react";
import { SearchBarStyle } from "./SearchBarStyles";


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
    <SearchBarStyle>
      <div className="searchBar"> 
          <input id="searchBar" onChange={getName} value={search} type="text" placeholder="Buscar Pokemon..."></input>
        <button onClick={() => {
            if (search?.length) {
              setSearch('')
              cleanSearch()
            }
            }} type="submit" className="btnSearch">
            X
          </button>
      </div>
    </SearchBarStyle>
  );
};
export default SearchBar;
