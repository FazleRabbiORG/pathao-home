import React from "react";
import "./download.css";

const Download = () => {
  return (
    <div className="">
      <div className="download">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="download-content ">
                <div className="download-info">
                  <h3>অ্যাপ ডাউনলোড করুন</h3>
                  <p>
                    আমাদের নির্ভরযোগ্য সার্ভিস এবং আকর্ষণীয় অফার অপেক্ষা করছে
                    শুধুমাত্র আপনার জন্য!{" "}
                  </p>
                </div>
                <div className="mt-5">
                  <div className="download-link m-2">
                    <h6>ইউজার অ্যাপ</h6>

                    <img
                      className="m-2"
                      src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/Google_Play_Button-Copy-2.png"
                      alt=""
                    />
                    <img
                      className="m-2"
                      src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/appstore.png"
                      alt=""
                    />
                  </div>
                  <div className="download-link m-2">
                    <h6>ড্রাইভ অ্যাপ</h6>
                    <img
                      className="m-2"
                      src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/Google_Play_Button-Copy-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/Download-app.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
