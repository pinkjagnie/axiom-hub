import React from "react";

import closeBtn from "../../img/closeX_200-200.svg"

import "./InfoModal.css";

const InfoModal = (props) => {

  return(
    <div className="infoModalSection">
      <div className="infoModal">
        <img src={closeBtn} alt="" className="closeInfoModalButton" onClick={props.onClose}/>
        <div className="infoModalText">
          <p>Hey</p>
        </div>
        <button className="closingInfoModal" onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
};

export default InfoModal;