import React from "react";
import Manu from "./Manu/Manu";
import Pages from "./page/Pages";
import "./footer.css"
import { Button } from "react-bootstrap";
import FooterButton from "./button/FooterButton";
import CopyRight from "./copyright/CopyRight";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
          <Pages/>
          
          <Manu/>
          <FooterButton/>
          <CopyRight/>
      </div>
    </div>
  );
};

export default Footer;
