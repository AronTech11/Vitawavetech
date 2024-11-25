import React from "react";
import { Layout, Typography, Row, Col, Card, Button } from "antd";
import "./Application.css";
import Video from "../../assets/videos/medical-beat.mp4";
import ApplicationData from "./Application.json";

const { Content } = Layout;
const { Title } = Typography;

const Application = () => {
  return (
    <Layout className="layout">
      <Content>
        <div className="hero-section">
          <div className="app-hero-image-container">
            <video src={Video} autoPlay loop muted playsInline />
            <h3>Coming Soon</h3>
          </div>
        </div>

        <div className="app-site-layout-content">
          {/* First Section: Application Data */}
          <Row  justify="center" align="middle" className="app-application-container">
      {ApplicationData.application && (
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="app-application-content">
            <h1 className="app-application-title">Application</h1>
            <Card type="inner" className="app-application-card">
              <h3 className="app-application-heading">Problem</h3>
              <p className="app-application-paragraph">{ApplicationData.application.problem}</p>

              <h3 className="app-application-heading">Impact</h3>
              <p className="app-application-paragraph">{ApplicationData.application.impact}</p>

              <h3 className="app-application-heading">Burden</h3>
              <p className="app-application-paragraph">{ApplicationData.application.burden}</p>

              <h3 className="app-application-heading">Solution</h3>
              <p className="app-application-paragraph">{ApplicationData.application.solution.technology}</p>

              <h3 className="app-application-heading">Features</h3>
              <ul className="app-application-list">
                {ApplicationData.application.solution.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="app-application-heading">Benefits</h3>
              <ul className="app-application-list">
                {ApplicationData.application.solution.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              <h3 className="app-application-heading">Impact</h3>
              <p className="app-application-paragraph">{ApplicationData.application.solution.impact}</p>
            </Card>
          </div>
        </Col>
      )}
    </Row>

          {/* Second Section: References */}
          <Row style={{padding: "0px 15px"}}>
            {ApplicationData.references &&
              ApplicationData.references.map((reference, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Card hoverable style={{ height: '450px' }}>
                    <Title level={4}>{reference.title}</Title>
                    <p>{reference.journal}</p>
                    <p>Author(s): {reference.author}</p>
                    <p>Volume: {reference.volume}</p>
                    <p>Date: {reference.date}</p>
                    <p>
                      DOI:{" "}
                      <a
                        href={reference.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {reference.doi}
                      </a>
                    </p>
                    <Button type="primary">Learn More</Button>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Application;
