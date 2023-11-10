import React from "react";
import "../styles/Preheader.css";
import v1 from "../images/v1.png";

function Villain() {
  return (
    <>
      <div>
        <div className="villain-img-container">
          <img className="villain-img" src={v1}></img>
        </div>
        <h4 className="villain-h4"> 1. Book & Get Label</h4>
        <p className="villain-p">
          Shipping luggage is a breeze. Schedule your shipment dates online and
          you’ll receive the shipping labels for the trip.
        </p>
      </div>
    </>
  );
}

export default Villain;
