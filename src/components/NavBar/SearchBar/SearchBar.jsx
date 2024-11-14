import React, { useEffect, useState } from "react";
import { SearchBarStyle } from "./SearchBarStyles";


const SearchBar = (props) => {
  const {onSearch, cleanSearch} = props
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search?.length > 0) {
      goSearch().then()
    } else {  
      cleanSearch().then()
    }
  }, [search]);

  const getName = (e) => {
    let pokemonTyped = e.target.value;

    if (pokemonTyped?.length > 0) {
      let lowerValue = pokemonTyped.toLowerCase()
      setSearch(lowerValue);
    }
  };

  const goSearch = async (e) => {
    onSearch(search);
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
