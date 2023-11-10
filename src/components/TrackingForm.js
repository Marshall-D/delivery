import React from "react";
import "../styles/Preheader.css";

function TrackingForm() {
  return (
    <form className="form">
      <div>
        <div className="label">
          <label htmlFor="tracking-no">Enter Your tracking number</label>
        </div>
        <div className="input-container">
          <input
            className="input"
            id="tracking-no"
            type="text"
            //   placeholder=""
            required
          />

          <button className="button" type="submit">
            TRACK
          </button>
        </div>
      </div>
    </form>
  );
}

export default TrackingForm;
