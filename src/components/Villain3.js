import React from "react";
import "../styles/Preheader.css";
import v4 from "../images/v4.png";

function Villain3() {
  return (
    <>
      <div>
        <div className="villain-img-container">
          <img className="villain-img" src={v4}></img>
        </div>
        <h4 className="villain-h4"> 3. Travel With Ease</h4>
        <p className="villain-p">
          Skip through the stress and save time without overthinking, knowing
          your bags have been taken care of.
        </p>
      </div>
    </>
  );
}

export default Villain3;
