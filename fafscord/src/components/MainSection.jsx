import React from "react";
import "../styles/components/MainSection.scss";
import fafLogo from "../styles/faf_logo_big.png";

const MainSection = () => {
  return (
    <div className="mainWrapper">
      <img src={fafLogo} alt="fireSpot" class="mainLogo" />
      <div className="so">
        <div className="disclaimer">Disclaimer:</div>
        <div className="disclaimer1">
          This website has not been approved, endorsed or authorized by the
          Technical University of Moldova{" "}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
