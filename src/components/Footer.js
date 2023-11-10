import "../styles/Footer.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <footer role="contentinfo" className="content_info">
        <br />
        <ul style={{ margin: "2em" }}>
          <p style={{ color: "white" }}>
            Copyright © 2019-2023. All Rights Reserved.
          </p>
        </ul>
        <div style={{ height: "100px", width: "100px" }}></div>
      </footer>
    </div>
  );
}

export default Footer;
