import React from "react";
import "../styles/components/Header.scss";
import fafLogo from "../styles/faf_logo.png";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={fafLogo} alt="fireSpot" className="logo" />
        <div className="fafscordText">FAFSCORD</div>
        <div className="about">About</div>
      </div>
    </div>
  );
}

export default Header;
