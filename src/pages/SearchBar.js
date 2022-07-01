import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';

import LegendModal from "../components/Modal/LegendModal";

import hubImg from "../img/hub_300-300.png";

import "../components/searchBar.css";

const DUMMY_DATA = [
  {
    "aid": 1,
    "app_name": "test1",
    "package_name": "com.test.telegram",
    "perrmisions_score": 3.2,
    "privacy_score": 2.3,
    "rules_score": 3,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.google.pl",
    "app_rules_report_link": "http://www.google.pl"
  },
  {
    "aid": 2,
    "app_name": "test22",
    "package_name": "com.test.instagram",
    "privacy_score": 2,
    "perrmisions_score": 3.2,
    "rules_score": 3,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.web.axiomos.pl",
    "app_rules_report_link": "http://www.web.axiomos.pl"
  },
  {
    "aid": 3,
    "app_name": "test33",
    "package_name": "com.test.facebook",
    "privacy_score": 9,
    "perrmisions_score": 3,
    "rules_score": 6,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.onet.pl",
    "app_rules_report_link": "http://www.onet.pl"
  },
  {
    "aid": 4,
    "app_name": "test44",
    "package_name": "com.test.whatsup",
    "privacy_score": 3,
    "perrmisions_score": 3.2,
    "rules_score": 8.8,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.google.pl",
    "app_rules_report_link": "http://www.google.pl"
  },
  {
    "aid": 5,
    "app_name": "test55",
    "package_name": "com.test.chrome",
    "privacy_score": 1,
    "perrmisions_score": 3.2,
    "rules_score": 5,
    "app_version": "1.2",
    "app_privacy_report_link": "http://www.test.pinkjagnie.pl",
    "app_rules_report_link": "http://www.test.pinkjagnie.pl"
  }
];


const SearchBar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [legendModalIsShown, setLegendModalIsShown] = useState(false);

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

  const hideLegendModalHandler = () => {
    setLegendModalIsShown(false);
  };

  const showLegendModal = () => {
    setLegendModalIsShown(true)
  };

  return(
    <div className="searchSection">
      {legendModalIsShown && <LegendModal onClose={hideLegendModalHandler} />}
      <div className="sloganSection">
        <h3>Check if your application is safe and if it cares about your privacy</h3>
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
                <div className={dataScoreClass(value.privacy_score)} onClick={showLegendModal}> 
                    <p>{value.privacy_score}</p>
                    <p>privacy score</p>
                </div>
                <div className={dataScoreClass(value.rules_score)} onClick={showLegendModal}>
                  <p>{value.rules_score}</p>
                  <p>rules score</p>
                </div>
                <div className="moreInfoButton">
                  <Link to={`/reports/${value.package_name}`} className="link"> more</Link>
                </div>
              </div>
        })}
      </div>}
    </div>
  )
};

export default SearchBar;