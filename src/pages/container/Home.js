import React from "react";
import { Row, Col } from "antd";
import Slider from "react-slick"; // Import react-slick for slider
import Video from "../../assets/videos/heartbeat.mp4";
import BloodPressure from "../../assets/images/blood-pressure-logo.png";
import Thetechnology from "../../assets/images/thetechnology.jpeg";
import EarMonitor from "../../assets/images/ear-monitor.jpg";
import Kidney from "../../assets/images/kidneys.jpg";
import Detail from "../../assets/images/diagram.jpeg";
import Vitals from "../../assets/images/stethoscope.svg";
import High from "../../assets/images/clipboard.svg";
import Cuff from "../../assets/images/heartbeat_wave3.svg";
import Nurse from "../../assets/images/nurse.svg";
import slide from "../../assets/images/Env.png";
import slide1 from "../../assets/images/prototype.png";
import slide2 from "../../assets/images/challenge.png";

import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS

import "./home.css";

const Home = () => {

  const infoData = [
    {
      image: Vitals,
      alt: "Hypertension, Heart Failure, Kidney Failure",
      title: "Vitals Diagnosis",
      description: "Hypertension, Heart Failure, Kidney Failure",
    },
    {
      image: High,
      alt: "High patient count",
      title: "Patient count",
      description:
        "High patient count: 47% Adults, 691K Deaths, $131B Annual Cost",
    },
    {
      image: Nurse,
      alt: "Management and Treatment",
      title: "Management & Treatment",
      description: "Early Detection, Reliable Reading, Consistent Monitoring",
    },
    {
      image: Cuff,
      alt: "Cuff outdated",
      title: "Cuff Outdated",
      description: "Does Not Require Trained Professional",
    },
  ];

  const SlideData = [
    {
      image: slide,
      alt: "Hypertension, Heart Failure, Kidney Failure",
      title: "Vitals Diagnosis",
      description: "Hypertension, Heart Failure, Kidney Failure",
    },
    {
      image: slide1,
      alt: "High patient count",
      title: "Patient count",
      description:
        "High patient count: 47% Adults, 691K Deaths, $131B Annual Cost",
    },
    {
      image: slide2,
      alt: "Management and Treatment",
      title: "Management & Treatment",
      description: "Early Detection, Reliable Reading, Consistent Monitoring",
    },
    {
      image: Cuff,
      alt: "Cuff outdated",
      title: "Cuff Outdated",
      description: "Does Not Require Trained Professional",
    },
    {
      image: Cuff,
      alt: "Cuff outdated",
      title: "Cuff Outdated",
      description: "Does Not Require Trained Professional",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Only one slide visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Slide every 1 second (1000ms)
    centerMode: true, // Center the active slide
    centerPadding: "0", // No padding around the centered slide
  };

  return (
    <main className="content">
      <Row>
        <Col span={24}>
          <div className="hero-section">
            <div className="hero-image-container">
              {/* Added the text above the video */}
              <div className="hero-text">
                <h1>A Novel Blood Pressure Monitoring Device</h1>
                <p>
                  Wearable, Cuffless, Intermittent-Continuous, Ear-Based
                  Measurement
                </p>
                <p>
                  <a href="https://cacm.acm.org/research/ebp/" target="_blank">
                  <strong>Published studies on ACM 2021</strong>
                  </a>
                  .
                </p>
              </div>
              <video src={Video} autoPlay loop muted />
            </div>
          </div>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="info-section">
        <Col xs={24} sm={24} md={16} lg={15} xl={15} className="col-text">
          <h3>The Technology Behind and its Application</h3>
          <p>
            Cuffless, Wearable, Intermittent-Continuous, Blood Pressure
            Measurement Current BP measurement techniques involve cumbersome
            devices with considerable user error potential that disrupt daily
            activities, leading to infrequent monitoring and potential health
            risks. We recognized the need for a more user-friendly, ambulatory
            approach to BP assessment. Our eBP device is designed to make BP
            monitoring accurate, ambulatory, and continuous while being easy to
            use for non-clinicians and comfortable for patients. It features a
            light-based pulse sensor that gently enters the ear canal, a digital
            air pump for precise control, and a sophisticated BP estimation
            algorithm. By gradually inflating the ear canal, our device provides
            accurate systolic and diastolic BP values without obstructing blood
            flow, thus minimizing user discomfort.
          </p>
        </Col>

        <Col xs={24} sm={24} md={8} lg={9} xl={9} className="image-col">
          <div className="image-card">
            <img
              src={Thetechnology}
              alt="Blood Pressure Device"
              className="hero-image"
            />
          </div>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="info-section">
        <Col xs={24} sm={24} md={8} lg={9} xl={9} className="image-col">
          <div className="image-card">
            <img src={EarMonitor} alt="Ear Monitor" className="hero-image" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={15} xl={15} className="col-text">
          <h3>Renal Nephrology</h3>
          <p>
            Ambulatory BP monitoring is crucial for indicating kidney problems,
            making it a significant application area. Chronic Kidney Disease
            (CKD) affects 37 million Americans with over $120B spent on care
            annually, demanding precise and frequent blood pressure monitoring
            to indicate potential kidney problems. VitaWave's eBP technology,
            with its cuffless design and continuous monitoring capabilities,
            addresses this need with unparalleled accuracy and convenience. By
            allowing patients to measure their blood pressure at least three
            times per day, in alignment with NIH guidelines, our eBP device
            empowers individuals managing CKD to proactively monitor their
            health. The seamless integration of our device into daily life not
            only enhances patient compliance but also provides healthcare
            providers with crucial data for early intervention. The eBP device's
            impact on Renal Nephrology extends beyond immediate patient care,
            contributing to more effective management of kidney health and
            reducing the overall burden on the healthcare system.
          </p>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="info-section">
        <Col xs={24} sm={24} md={16} lg={15} xl={15} className="col-text">
          <h3>Hypertension</h3>
          <p>
            Hypertension In addition to the initial beachhead market segments,
            VitaWave's eBP device is pivotal in the treatment and management of
            hypertension, presenting a significant market opportunity in an area
            that affects 48.1% of Americans, as per CDC statistics. With the
            capability for continuous ambulatory blood pressure monitoring, our
            technology aligns seamlessly with the needs of hypertension patients
            who require ongoing care. The projected $1.3B market opportunity in
            hypertension management underscores the potential impact of our eBP
            device in transforming the landscape of blood pressure monitoring.
            As the overall BP monitoring devices market is expected to burgeon
            from $1.92B in 2023 to approximately $4.12B by 2030, with a CAGR of
            10.93%, VitaWave's strategic focus on hypertension positions us to
            be at the forefront of this burgeoning market. Our device's cuffless
            design, ensuring user comfort and accurate intermittent-continuous
            monitoring, not only addresses the current challenges but also sets
            the stage for enhanced patient care and improved outcomes in the
            evolving field of hypertension management.
          </p>
        </Col>

        <Col xs={24} sm={24} md={8} lg={9} xl={9} className="image-col">
          <div className="image-card">
            <img
              src={BloodPressure}
              alt="Blood Pressure Device"
              className="hero-image"
            />
          </div>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="info-section">
        <Col xs={24} sm={24} md={8} lg={9} xl={9} className="image-col">
          <div className="image-card">
            <img src={Kidney} alt="Kidney Health" className="hero-image" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={15} xl={15} className="col-text">
          <h3>Obstetrics and Gynecology</h3>
          <p>
            With pre-eclampsia affecting 400,000 pregnant women annually,
            spending over $2.1B on its care and demanding frequent blood
            pressure measurements in a non-clinical setting, our eBP technology
            becomes an indispensable tool. By offering a noninvasive,
            comfortable, and continuous monitoring solution, VitaWave's eBP
            device allows expectant mothers to seamlessly integrate blood
            pressure assessments into their daily routines. This not only
            ensures timely detection of hypertension-related risks but also
            enhances the overall prenatal care experience. The device's
            applicability in Obstetrics and Gynecology positions it as a
            critical asset for healthcare professionals, providing them with
            real-time, remote access to vital blood pressure data, ultimately
            contributing to improved maternal and fetal outcomes. VitaWave's
            commitment to advancing maternal healthcare is underscored by the
            device's potential to revolutionize blood pressure monitoring in a
            crucial and sensitive healthcare segment.
          </p>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="info-section">
        <Col xs={24} sm={24} md={16} lg={15} xl={15} className="col-text">
          <h3>Better than the traditional cuff</h3>
          <p>
            VitaWave’s eBP device is a cuffless, remote, continuous blood
            pressure monitoring that: Accurately measures BP comfortably with an
            earpiece. The ear is an ideal location for blood pressure monitoring
            with a dense vascular structure and fixed distance from the heart.
            Provides readings without impacting the user’s normal activities.
            Logs data remotely to facilitate efficient BP management and
            treatment. We've conducted extensive proof-of-concept prototype
            demonstrations and evaluations, including a comparative study
            involving 35 subjects. Subjects reported both ease of use and
            comfort with the device. The study results show promising accuracy,
            with mean errors of 1.8 mmHg for systolic and -3.1 mmHg for
            diastolic values, well within FDA-acceptable margins.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8} lg={9} xl={9} className="image-col">
          <div className="detail-card">
            <img src={Detail} alt="Ear Monitor" className="detail-image" />
          </div>
        </Col>
      </Row>

      <Row justify="center" align="middle" className="info-section">
        {infoData.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            className="info-card-col"
          >
            <div className="detail-card">
              <img src={item.image} alt={item.alt} className="detail-image" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* <Row justify="center" align="middle" className="Slide-section">
        <Slider {...sliderSettings} className="slide-section">
          {SlideData.map((item, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={6}
              lg={6}
              xl={6}
              className="slide-card-col"
            >
              <div className="slide-card">
                <img src={item.image} alt={item.alt} className="slide-image" />
                <div className="slide-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Slider>
      </Row> */}
    </main>
  );
};

export default Home;
