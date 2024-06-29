import React from "react";
import { Row, Col } from "antd";
import FacebookIcon from "../../assets/facebook.png";
import InstaIcon from "../../assets/insta.avif";
import "./Main.css";
import Logo from "../../assets/Psalm46-Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Row justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <h2>Service Times</h2>
          <p>Sundays at 10:45AM, 12:00AM</p>
          <p>In Person & Online Weekly</p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <h2>Locations</h2>
          <p>4701 Far Hills Ave,</p>
          <p>45429, Dayton, OH</p>
          <p>(937) 435-1428</p>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6}>
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61560746183925" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/sspsalm46" target="_blank" rel="noopener noreferrer">
              <img src={InstaIcon} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
