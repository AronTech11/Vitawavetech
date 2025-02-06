import React from "react";
import { Row, Col, Card } from "antd";
import Slider from "react-slick"; // Import react-slick for slider
import Video from "../../assets/videos/heartbeat.mp4";

import Thetechnology from "../../assets/images/thetechnology.jpeg";
import conceptDrawing from "../../assets/images/concept_drawing.jpeg";
import uniColoradoDenver from "../../assets/images/CU_Denver_logo.png";
import uniColoradoBoulder from "../../assets/images/University_of_Colorado_Boulder_logo.png";
import purdueUniv from "../../assets/images/Purdue-University-Logo.webp";
import uniColoradoAnshutz from "../../assets/images/university of colorado anschutz.png";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import { useNavigate } from "react-router-dom";
import "./home.css";
import NVC from "../../assets/images/Nvc.png";
import Embark from "../../assets/images/Embark.png";
import Innos from "../../assets/images/Innos.png";
import Boulder from "../../assets/images/boulder.png";

const Home = () => {
  const navigate = useNavigate();

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
                    <a
                      href="https://cacm.acm.org/research/ebp/"
                      target="_blank"
                    >
                      Published studies on ACM 2021
                    </a>
                    .
                  </p>
                </div>
                <video src={Video} autoPlay loop muted playsInline />
              </div>
            </div>
          </Col>
        </Row>

        <Row justify="center" align="middle" className="info-section">
          <Col xs={24} sm={24} md={16} lg={15} xl={15} className="col-text">
            <h3>Introducing In-ear Blood Pressure (eBP) Monitor</h3>
            <p>
              VitaWave’s eBP monitoring device represents a significant
              advancement in health technology, offering a cuffless,
              non-invasive solution for blood pressure measurement. Utilizing a
              light-based pulse sensor, this innovative device integrates into
              daily life, allowing for portable and wearable monitoring without
              the discomfort associated with traditional cuffs. Its advanced
              blood pressure estimation algorithm enables real-time data
              collection and analysis, empowering users to track their health
              effortlessly.
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                navigate("/application");
              }}
            >
              Learn More
            </button>
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
              <img
                alt="concept_drawing"
                src={conceptDrawing}
                className="hero-image"
              />
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={15}
            xl={15}
            className="col-text-contrast"
          >
            <h3>About VitaWave</h3>
            <p>
              VitaWave focuses on empowering health with cuffless precision -
              monitor anytime, anywhere. VitaWave is at the forefront of
              transforming blood pressure monitoring technology through
              innovative, cuffless solutions prioritizing user comfort and
              accessibility. Our dedicated team is committed to convergent
              research that integrates engineering, medicine, data science,
              computer science, and artificial intelligence/machine learning to
              translate groundbreaking discoveries from the lab into practical
              applications for blood pressure management. By leveraging advanced
              technologies, we aim to deliver a portable and non-invasive
              monitoring device that empowers users to manage their
              cardiovascular health seamlessly and remotely.
            </p>
            <button
              type="button1"
              className="button-contrast button-small-screen"
              style={{ color: "white" }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0); // Scroll to the top
                navigate("/team");
              }}
            >
              Learn More
            </button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h1 className="coll-text">Collaborators</h1>
          </Col>
        </Row>

        <Slider
          {...{
            ...sliderSettings,
            responsive: [
              {
                breakpoint: 768, // For tablets
                settings: {
                  slidesToShow: 1, // Show only one slide at a time
                  centerMode: true, // Center the current slide
                  centerPadding: "0", // Optional: remove extra padding from the center
                  arrows: true, // Show arrows for navigation
                },
              },
              {
                breakpoint: 480, // For mobile devices
                settings: {
                  slidesToShow: 1, // Show only one slide at a time
                  centerMode: true, // Center the current slide
                  centerPadding: "0", // Optional: remove extra padding from the center
                  arrows: true, // Show arrows for navigation
                },
              },
            ],
          }}
          className="slide-section"
        >
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

        <Row>
          <Col span={24}>
            <h1 className="coll-text">As Seen In</h1>
          </Col>
        </Row>
        <Row
          justify="center"
          align="middle"
          gutter={16}
          style={{ padding: "30px" }}
        >
          <Col xs={24} sm={12} md={6} style={{padding:"25px"}}>
            <img alt="example" src={NVC} className="image-card-seen" />
          </Col>
          <Col xs={24} sm={12} md={6} style={{padding:"25px"}}>
            <img alt="example" src={Innos} className="image-card-seen" />
          </Col>
          <Col xs={24} sm={12} md={6} style={{padding:"25px"}}>
            <img alt="example" src={Boulder} className="image-card-seen" />
          </Col>
          <Col xs={24} sm={12} md={6} style={{padding:"25px"}}>
            <img alt="example" src={Embark} className="image-card-seen" />
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default Home;
