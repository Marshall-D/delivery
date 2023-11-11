import React from "react";
import "../styles/Preheader.css";
import ldconvenience from "../images/luggage-delivery-convenience.jpg";

function Hero3() {
  return (
    <>
      <div className="hero">
        <div className="hero-img-container">
          <img className="hero-img" src={ldconvenience}></img>
        </div>
        <div className="hero-container">
          <h1 className="preheader-h1"> Unmatched Convenience</h1>
          <h3 className="preheader-p"> Live your life, without the hassle</h3>
          <p className="hero-p">
            Picture the perfect luggage delivery. You’re not in a rush or
            overthinking about your luggage location. That’s where Global Parcel
            comes in. We take care of your luggage, so you don’t have to deal
            with the stress. All you have to do is contact us and pay our
            delivery fees and your luggage is safe.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero3;
