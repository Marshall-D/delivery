import React from "react";
import "../styles/Preheader.css";
import ldpickup from "../images/luggage-delivery-pickup.jpg";

function Hero() {
  return (
    <>
      <div className="hero">
        {/* <div> */}
        <div className="hero-img-container">
          <img className="hero-img" src={ldpickup}></img>
        </div>
        <div className="hero-container">
          <h1 className="preheader-h1"> Doorstep Pickup</h1>
          <h3 className="preheader-p"> FA truly white-glove service</h3>
          <p className="hero-p">
            One of the benefits of ShipGo’s luggage delivery service is that we
            offer doorstep pickup and dropoff. What that means is when you book
            an order with us, the delivery driver picks up your luggage from
            your home. Then your luggage is dropped off at the hotel or resort
            you are staying at. Unlike taking your bags with you at the airport,
            you’ll be able to just bring your essentials and travel the way you
            want.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
