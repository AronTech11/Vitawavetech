import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom"; // Import Link for navigation
import Platform from "../../assets/images/Env.png";
import Kidneys from "../../assets/images/kidneys.jpg";
import Minitor from "../../assets/images/ear-monitor.jpg";
import HeartBeat from "../../assets/images/challenge.png";
import Device from "../../assets/images/blood-pressure-logo.png";
import BackGroundVideo from "../../assets/videos/world.mp4";
import "./Blogs.css";

const { Meta } = Card;

const Blogs = () => {
  return (
    <main className="Blog-Application-content">
      {/* Background Video */}
      <video autoPlay muted loop className="Blog-background-video">
        <source src={BackGroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="Blog-background-overlay" />

      {/* Hero Section */}
      <h4 className="Blog-hero-heading">
        <span>News</span>
      </h4>

      {/* Blog Grid - Two rows of three columns */}
      <Row gutter={[16, 16]} justify="center" className="Blog-article-section">
        {/* First Row of Blog Posts */}
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card
            hoverable
            cover={<img alt="Platform" src={Platform} className="Blog-team-image" />}
          >
            <Meta title="Platform" />
            <p className="Blog-info-text">
              The description of the platform goes here. Short summary.{" "}
              <Link to="/blog/1" className="Blog-read-more">Learn More</Link>
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card
            hoverable
            cover={<img alt="Kidneys" src={Kidneys} className="Blog-team-image" />}
          >
            <Meta title="Kidneys" />
            <p className="Blog-info-text">
              The description of the kidneys device goes here. Short summary.{" "}
              <Link to="/blog/2" className="Blog-read-more">Learn More</Link>
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card
            hoverable
            cover={<img alt="HeartBeat" src={HeartBeat} className="Blog-team-image" />}
          >
            <Meta title="HeartBeat" />
            <p className="Blog-info-text">
              The description of the heartbeat monitor goes here. Short summary.{" "}
              <Link to="/blog/3" className="Blog-read-more">Learn More</Link>
            </p>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center" className="Blog-article-section">
        {/* Second Row of Blog Posts */}
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card
            hoverable
            cover={<img alt="Minitor" src={Minitor} className="Blog-team-image" />}
          >
            <Meta title="Minitor" />
            <p className="Blog-info-text">
              The description of the ear monitor goes here. Short summary.{" "}
              <Link to="/blog/4" className="Blog-read-more">Learn More</Link>
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card
            hoverable
            cover={<img alt="Device" src={Device} className="Blog-team-image" />}
          >
            <Meta title="Device" />
            <p className="Blog-info-text">
              The description of the blood pressure device goes here. Short summary.{" "}
              <Link to="/blog/5" className="Blog-read-more">Learn More</Link>
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card
            hoverable
            cover={<img alt="Device" src={Device} className="Blog-team-image" />}
          >
            <Meta title="Device" />
            <p className="Blog-info-text">
              The description of another device goes here. Short summary.{" "}
              <Link to="/blog/6" className="Blog-read-more">Learn More</Link>
            </p>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Blogs;
