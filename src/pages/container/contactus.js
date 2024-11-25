

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css"; // Import the CSS file

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");
  
    emailjs
      .sendForm(
        "service_mw8foms", // Your service ID
        "template_t5frmid", // Your template ID
        form.current, // Form reference
        "nubQpAtdvRQ45NgzP" // Your user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };
  

  return (
    <>
      <section className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
            {" "}
            Need to get in touch with us? Fill out the form and a member of our
            team will reach back out to you as quickly as possible.
          </p>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" id="user_name" />
            </div>
            <div className="form-group">
              <label htmlFor="from_name">Email</label>
              <input type="email" name="from_name" id="from_name" />
            </div>
            {/* <div className="form-group">
              <label htmlfor="reason_for_email">Reason for Email</label>
              <select placeholder="Please select an option" name="reason">
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technology-Related">Technology-Related</option>
                <option value="Funding">Funding</option>
                <option value="Medical-Related">Medical-Related</option>
                <option value="Other">Other</option>
              </select>
            </div>  */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" />
            </div>
            <input type="submit" value="Send" />
          </form>


        </div>
      </section>

    </>
  );
};

export default ContactUs;
