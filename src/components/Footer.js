import React from "react";

import { GiPawHeart } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faPaypal, faPatreon } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => { 
  return (
    <div className="footerSection">
      <div className="container">
        <div className="copyright">
          <p>&copy; AxiomOS project</p>
          <p>Want to contact with us? <a href="mailto:contact@axiomos.pl" className="mail">Just send us an email</a></p>
          <p>Built with <GiPawHeart className="author" /> by <span className="author">PinkLlama</span></p>
        </div>
        <div className="socialContainer">
          <a href="">
            <FontAwesomeIcon icon={faTwitter} className="social" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGithub} className="social" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTelegram} className="social" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faPaypal} className="social" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faPatreon} className="social" />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;