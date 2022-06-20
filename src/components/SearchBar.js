import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';

import hubImg from "../img/hub_300-300.png";

import "./SearchBar.css";

const DUMMY_DATA = [
    {
      "aid": 1,
      "app_name": "test",
      "perrmisions_score": 3.2,
      "privacy_score": 2.3,
      "rules_score": 3,
      "app_version": "1.2",
      "app_privacy_report_link": "",
      "app_rules_report_link": ""
    },
    {
      "aid": 2,
      "app_name": "test",
      "privacy_score": 2,
      "perrmisions_score": 3.2,
      "rules_score": 3,
      "app_version": "1.2",
      "app_privacy_report_link": "",
      "app_rules_report_link": ""
    },
    {
      "aid": 3,
      "app_name": "test",
      "privacy_score": 9,
      "perrmisions_score": 3,
      "rules_score": 6,
      "app_version": "1.2",
      "app_privacy_report_link": "",
      "app_rules_report_link": ""
    },
    {
      "aid": 4,
      "app_name": "test",
      "privacy_score": 3,
      "perrmisions_score": 3.2,
      "rules_score": 8.8,
      "app_version": "1.2",
      "app_privacy_report_link": "",
      "app_rules_report_link": ""
    },
    {
      "aid": 5,
      "app_name": "test",
      "privacy_score": 1,
      "perrmisions_score": 3.2,
      "rules_score": 5,
      "app_version": "1.2",
      "app_privacy_report_link": "",
      "app_rules_report_link": ""
    }
];

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const dataScoreClass = (score) => {
    if (score <=2) {
      return "dataItemScore danger"
    } else if (score > 2 && score <=5) {
      return "dataItemScore warning"
    } else if (score > 5 && score <=8) {
      return "dataItemScore secondary"
    } else if (score > 8 && score <=10) {
      return "dataItemScore success"
    };
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = DUMMY_DATA.filter((value) => {
      return value.app_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };



  return(
    <div className="searchSection">
      <div className="imageSection">
        <h3>Check if your application is safe and if it cares about your safety</h3>
        <img src={hubImg} alt="AxiomOS Hub" />
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Type to search..." className="searchInput" value={wordEntered}
          onChange={handleFilter}/>
        <div className="button">
          {filteredData.length === 0 ? <FontAwesomeIcon icon={faSearch} className='searchIcon' /> : <FontAwesomeIcon icon={faClose} className='closeIcon' onClick={clearInput} />}
        </div>
      </div>
      {filteredData.length != 0 && <div className="dataResult">
        {filteredData.slice(0, 15).map((value, key) => {
          return <div className="dataItem" key={value.aid}>
                <img src={hubImg} alt="application" />
                <p>{value.app_name}</p>
                <div className={dataScoreClass(value.privacy_score)}> 
                    <p>{value.privacy_score}</p>
                    <p>privacy score</p>
                </div>
                <div className={dataScoreClass(value.rules_score)}>
                  <p>{value.rules_score}</p>
                  <p>rules score</p>
                </div>
                <div className="moreInfoButton">
                  <button>more</button>
                </div>
              </div>
        })}
      </div>}
    </div>
  )
};

export default SearchBar;