import React from "react";
import Contact from "../Contact/Contact";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

// import "../styles/Preheader.css";

function TrackingResult() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Header />

      <div
        style={{ marginTop: "200px", marginLeft: "auto", marginRight: "auto" }}
      >
        <h1 className="preheader-h1" style={{ color: "red" }}>
          ERROR!! Tracking code doesnt exist on our database
        </h1>
        <Link to="/">
          <button
            style={{ minWidth: "200px" }}
            className="button"
            type="submit"
          >
            Go back Home
          </button>
        </Link>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default TrackingResult;
