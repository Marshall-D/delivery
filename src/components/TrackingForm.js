import React from "react";
import "../styles/Preheader.css";
import { Link } from "react-router-dom";

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
          <Link to="/tracking">
            <button
              className="button"
              type="submit"
              style={{ minWidth: "200px" }}
            >
              TRACK
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default TrackingForm;
