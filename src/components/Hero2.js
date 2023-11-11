import React from "react";
import "../styles/Preheader.css";
import ldtrack from "../images/luggage-delivery-tracking.jpg";

function Hero2() {
  return (
    <>
      <div className="hero">
        <div className="hero-img-container">
          <img className="hero-img" src={ldtrack}></img>
        </div>
        <div className="hero-container">
          <h1 className="preheader-h1">Real-time Tracking</h1>
          <h3 className="preheader-p">
            {" "}
            See your bag’s journey when you need to
          </h3>
          <p className="hero-p">
            Knowing where your luggage is more important than you think. There
            have been countless peole that have lost their luggages. That’s why
            you should choose a service that not only offers tracking, but it
            should be in real-time. Global Parcel not only picks up your
            luggage, but you can track where your bags are. Go ahead and relax,
            we got it from here.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero2;
