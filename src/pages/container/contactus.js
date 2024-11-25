// import React from 'react';
// import { Row, Col, Form, Input, Button } from 'antd';
// import { MailOutlined } from '@ant-design/icons';
// import './contactus.css';

// const ContactForm = () => {
//   return (
//     <div className="contact-form-container">
//       <Row justify="center" align="top" gutter={[32, 16]}>
//         {/* Left column with text */}
//         <Col xs={24} sm={24} md={12} lg={12} className="contact-text">
//           <h2>Contact Us Here</h2>
//           <p>If you have any questions or feedback, feel free to reach out by filling out the form below. We'll get back to you as soon as possible.</p>
//         </Col>

//         {/* Right column with the form */}
//         <Col xs={24} sm={24} md={12} lg={12} className="contact-form">
//           <Form layout="vertical">
//             <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
//               <Input placeholder="Your name" />
//             </Form.Item>

//             <Form.Item label="Email address" name="email" rules={[{ required: true, message: 'Please enter your email address!' }]}>
//               <Input placeholder="Your email address" />
//             </Form.Item>

//             <Form.Item label="Company" name="company">
//               <Input placeholder="Your company name (Optional)" />
//             </Form.Item>

//             <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter a message!' }]}>
//               <Input.TextArea placeholder="Your message" rows={4} />
//             </Form.Item>

//             <Form.Item>
//               <Button type="primary" htmlType="submit" block>
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </Col>
//       </Row>

//       {/* Optional: Contact icon image on the right (visible only on larger screens) 
//       <div className="contact-image">
//         <MailOutlined style={{ fontSize: '200px', color: '#003366' }} />
//       </div>
//       */}
//     </div>
//   );
// };

// export default ContactForm;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css"; // Import the CSS file

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(e, "mmmm");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kizyfl6",
        "template_3vagnta",
        form.current,
        "ATST59GoZZTK4OkUR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
            <div className="form-group">
              <label htmlfor="reason_for_email">Reason for Email</label>
              <select placeholder="Please select an option" name="reason">
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technology-Related">Technology-Related</option>
                <option value="Funding">Funding</option>
                <option value="Medical-Related">Medical-Related</option>
                <option value="Other">Other</option>
              </select>
            </div> 
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
