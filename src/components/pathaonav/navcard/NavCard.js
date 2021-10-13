import React from "react";
import "./navcard.css";
const NavCard = ({ info }) => {
    console.log("info",info)
  return (
    <div className="navcard p-1 pr-5">
      <div className="row pr-5 ">
        <div className="col-4">
          <img
            src={`${info.img}`}
            alt=""
          />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="">
            <h6 className="m-0 p-0">{info.title}</h6>
            <p  className="m-0 p-0" style={{fontSize:"12px"}}>{info.descriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCard;
