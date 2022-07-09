import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import SingleReport from '../components/SingleReport';

import styles from "../components/singleApp.module.css";

const SingleApp = () => {
  const [singleData, setSingleData] = useState();
  const { appId } = useParams();

  async function fetchSingleReport(package_name) {
    const url = `http://192.168.43.12:27451/api/reports/${package_name}`;
    await fetch(url, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.clone().json();
    })
    .then((data) => {setSingleData(data)})
  };
 
  fetchSingleReport(appId);

  return ( 
    <div className={styles.singleAppSection}> 
      {singleData && <SingleReport data={singleData} />}
    </div>   
  );
};

export default SingleApp;