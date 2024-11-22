import React from "react";
import { Row, Col } from "antd";
import FacebookIcon from "../../assets/facebook.png";
import InstaIcon from "../../assets/insta.avif";
import "./footer.css";
// import Logo from "../../assets/images/vitawave.png";
import LinkedIn from "../../assets/images/download.png"

const Footer = () => {
  return (
    <footer className="footer">
      <Row justify="center" className="shift-right">
        <Col xs={24} sm={12} md={8} lg={6} >
          
          <p>Address</p>
          <p>2589 Briarwood Dr, </p>
          <p>Boulder, CO 80305</p>
          
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} >
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={InstaIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
