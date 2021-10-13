import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./button.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const FooterButton = () => {
  return (
    <div className="button mt-3 mb-3">
      <div className="row">
        <div className="col-md-7 ">
          <div className="row">
            <span>User app</span>
            <img
              className=""
              src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/03/Google-Play-footer-.png"
              alt=""
            />
            <img
              className=""
              src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/03/App-Store-footer-.png"
              alt=""
            />
            <span>Drive App</span>
            <img
              className=""
              src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/03/Google-Play-footer-.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-white">
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faDribbble}/>
          </div>
        </div>
        
        <div className="col-md-2 mt-3 mb-3">
          <span>এলাকা</span>
          <FontAwesomeIcon icon={faGlobe}/>
          <span>BD(EN)</span>
        </div>
      </div>
    </div>
  );
};

export default FooterButton;
