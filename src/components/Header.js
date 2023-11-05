import TopHeader from "./TopHeader";
import "../styles/TopHeader.css";

function Header() {
  return (
    <div className="topHeader" style={{ backgroundColor: "blue" }}>
      <TopHeader />
      {/* <div class="header__buttons"></div>
      <div class="menu__burger hamburger hamburger--elastic">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div> */}
    </div>
  );
}
export default Header;
