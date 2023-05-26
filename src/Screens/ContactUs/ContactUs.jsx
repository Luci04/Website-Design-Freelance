import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="paddings contact-container">
        <div className="left-side">
          <h3>Contact Us</h3>
          <a href="">nishantgoel.nishant@gmail.com</a>
          <div className="text-content">
            <h4>Google (Global Headquarters) </h4>
            Lorem ipsum, dolor Corporate Commons, <br />
            CA 94588
          </div>
          <a>+1 (408) 899-8289</a>
        </div>
        <div className="right-side">
          <form action="" method="post">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Message" />
            {/* <div className="subtext">
              LevaData needs the contact information you provide to us to
              contact you about our products and services. You may unsubscribe
              from these communications at any time. For information on how to
              unsubscribe, as well as our privacy practices and commitment to
              protecting your privacy, please review our Privacy Policy.
            </div> */}
            <button className="button" type="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
