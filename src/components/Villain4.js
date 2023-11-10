import React from "react";
import "../styles/Preheader.css";
import v3 from "../images/v3.png";

function Villain4() {
  return (
    <>
      <div>
        <div className="villain-img-container">
          <img className="villain-img" src={v3}></img>
        </div>
        <h4 className="villain-h4"> 4. Relax</h4>
        <p className="villain-p">
          Enjoy your trip and arrive stress-free. Your luggage has been shipped
          and delivered at your final destination.
        </p>
      </div>
    </>
  );
}

export default Villain4;
