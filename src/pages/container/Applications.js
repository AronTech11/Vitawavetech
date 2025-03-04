import React from "react";
import { Layout, Row, Col, Card } from "antd";
import "./Application.css";
import ApplicationData from "./Application.json";

const { Content } = Layout;

const Application = () => {
  return (
    <Layout className="layout">
      <Content>
        <div className="hero-section">
          <div className="app-hero-image-container">
           {/*} <video src={Video} autoPlay loop muted playsInline />*/}
           <div className="hero-application-text">
           <h1>Applications</h1>
           <h2>of the In-Ear Blood Pressure Monitor</h2>
           </div>
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
                  <Card type="inner" className="app-application-card">
                    {/* The main project details */}
                    <div className="app-application-paragraph">
                      <h1>
                        Addressing Unmet Needs
                      </h1>
                      <p>
                        The in-ear blood pressure monitor (eBP) developed by our
                        team addresses critical unmet needs in hypertension
                        management, as identified through extensive customer
                        interviews with over 60 medical professionals and
                        patients. This innovative device is designed to provide
                        continuous, non-invasive blood pressure monitoring,
                        which is essential for effective management of various
                        health conditions. The interviews revealed significant
                        merit in the use cases of the eBP across several areas,
                        including general hypertension, cardiovascular health,
                        chronic kidney disease, pre-eclampsia, and general
                        wellness.
                      </p>
                      <h1>General Hypertension</h1>
                      <p>
                        Hypertension remains a leading cause of cardiovascular
                        disease and mortality globally. The eBP allows for
                        regular monitoring, enabling patients to track their
                        blood pressure in real-time, which is crucial for timely
                        interventions and lifestyle adjustments. Continuous
                        monitoring can help identify patterns that might
                        indicate worsening hypertension, thus facilitating
                        proactive management.
                      </p>
                      <h1>Cardiovascular Health</h1>
                      <p>
                        For patients with cardiovascular conditions, the ability
                        to monitor blood pressure continuously can significantly
                        improve outcomes. The eBP's technology allows for
                        immediate feedback on blood pressure fluctuations, which
                        can be critical during medication titration or lifestyle
                        changes. This capability is particularly beneficial in
                        preventing complications associated with cardiovascular
                        diseases.
                      </p>
                      <h1>Chronic Kidney Disease</h1>
                      <p>
                        Hypertension is a significant risk factor for chronic
                        kidney disease (CKD). The eBP can assist in monitoring
                        blood pressure levels in CKD patients, helping to
                        prevent further renal damage. Regular monitoring can
                        lead to timely adjustments in treatment plans,
                        ultimately improving patient outcomes and quality of
                        life.
                      </p>
                      <h1>Pre-eclampsia</h1>
                      <p>
                        In pregnant women, the risk of developing pre-eclampsia
                        necessitates vigilant blood pressure monitoring. The eBP
                        provides a convenient solution for expectant mothers,
                        allowing them to monitor their blood pressure without
                        the discomfort of traditional cuffs. This ease of use
                        can encourage more frequent monitoring, which is vital
                        for early detection and management of pre-eclampsia.
                      </p>
                      <h1>General Wellness</h1>
                      <p>
                        Beyond specific medical conditions, the eBP serves as a
                        valuable tool for individuals interested in maintaining
                        overall wellness. By providing insights into daily blood
                      </p>
                     
                    </div>
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
