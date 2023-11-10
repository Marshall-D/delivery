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
            Picture the perfect travel day. You’re not in a rush to make it to
            your flight. There are no delays, and you’re not sitting in the
            middle seat. The reality is, air travel doesn’t typically feature
            all of these luxuries. Normally, you have to drag your luggage
            through a crowded security line and hope it doesn’t get lost. That’s
            where ShipGo comes in. We take care of your luggage, so you don’t
            have to deal with the stress. All you have to do is go to the
            airport, and your bags will be waiting for you at the hotel or
            resort.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero3;
