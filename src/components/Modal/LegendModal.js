import React from "react";

import closeBtn from "../../img/closeX_200-200.svg"

import "./LegendModal.css";

const LegendModal = (props) => {

  return(
    <div className="legendModalSection">
      <div className="legendModal">
        <img src={closeBtn} alt="" className="closeLegendModalButton" onClick={props.onClose}/>
        <div className="legendModalText">
          <p>Privacy score - it is Lorem ipsum dolor sit amet</p>
          <p>Rules score - it is Lorem ipsum dolor sit amet</p>
        </div>
        <button className="closingLegendModal" onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
};

export default LegendModal;