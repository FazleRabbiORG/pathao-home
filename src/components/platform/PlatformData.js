import React from "react";
import "./platformcard.css"
const NewsDataCard = ({ data }) => {
    // console.log(data)
    const {title1,title2,title3,img,description1,description2,description3}=data;
    console.log(img)
  return (
    <div className="p-2">
      <div className="row">
        <div className="col-md-6">
          <div className="mt-5 mb-5">
            <h4>{title1}</h4>
            <p>{description1}</p>
          </div>
          <div className="mt-5 mb-5">
            <h4>{title1}</h4>
            <p>{description1}</p>
          </div>
          <div className="mt-5 mb-5">
            <h4>{title2}</h4>
            <p>{description2}</p>
          </div>
          <div className="mt-5 mb-5">
            <h4>{title3}</h4>
            <p>{description3}</p>
          </div>
          <div>
            <a className="btn btn-solid bannerBtn1" href="">
              আরো জানুন
            </a>
          </div>
        </div>
        <div className="col-md-6 platformbg d-flex justify-content-center align-items-center">
            <img className="pbg" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsDataCard;
