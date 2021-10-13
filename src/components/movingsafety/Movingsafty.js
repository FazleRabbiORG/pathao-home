import React from "react";
import "./movingsafety.css";

const Movingsafty = () => {
  return (
    <div className="container movingsafety">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h2>আমাদের সাথেই হোক #MovingSafely!</h2>{" "}
        </div>
      </div>
      <div className="row">
        <div>
          <div className="safe-image-wrapper wow fadeInUp">
            <div className="safe-image-box-part">
              <div className="row">
                <div className="col-md-3 mb-3 mt-3">
                  <img
                    className="img-fluid"
                    src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_a.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-4 mb-3 mt-3">
                  <img
                    className="img-fluid"
                    src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_b.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-5 mb-3 mt-3">
                  <img
                    className="img-fluid"
                    src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_c.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 mb-3 mt-3">
                  <img
                    className="img-fluid"
                    src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_d.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-3 mb-3 mt-3">
                  <img
                    className="img-fluid"
                    src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_e.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-4 mb-3 mt-3">
                  <img
                    className="img-fluid"
                    src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_f.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="safe-insurance-image">
              <img
                src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/insure-badge.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="safety-content-wrapper">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="safety-content">
              <h3 >আপনার নিরাপত্তা আমাদের কাছে সবচেয়ে গুরুত্বপূর্ণ</h3>
              <p className="mt-3 mb-3">
                পাঠাও মানেই #MovingSafely! পাঠাও হচ্ছে এক মাত্র প্ল্যাটফর্ম
                যেখানে আপনার নিরাপত্তার জন্য আছে র‍্যাপিড রেসপন্স টিম, কল
                সেন্টার এবং লাইভ লোকেশন শেয়ারিং অপশন।
              </p>
              <a href="#"> আরো পড়ুন  </a>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div className="safety-content">
              <h3>লাইভ লোকেশন শেয়ার সার্ভিস</h3>
              <p className="mt-3 mb-3">
              পাঠাও অ্যাপের লাইভ লোকেশন শেয়ারিং অপশনের মাধ্যমে আপনি বর্তমান লোকেশন আপনার বন্ধু এবং পরিবারকে জানাতে পারবেন।
              </p>
              <a href="#"> আরো পড়ুন  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movingsafty;
