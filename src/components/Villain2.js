import React from "react";
import "../styles/Preheader.css";
import v2 from "../images/v2.png";

function Villain2() {
  return (
    <>
      <div>
        <div className="villain-img-container">
          <img className="villain-img" src={v2}></img>
        </div>
        <h4 className="villain-h4"> 2. Attach & Ship Luggage</h4>
        <p className="villain-p">
          Pack and securely attach the shipping labels to your luggage. We’ll
          pick up from your location or you can drop them off
        </p>
      </div>
    </>
  );
}

export default Villain2;
