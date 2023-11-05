import "../styles/TopHeader.css";

function TopHeader() {
  return (
    // <a href="/" ">

    // </a>
    <div className="header-logo">
      <img
        className="header-logo-mobile"
        src="https://web-summit-library.imgix.net/collision/2222/02/v4-1.png?auto=compress%2Cformat&amp;ixlib=php-3.3.0&amp;s=c63c03cc93df23b37e203cc05ca352cc"
        alt="logo"
      />{" "}
      <div style={{ color: "white" }} className="header-text">
        email <br />
        yahoo.com
      </div>
    </div>
  );
}

export default TopHeader;
