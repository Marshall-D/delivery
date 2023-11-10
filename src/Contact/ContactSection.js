import "../styles/Preheader.css";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
const ContactSection = () => {
  return (
    <>
      <div className="contact-main">
        <div className="contact-header">
          <h1 className="contact-h1">Customer Service</h1>
          <p className="contact-p">
            We love to travel and know you do, too. That’s why we are dedicated
            to providing you the travel experience you deserve. Feel free to
            reach out to us if you have any questions. Our customer service team
            is available 7 days a week via phone, chat, or email.
          </p>
        </div>

        <div className="container">
          <div className="getInTouch">
            <p className="getInTouch-p">GET IN TOUCH</p>
          </div>
          <div className="contact">
            <div className="flex">
              <WhatsAppIcon className="icon" />
              <a href="https://wa.me/+18033399296">
                <p className="icon-p"> +1803 339 9296</p>
              </a>
            </div>
            <div className="flex">
              <AttachEmailIcon className="icon" />
              <p className="icon-p">globalparceldelivery28@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
