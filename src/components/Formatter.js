import { Outlet } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Mobile2 from "./Mobile2";

const Formatter = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* <Mobile2/> */}
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Formatter;
