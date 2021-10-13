import React from "react";
import "./merchant.css";

const Merchant = () => {
  return (
    <div className="merchant">
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex justify-content-center align-items-center">
            <div className="">
              <p>পাঠাও কুরিয়ার দিয়ে পণ্য ডেলিভার করুন আপনার চাহিদামত</p>
              <h2 className="m-0 p-0">
                আপনার ব্যবসার বিশ্বস্ত ও আদর্শ <br /> ডেলিভারি সিস্টেম
              </h2>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <a href="#" className="btn btn-solid bannerBtn1 ">
              কুরিয়ার সম্পর্কে জানুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
