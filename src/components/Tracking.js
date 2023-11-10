import React from "react";
import "../styles/Tracking.css";
import TrackingForm from "./TrackingForm";
function Tracking() {
  return (
    <>
      <div className="tracking">
        <p className="tracking-p">
          {" "}
          Upgrade your travel experience by shipping your luggage
        </p>
        <h1 className="tracking-h1">
          {" "}
          Luggage delivery service for your next trip
        </h1>
        <TrackingForm></TrackingForm>
      </div>
    </>
  );
}

export default Tracking;
