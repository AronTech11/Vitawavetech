import React from "react";
import { Layout, Row, Col, Card } from "antd";
import "./Application.css";
import Video from "../../assets/videos/medical-beat.mp4";
import ApplicationData from "./Application.json";

const { Content } = Layout;

const Application = () => {
  return (
    <Layout className="layout">
      <Content>
        <div className="hero-section">
          <div className="app-hero-image-container">
            <video src={Video} autoPlay loop muted playsInline />
            <h3>Application</h3>
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
                        Application of the In-Ear Blood Pressure Monitor in
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
                      <div class="app-application-reference">
                        <h1>Reference</h1>
                        <p>
                          <sup>i</sup>Aster Wakjira Garedow, Mekonnen Damessa
                          Mamo, and Gorfineh Teshome Tesfaye, “Medication
                          Related-Problems and Associated Factors Among Patients
                          with Hypertension at a Tertiary Care Hospital in
                          Ethiopia: A Prospective Interventional Study,”
                          <em>Integrated Blood Pressure Control</em> 16
                          (November 30, 2023): 123–36,{" "}
                          <a href="https://doi.org/10.2147/IBPC.S434072">
                            https://doi.org/10.1161/HYPERTENSIONAHA.120.14591
                          </a>
                          .<br></br>
                          <sup>ii</sup>Akram Al-Makki et al., “Hypertension
                          Pharmacological Treatment in Adults: A World Health
                          Organization Guideline Executive Summary,”{" "}
                          <em>Hypertension</em> 79, no. 1 (January 2022):
                          293–301,{" "}
                          <a href="https://doi.org/10.1161/HYPERTENSIONAHA.121.18192">
                            https://doi.org/10.1161/HYPERTENSIONAHA.121.18192
                          </a>
                          .<br></br>
                          <sup>iii</sup>Ibrahim Sales and Yazed AlRuthia,
                          “Arabic Translation and Cultural Adaptation of
                          Hill-Bone Compliance to High Blood Pressure Therapy
                          Scale,” <em>Saudi Pharmaceutical Journal</em> 32, no.
                          5 (May 1, 2024): 102053,{" "}
                          <a href="https://doi.org/10.1016/j.jsps.2024.102053">
                            https://doi.org/10.1016/j.jsps.2024.102053
                          </a>
                          .<br></br>
                          <sup>iv</sup>Azli Baharudin et al., “Knowledge,
                          Attitude and Behaviour on Salt Intake and Its
                          Association with Hypertension in the Malaysian
                          Population: Findings from MyCoSS (Malaysian Community
                          Salt Survey),”{" "}
                          <em>Journal of Health, Population and Nutrition</em>{" "}
                          40, no. 1 (May 31, 2021): 6,{" "}
                          <a href="https://doi.org/10.1186/s41043-021-00235-0">
                            https://doi.org/10.1186/s41043-021-00235-0
                          </a>
                          .<br></br>
                          <sup>v</sup>Anggun Permata Sari et al., “The Maumere
                          Exercise Therapy and Low Salt Diet in Hypertension
                          Sufferers: An Effort to Lower Blood Pressure: Maumere
                          Exercise Therapy and Low Salt Diet in Hypertension
                          Sufferers: An Effort to Lower Blood Pressure,”{" "}
                          <em>Retos</em> 56 (July 1, 2024): 1016–25,{" "}
                          <a href="https://doi.org/10.47197/retos.v56.106718">
                            https://doi.org/10.47197/retos.v56.106718.
                          </a>
                          .<br></br>
                        </p>
                      </div>
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
