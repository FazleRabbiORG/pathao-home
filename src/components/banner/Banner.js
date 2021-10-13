import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BannerFact from "../bannerFact/BannerFact";
import "./banner.css";

const Banner = () => {
  return (
    <div className="bg-image banner-top">
      <div className="container">
        <div className="row">
          <div className=" col-12 col-md-8 col-lg-5">
            <div className="banner-content">
              <h2>দেশের ১ নম্বর<br />ডিজিটাল প্ল্যাটফর্ম </h2>
              <p>এক অ্যাপেই পাবেন সব সমাধান</p>
              <span href="#" className="btn btn-solid bannerBtn1 mb20 wow fadeInLeft animated" data-wow-duration=".7s" > <img src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/money.png" alt="" />  আয় করুন <FontAwesomeIcon className="ml-5" icon={faArrowRight}/> </span> <br />
              <span href="#" className="btn btn-solid bannerBtn2 mb20 wow fadeInLeft" data-wow-duration=".7s"> <img src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/mobile.png" alt="" /> ডাউনলোড অ্যাপ <FontAwesomeIcon className="ml-5" icon={faArrowRight}/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <BannerFact/>
    </div>
  );
};

export default Banner;
