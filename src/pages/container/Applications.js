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
                      <p>
                      Hypertension, often referred to as the "silent killer," poses a significant global health challenge, affecting over 1.4 billion individuals worldwide,
                      with projections estimating this number could rise to 1.6 billion by 2025<sup>i</sup>. This condition is recognized as the most critical modifiable risk factor 
                      for cardiovascular diseases (CVD) and all-cause mortality, underscoring its grave impact on healthcare system<sup>ii</sup>. The World Health Organization (WHO) highlights 
                      that less than 15% of those affected have their hypertension adequately controlled, leading to severe long-term consequences such as heart disease, stroke, and
                      renal failure<sup>iii</sup>. Furthermore, lifestyle factors, including high salt intake and sedentary behavior, contribute to the rising prevalence of hypertension, particularly
                      in developing nations where awareness and treatment options may be limited , . The burden of hypertension extends beyond individual health, straining healthcare
                      resources and increasing the need for effective management strategies. For instance, approximately one-third of adults with hypertension remain untreated or 
                      inadequately managed, which exacerbates complications and healthcare costs<sup>vi</sup>. As such, addressing hypertension through innovative monitoring solutions and public
                      health initiatives is imperative to mitigate its widespread impact on global health.<br></br><br></br>

                      Addressing the acute hypertension problem requires a proactive approach to blood pressure monitoring, particularly through the deployment of novel technologies such as the in-ear
                      blood pressure monitor (eBP) being developed by our team<sup>vii</sup>. Traditional cuff-based methods and existing wearable devices often fall short of providing continuous, accurate, and 
                      user-friendly monitoring solutions. The eBP leverages advanced photoplethysmography (PPG) technology to deliver non-invasive, cuffless measurements that can be taken effortlessly
                      and discreetly, making it ideal for daily use. Unlike conventional methods that can be uncomfortable and disruptive, the eBP allows for real-time monitoring without the need for 
                      cumbersome equipment, thereby enhancing patient compliance and engagement in their health management<sup>viii</sup>,<sup>ix</sup>.<br></br><br></br>

                      The merits of the eBP over existing technologies are significant. First, it provides continuous monitoring capabilities that can detect fluctuations in blood pressure throughout the day,
                      offering a more comprehensive view of an individual's cardiovascular health<sup>x</sup>,<sup>xi</sup>. This is crucial for identifying masked hypertension and abnormal blood pressure variability, conditions 
                      that are often overlooked with traditional monitoring methods<sup>xii</sup>,<sup>xiii</sup>. Additionally, the eBP's compact design promotes ease of use, allowing users to integrate blood pressure monitoring 
                      seamlessly into their daily routines without the discomfort associated with cuffs<sup>xiv</sup>,<sup>xv</sup>.<br></br><br></br>

                      Research has shown that cuffless technologies, such as the eBP, can significantly improve blood pressure control by facilitating more frequent measurements and timely interventions<sup>xvi</sup>,<sup>xvii</sup>. 
                      By addressing the limitations of existing monitoring devices, the eBP not only enhances the accuracy of blood pressure readings but also empowers users to take charge of their health proactively. This innovative approach 
                      is essential for mitigating the healthcare burden associated with hypertension, ultimately leading to better health outcomes and reduced healthcare costs<sup>xviii</sup>,<sup>xix</sup>.<br></br><br></br>
                      References:
                    <hr></hr>
                    </p>
                    <div class="app-application-reference">
                      <p>
                      <sup>i</sup>Aster Wakjira Garedow, Mekonnen Damessa Mamo, and Gorfineh Teshome Tesfaye, “Medication Related-Problems and Associated Factors Among Patients with Hypertension at a Tertiary Care Hospital in Ethiopia: A Prospective Interventional Study,”
                        <em>Integrated Blood Pressure Control</em> 16 (November 30, 2023): 123–36, <a href="https://doi.org/10.2147/IBPC.S434072">https://doi.org/10.1161/HYPERTENSIONAHA.120.14591</a>.<br></br>
                      <sup>ii</sup>Akram Al-Makki et al., “Hypertension Pharmacological Treatment in Adults: A World Health Organization Guideline Executive Summary,” <em>Hypertension</em> 79, no. 1 (January 2022): 293–301, <a href="https://doi.org/10.1161/HYPERTENSIONAHA.121.18192">https://doi.org/10.1161/HYPERTENSIONAHA.121.18192</a>.<br></br>
                      <sup>iii</sup>Ibrahim Sales and Yazed AlRuthia, “Arabic Translation and Cultural Adaptation of Hill-Bone Compliance to High Blood Pressure Therapy Scale,” <em>Saudi Pharmaceutical Journal</em> 32, no. 5 (May 1, 2024): 102053, <a href="https://doi.org/10.1016/j.jsps.2024.102053">https://doi.org/10.1016/j.jsps.2024.102053</a>.<br></br>
                      <sup>iv</sup>Azli Baharudin et al., “Knowledge, Attitude and Behaviour on Salt Intake and Its Association with Hypertension in the Malaysian Population: Findings from MyCoSS (Malaysian Community Salt Survey),” <em>Journal of Health, Population and Nutrition</em> 40, no. 1 (May 31, 2021): 6, <a href="https://doi.org/10.1186/s41043-021-00235-0">https://doi.org/10.1186/s41043-021-00235-0</a>.<br></br>
                      <sup>v</sup>Anggun Permata Sari et al., “The Maumere Exercise Therapy and Low Salt Diet in Hypertension Sufferers: An Effort to Lower Blood Pressure: Maumere Exercise Therapy and Low Salt Diet in Hypertension Sufferers: An Effort to Lower Blood Pressure,” <em>Retos</em> 56 (July 1, 2024): 1016–25, <a href="https://doi.org/10.47197/retos.v56.106718">https://doi.org/10.47197/retos.v56.106718.</a>.<br></br>
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
