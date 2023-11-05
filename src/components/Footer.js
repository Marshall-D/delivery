// import "../Styles/Footer.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <footer role="contentinfo" className="content_info">
        <div style={{ margin: "2em", paddingTop: "1em" }}>
          <div
            style={{
              marginBottom: "4em",

            }}
          >
            <p style={{fontSize:"1.6em", color: "yellow" }}>
              QUICK LINKS
            </p>
            <p style={{  color: "white" }}>Home</p>
            <p style={{ color: "white" }}>About us</p>
            <p style={{ color: "white" }}>Vision and  Values</p>
            <p style={{ color: "white" }}>Contact us</p>
          </div>
         
          <div style={{ marginBottom: "4em" }}>
          <p style={{fontSize:"1.6em", color: "yellow" }}>
              SEDRVICE OFFERS
            </p>
            <p style={{ color: "white" }}>E-commerce </p>
            <p style={{ color: "white" }}>Logistics</p>
            <p style={{ color: "white" }}>Netwotk Management </p>
            <p style={{ color: "white" }}>Service Optimisation</p>
           
          </div>
          <div style={{ marginBottom: "4em" }}>
          <p style={{fontSize:"1.6em", color: "yellow" }}>
CONTACT  US            </p>
            <p style={{ color: "white" }}>Address</p>
            <p style={{ color: "white" }}>Email</p>
         
          </div>
        </div>
        <hr />
        <br />
        <ul style={{ margin: "2em" }}>
        <p style={{ color: "white" }}>
              Copyright © 2019-2023. All Rights Reserved.
            </p>
        </ul>
        <div style={{ height: "100px", width: "100px" }}>
         
        </div>
      </footer>
    </div>
  );
}

export default Footer;
