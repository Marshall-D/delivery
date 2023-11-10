import "../styles/TopHeader.css";
import logo from "../images/logo.png";

function TopHeader() {
  return (
    <div className="header-logo">
      <img className="header-logo-mobile" src={logo} alt="logo" />{" "}
    </div>
  );
}

export default TopHeader;
