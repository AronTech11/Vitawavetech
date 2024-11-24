import React from "react";
import { Row, Col } from "antd";
import Slider from "react-slick"; // Import react-slick for slider
import Video from "../../assets/videos/heartbeat.mp4";
import BloodPressure from "../../assets/images/blood-pressure-logo.png";
import Thetechnology from "../../assets/images/thetechnology.jpeg";
import Kidneys from "../../assets/images/kidneys.jpg";
import Vitals from "../../assets/images/stethoscope.svg";
import High from "../../assets/images/clipboard.svg";
import Cuff from "../../assets/images/heartbeat_wave3.svg";
import Nurse from "../../assets/images/nurse.svg";
import conceptDrawing from "../../assets/images/concept_drawing.jpeg"
import uniColoradoDenver from "../../assets/images/CU_Denver_logo.png";
import uniColoradoBoulder from "../../assets/images/University_of_Colorado_Boulder_logo.png";
import purdueUniv from "../../assets/images/Purdue-University-Logo.webp";
import uniColoradoAnshutz from "../../assets/images/university of colorado anschutz.png";
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
      image: uniColoradoDenver,
      alt: "University of Colorado Denver",
      title: "University of Colorado Denver",
    },
    {
      image: uniColoradoBoulder,
      alt: "University of Colorado Boulder",
      title: "University of Colorado Boulder",
    },
    {
      image: purdueUniv,
      alt: "Purdue University",
      title: "Purdue University",
    },
    {
      image: uniColoradoAnshutz,
      alt: "University of Colorado Anshutz",
      title: "University of Colorado Anshutz",
    },

  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3, // Only one slide visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Slide every 1 second (1000ms)
    centerMode: true, // Center the active slide
    centerPadding: "0", // No padding around the centered slide
  };

  return (
    <div>
    <main className="content">
      <Row>
        <Col span={24}>
          <div className="hero-section">
            <div className="hero-image-container">
              {/* Added the text above the video */}
              <div className="hero-text">
                <h1>Developing A Novel Blood Pressure Monitoring Device</h1>
                <p>
                  Wearable, Cuffless, Intermittent-Continuous, Ear-Based
                  Measurement
                </p>
                <p>
                  <a href="https://cacm.acm.org/research/ebp/" target="_blank">
                  Published studies on ACM 2021
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
          <h3>Introducing In-ear Blood Pressure (eBP) Monitor</h3>
          <p>
          VitaWave’s eBP monitoring device represents a significant advancement in health technology, offering a cuffless, non-invasive solution for blood pressure measurement. 
          Utilizing a light-based pulse sensor, this innovative device integrates into daily life, allowing for portable and wearable monitoring without the discomfort associated 
          with traditional cuffs. Its advanced blood pressure estimation algorithm enables real-time data collection and analysis, empowering users to track their health effortlessly. 
          </p>
          <button type="button" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href='/application';
            }}>Learn More</button>  
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

      <Row justify="center" align="middle" className="info-section-contrast">
        <Col xs={24} sm={24} md={8} lg={9} xl={9} className="image-col">
          <div className="image-card">
          <img alt="concept_drawing" src={conceptDrawing} className="hero-image" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={15} xl={15} className="col-text-contrast">
          <h3>About VitaWave</h3>
          <p>
          VitaWave focuses on empowering health with cuffless precision - monitor anytime, anywhere.
          VitaWave is at the forefront of transforming blood pressure monitoring technology through innovative, cuffless solutions
           prioritizing user comfort and accessibility. Our dedicated team is committed to convergent 
           research that integrates engineering, medicine, data science, computer science, and artificial 
           intelligence/machine learning to translate groundbreaking discoveries from the lab into practical 
           applications for blood pressure management. By leveraging advanced technologies, we aim to deliver a 
           portable and non-invasive monitoring device that empowers users to manage their cardiovascular health seamlessly and remotely.
           </p>
          <button type="button" class="button-contrast"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='/team';
            }}>Learn More</button>  
        </Col>
      </Row>
 {/* 
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
      */}
      
      <Row justify="center" align="middle" className="Slide-section">
        <h2 className="slide-heading">Collaborators</h2>
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
      </Row>

      <Row justify="center" align="middle" className="info-section">
          <div className="as-seen-in-content">
            <h3 postion="center">As Seen In</h3>
            <p>Embark</p>
            <p>Innosphere Ventures</p>
            <p>Boulder Startup Week</p>
            <p>NVC CU Boulder</p>
          </div>
      </Row>
    </main>
    </div>
  );
};

export default Home;
