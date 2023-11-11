import "../App.css";
import Contact from "../Contact/Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Mobile2 from "./Mobile2";
import PreHeader from "./PreHeader";
import PreVillain from "./PreVillain";
import Tracking from "./Tracking";
import Villain from "./Villain";
import Villain2 from "./Villain2";
import Villain3 from "./Villain3";
import Villain4 from "./Villain4";

const Formatter = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <Tracking />
      <PreHeader />
      <div className="hero-container-main">
        <Hero />
        <Hero2 />
        <Hero3 />
      </div>

      {/* <PreHeader /> */}
      <PreVillain />
      <div className="villain-container">
        <Villain />
        <Villain2 />
      </div>

      <div className="villain-container">
        <Villain3 />
        <Villain4 />
      </div>

      <div className="villain-container-desktop">
        <Villain />
        <Villain2 />
        <Villain3 />
        <Villain4 />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Formatter;
