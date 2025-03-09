import React from "react";
import { Row, Col } from "antd";
import "./footer.css";
import LinkedIn from "../../assets/images/download.png";
import Logo from "../../assets/images/vitawave.png";
import {CopyrightOutlined} from '@ant-design/icons';


const Footer = () => {
  return (
    <footer className="footer">
      <Row justify="center" className="shift-right">
        {/* Left-aligned logo */}
        <Col xs={8} sm={8} md={8} lg={8}>
          <div className="footer-logo">
            <img src={Logo} alt="Logo" />
            <div style={{ paddingBottom: "10px" }}>
              <h4>VitaWave</h4>
              <h6>Hear the health</h6>
            </div>
          </div>
        </Col>

        {/* Center-aligned address on small screen */}
        <Col xs={8} sm={8} md={8} lg={8} className="address">
          <p>Address</p>
          <p>2589 Briarwood Dr, </p>
          <p>Boulder, CO 80305</p>
        </Col>

        {/* Right-aligned Follow Us on small screen */}
        <Col xs={8} sm={8} md={8} lg={8} className="follow-us">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/vitawave-tech-inc/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p style={{paddingBottom: "100px"}}>
            Copyright <CopyrightOutlined/> 2024 VitaWave Tech, Inc. All Rights Reserved. Powered by
            VitaWave Tech, Inc.
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
