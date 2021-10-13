import React from "react";
import "./BannerFact.css";

const BannerFact = () => {
  return (
    <div className="container bannerFact">
      <div className="row justify-content-md-center">
        <div className="col-11 col-md-11 col-lg-8">
          <div className="row fact">
            <div className="col-md-4 fact-item1">
              <div className=""><h3>৬০ লাখ+</h3> <p>অ্যাপ ডাউনলোড</p></div>
              
            </div>
            <div className="col-md-4 fact-item2">
              <h3>৭ কোটি+</h3> <p>সফল ট্রিপ/অর্ডার</p>
            </div>
            <div className="col-md-4 fact-item3">
              <h3>৬০ লাখ+</h3> <p>মানুষের অগ্রযাত্রায়</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFact;
