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
import conceptDrawing from "../../assets/images/concept_drawing.jpeg";
import uniColoradoDenver from "../../assets/images/CU_Denver_logo.png";
import uniColoradoBoulder from "../../assets/images/University_of_Colorado_Boulder_logo.png";
import purdueUniv from "../../assets/images/Purdue-University-Logo.webp";
import uniColoradoAnshutz from "../../assets/images/university of colorado anschutz.png";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import { useNavigate } from "react-router-dom";
import "./home.css";


const MyComponent = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate("/team");
      }}
    >
      Go to Team
    </button>
  );
};

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
                <video src={Video} autoPlay loop muted />
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
