import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./SearchBar.css";

const SearchBar = () => {
  return(
    <div className="searchSection">
      <h1>AxiomOS hub - search yourself some nice sheep!</h1>
      <div className="searchBox">
        <input type="text" placeholder="Type to search..." className="searchInput"/>
        <div className="button">
          <FontAwesomeIcon icon={faSearch} className='searchIcon' />
        </div>
      </div>
    </div>
  )
};

export default SearchBar;