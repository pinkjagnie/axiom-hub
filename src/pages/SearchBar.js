import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';

import LegendModal from "../components/Modal/LegendModal";
import AddSingleApp from "./AddSingleApp";

import hubImg from "../img/hub_300-300.png";

import "../components/searchBar.css";

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [legendModalIsShown, setLegendModalIsShown] = useState(false);
  const [data, setData] = useState([]);

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

  async function fetchReports() {
    const response = await fetch('http://192.168.43.12:27451/api/reports', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json()
    })
    .then((myJson) => {setData(myJson)})
  };

  useEffect(() => {
    fetchReports()},
    []
  );

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.reports.filter((value) => {
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

  const addApp = <div className="linkContainer">
    <p>Didn't find what you are looking for?</p>
    <Link to="/add-app" element={<AddSingleApp/>} className="link">Add app to our database</Link>
    </div>;

  return(
    <div className="searchSection">
      {legendModalIsShown && <LegendModal onClose={hideLegendModalHandler} />}
      <div className="sloganSection">
        <h3>Check if your application is safe and if it cares about your privacy</h3>
      </div>
      <div>
        {filteredData.length === 0 ? addApp : undefined}
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Type to search..." autoFocus className="searchInput" value={wordEntered}
          onChange={handleFilter}/>
        <div className="button">
          {filteredData.length === 0 ? <FontAwesomeIcon icon={faSearch} className='searchIcon' /> : <FontAwesomeIcon icon={faClose} className='closeIcon' onClick={clearInput} />}
        </div>
      </div>
      {filteredData.length != 0 && <div className="dataResult">
        {filteredData.slice(0, 15).map((value, key) => {
          return <div className="dataItem" key={value.ID}>
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