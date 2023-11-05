import "../styles/DownloadSection.css";
// import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import courier from "../images/courier.jpg"
const ContactForm = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_ul3eoai",
  //       "template_3d6v8bg",
  //       formRef.current,
  //       "l8K1D98SrRhOhmExh"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   setEnteredTitle("");
  //   setEnteredAmount("");
  //   setEnteredDate("");
  // };

  return (
    <section  style={{ backgroundImage:`url(${courier})` }}
    className="formSection">
      <div className="container">
        <h2 className="textSize">Contact us by filling the form below</h2>
        <div class="notHero">
          <form 
          
          ref={formRef}
          // onSubmit={handleSubmit}
          class="form two-cols" novalidate="">
            <div className="form_field">
              <div>
                <input
                  className="input"
                  type="email"
                  name="user_name"
                  required=""
                  id="field_94293030"
                  placeholder="email address"
                  autocomplete="new-password"
                  maxlength="100"
                  data-field-label="Email address"
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                  // value=""
                />
                {/* <span className="floating-Label">Email address*</span> */}
              </div>
            </div>

            <div class="form__field text floatingLabel page-1 active">
              <div className="form_field">
                <input
                  className="input"
                  type="text"
                  name="user_subject"
                  required=""
                  id="field_94293031"
                  placeholder="subject"
                  autocomplete="new-password"
                  maxlength="100"
                  data-field-label="First name"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                  // value=""
                />
                {/* <span class/</div>="floatingLabel__label">First name*</span> */}
              </div>
            </div>

            {/* <div class="form__field text floatingLabel page-1 active"> */}
            <div>
              {/* <div className="form_field"> */}
              <div>
                <textarea
                  className="inputComment"
                  type="text"
                  name="message"
                  required=""
                  id="field_94293031"
                  placeholder="Comments"
                  autocomplete="new-password"
                  maxlength="100"
                  data-field-label="First name"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                  // value=""
                />
                {/* <span class/</div>="floatingLabel__label">First name*</span> */}
              </div>
            </div>

            <button className="btn">submit</button>
            <br/>
            <br/>
            {done && "Thanks for reaching out ..."}

          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
