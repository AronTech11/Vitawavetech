import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import { Col, Row, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./header.css"; // Import the CSS file
import Logo from "../../assets/images/vitawave.png";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Function to show the drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Function to hide the drawer
  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Row align="middle" justify="space-between" className="header">
        <Col xs={18} sm={8} md={6} lg={4}>
          <NavLink className="nav-link-title ripple" exact to="/" aria-current="page">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <p>VitaWave</p>
            </div>
          </NavLink>
        </Col>
        <Col xs={6} sm={0} md={0} lg={0} className="drawer-icon-container">
          <p className="sidebar ripple" onClick={showDrawer}>
            <MenuOutlined />
          </p>
        </Col>
        <Col xs={0} sm={16} md={14} lg={12}>
          <div className="nav-links-container">
            <NavLink className="nav-link ripple" exact to="/" aria-current="page">
              Home
            </NavLink>
            <NavLink className="nav-link ripple" exact to="/application" aria-current="page">
              Application
            </NavLink>
            <NavLink className="nav-link ripple" exact to="/team" aria-current="page">
              Team
            </NavLink>
            <NavLink className="nav-link ripple" exact to="/news" aria-current="page">
              News
            </NavLink>
            <NavLink className="nav-link ripple" exact to="/contact-us" aria-current="page">
              Contact
            </NavLink>
          </div>
        </Col>
      </Row>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}   // Ensure onClose is connected
        visible={drawerVisible} // Control the drawer visibility
      >
        <NavLink className="nav-link ripple" exact to="/" onClick={onClose} aria-current="page">
          Home
        </NavLink>
        <NavLink className="nav-link ripple" exact to="/team" onClick={onClose} aria-current="page">
          Team
        </NavLink>
        <NavLink className="nav-link ripple" exact to="/application" onClick={onClose} aria-current="page">
          Application
        </NavLink>
        <NavLink className="nav-link ripple" exact to="/news" onClick={onClose} aria-current="page">
          News
        </NavLink>
        <NavLink className="nav-link ripple" exact to="/contact-us" onClick={onClose} aria-current="page">
          Contact Us
        </NavLink>
      </Drawer>
    </>
  );
};

export default Header;
