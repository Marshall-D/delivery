import "../styles/Mobile2.scss";
import "../styles/Mobile.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Mobile2 = () => {
  const reload = () => {
    window.location.reload(true);
  };
  const [showSide, setShowSide] = useState(false);
  const toggleSide = () => {
    setShowSide(!showSide);
  };
  const [showPartner, setShowPartner] = useState(false);
  const togglePartner = () => {
    setShowPartner(!showPartner);
  };
  const [showMedia, setShowMedia] = useState(false);
  const toggleMedia = () => {
    setShowMedia(!showMedia);
  };
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => {
    setShowContent(!showContent);
  };
  const [showWhy, setShowWhy] = useState(false);
  const toggleWhy = () => {
    setShowWhy(!showWhy);
  };
  const [showWhy2, setShowWhy2] = useState(false);
  const toggleWhy2 = () => {
    setShowWhy2(!showWhy2);
  };
  return (
    // <div style={{ marginBottom: "10em" }}>
    <div>
      <div>
        {/* <div className="navigation"> */}
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon"></span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul
            className="navigation__list"
            style={{ paddingBottom: "12em", paddingTop: "-5em" }}
          >
            <li onClick={reload} className="navigation__item">
              <Link
                style={{ color: "white", fontSize: "1.5em" }}
                className="navigation__link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <div style={{ marginBottom: "-2em" }}>
                <p
                  onClick={toggleSide}
                  className="navigation__link"
                  style={{ color: "white", fontSize: "1.5em" }}
                >
                  About &#8675;
                </p>
                {showSide ? (
                  <div style={{ marginBottom: "2em" }} className="dropdown">
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/gpd">
                        About Global PArcel Deliver{" "}
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link
                        onClick={reload}
                        className="navigation__link"
                        to="/vision"
                      >
                        Vision and Values{" "}
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link
                        onClick={reload}
                        className="navigation__link"
                        to="/sustainability"
                      >
                        Sustainability
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link
                        onClick={reload}
                        className="navigation__link"
                        to="/compliance"
                      >
                        Compliance{" "}
                      </Link>
                    </p>
                  </div>
                ) : null}
                ;
              </div>
            </li>
           
            <li className="navigation__item">
              <div>
                <p
                  onClick={toggleMedia}
                  className="navigation__link"
                  style={{ color: "white", fontSize: "1.5em" }}
                >
                  Solutions &#8675;
                </p>
                {showMedia ? (
                  <div className="dropdown">
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/ecommerce">
                        E-Commerce
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/logistics">
                        Logistics{" "}
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/smallbusiness">
                        Small Business Solutions{" "}
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/developers">
                        Developers Solution Center{" "}
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/network">
                        Network Management{" "}
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/serviceopt">
                        Service Optimisation{" "}
                      </Link>
                    </p>
                  </div>
                ) : null}
              </div>
            </li>
            <li onClick={reload} className="navigation__item">
              <Link
                style={{ fontSize: "1.5em" }}
                className="navigation__link"
                to="/tracking"
              >
                Tracking{" "}
              </Link>
            </li>
            <li onClick={reload} className="navigation__item">
              <Link
                style={{ fontSize: "1.5em" }}
                className="navigation__link"
                to="/services"
              >
                Services{" "}
              </Link>
            </li>
            <li onClick={reload} className="navigation__item">
              <Link
                style={{ fontSize: "1.5em" }}
                className="navigation__link"
                to="/contact "
              >
                Contact us{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Mobile2;
