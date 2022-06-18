import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "./SearchBar.css";

const SearchBar = () => {
  return(
    <div className="searchSection">
      <div className="searchBox">
        <input type="text" placeholder="Type to search..." className="searchInput"/>
        <div className="button">
          <FontAwesomeIcon icon={faSearch} className='searchIcon' />
          {/* <i className{classes.fas fa-search}></i> */}
        </div>
      </div>
    </div>
  )
};

export default SearchBar;