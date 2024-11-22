import React from "react";
import { Row, Col, Card } from "antd";
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
        <span className="Blog-gradient-text">Introducing eBP Blogs</span>
      </h4>

      {/* Team Section */}
      <Row justify="center" align="middle" className="Blog-article-section">
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <img alt="Platform" src={Platform} className="Blog-team-image" />
            }
          ></Card>
        </Col>
        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="Blog-info-text">
            The description can be just 3 sentences. I will give you the
            write-up. Below the Description we can add "Learn More/Read
            More".... and as we click the "Read More" tab that should lead us to
            the Blog page with a detailed description about the device. I will
            give a write-up for the blog with a detailed description as well.
          </p>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="Blog-article-section">
        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="Blog-info-text">
            The description can be just 3 sentences. I will give you the
            write-up. Below the Description we can add "Learn More/Read
            More".... and as we click the "Read More" tab that should lead us to
            the Blog page with a detailed description about the device. I will
            give a write-up for the blog with a detailed description as well.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <img alt="Kidneys" src={Kidneys} className="Blog-team-image" />
            }
          ></Card>
        </Col>
      </Row>

      {/* Additional Team Members */}
      <Row justify="center" align="middle" className="Blog-article-section">
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <img
                alt="HeartBeat"
                src={HeartBeat}
                className="Blog-team-image"
              />
            }
          ></Card>
        </Col>
        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="Blog-info-text">
            The description can be just 3 sentences. I will give you the
            write-up. Below the Description we can add "Learn More/Read
            More".... and as we click the "Read More" tab that should lead us to
            the Blog page with a detailed description about the device. I will
            give a write-up for the blog with a detailed description as well.
          </p>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="Blog-article-section">
        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="Blog-info-text">
            The description can be just 3 sentences. I will give you the
            write-up. Below the Description we can add "Learn More/Read
            More".... and as we click the "Read More" tab that should lead us to
            the Blog page with a detailed description about the device. I will
            give a write-up for the blog with a detailed description as well.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <img alt="Minitor" src={Minitor} className="Blog-team-image" />
            }
          ></Card>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="Blog-article-section">
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <img alt="Device" src={Device} className="Blog-team-image" />
            }
          ></Card>
        </Col>
        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="Blog-info-text">
            The description can be just 3 sentences. I will give you the
            write-up. Below the Description we can add "Learn More/Read
            More".... and as we click the "Read More" tab that should lead us to
            the Blog page with a detailed description about the device. I will
            give a write-up for the blog with a detailed description as well.
          </p>
        </Col>
      </Row>
    </main>
  );
};

export default Blogs;
