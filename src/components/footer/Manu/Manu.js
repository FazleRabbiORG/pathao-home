import React from "react";
import "./manu.css"

const Manu = () => {
  return (
    <div className="manu ">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/02/Pathao_Footer_Logo.svg"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mt-3">
            <p>আমাদের সম্পর্কে</p>
            <p>সেফটি</p>
            <p>ব্লগ</p>
            <p>প্রেস</p>
            <p>যোগাযোগ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manu;
