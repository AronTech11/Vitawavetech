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
          <Row
            justify="center"
            align="middle"
            className="app-application-container"
          >
            {ApplicationData.application && (
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="app-application-content">
                  <h1 className="app-application-title">Application</h1>
                  <Card type="inner" className="app-application-card">
                    <p className="app-application-paragraph">
                      {ApplicationData.application.p1}
                    </p>

                   
                    <p className="app-application-paragraph">
                      {ApplicationData.application.p2}
                    </p>

                  
                    <p className="app-application-paragraph">
                      {ApplicationData.application.p3}
                    </p>

                    
                    <p className="app-application-paragraph">
                      {ApplicationData.application.p4}
                    </p>
                    <h3>Reference</h3>
                    <p className="app-application-paragraph">
                      {ApplicationData.application.reference}
                    </p>

                    
                  </Card>
                </div>
              </Col>
            )}
          </Row>

        
        </div>
      </Content>
    </Layout>
  );
};

export default Application;
