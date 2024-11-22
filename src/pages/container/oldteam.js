import React from "react";
import { Row, Col, Card } from "antd";
import CEO from "../../assets/images/Jason.jpg";
import CTO from "../../assets/images/hingba.jpg";
import COFounder from "../../assets/images/nam.jpeg";
import COFounder1 from "../../assets/images/robin1.png";
import COFounder2 from "../../assets/images/Aron.jpg";
// import BackGroundVideo from "../../assets/videos/video-2.mp4";
import BackGroundVideo from "../../assets/videos/world.mp4";


import "./team.css";

const { Meta } = Card;

const Team = () => {
  return (
    <main className="team-content">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src={BackGroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Row>
        <Col span={24}>
          <h4 className="meet_team">
            <span className="gradient-text">Meet the Team Members</span>
          </h4>
        </Col>
      </Row>

      {/* CEO */}
      <Row justify="center" align="middle" className="team-info-section left-slide">
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={<img alt="Jason" src={CEO} className="team-image" />}
          >
            <Meta title="Jason" description="CEO, Stanford MBA" />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="info-text">
            With a Stanford MBA and a track record of launching six new product
            platforms, Jason brings a wealth of leadership experience. His
            history of founding companies through acquisition demonstrates his
            entrepreneurial drive and strategic acumen. Jason is well-equipped
            to guide the company through commercialization and growth phases.
          </p>
        </Col>
      </Row>

      {/* CTO */}
      <Row justify="center" align="middle" className="team-info-section right-slide">
        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="info-text">
            Holding an MBA-MEng, Hingba bridges the gap between business and
            technology. With over eight years of hands-on experience in
            manufacturing, product design, and development, he possesses the
            technical expertise to drive innovative technology products from
            prototype to production.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={<img alt="Hingba" src={CTO} className="team-image" />}
          >
            <Meta title="Hingba" description="CTO, Co-Founder, MBA-MEng" />
          </Card>
        </Col>
      </Row>

      {/* Co-Founder 1 */}
      <Row justify="center" align="middle" className="team-info-section left-slide">
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={<img alt="Robin" src={COFounder1} className="team-image" />}
          >
            <Meta title="Robin" description="Designer" />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="info-text">
            Dr. Deterding is a distinguished Professor of Pediatrics with a
            strong entrepreneurial background. As a renowned Medical Director
            and holder of multiple patents, her insights and guidance are
            invaluable for ensuring the medical relevance of our eBP device and
            helping us address the specific needs of the healthcare industry.
          </p>
        </Col>
      </Row>

      {/* Co-Founder 2 */}
      <Row justify="center" align="middle" className="team-info-section right-slide">
        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="info-text">
            Dr. Bui, an Assistant Professor of Electrical Engineering,
            specializes in wearable devices and algorithms for health sensing
            systems. His technical knowledge and experience in this niche field
            provide critical guidance for the technological aspects of our
            innovation.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={<img alt="Nam" src={COFounder} className="team-image" />}
          >
            <Meta title="Nam Bui" description="CSO - Technical Advisor" />
          </Card>
        </Col>
      </Row>

      {/* Co-Founder 3 */}
      <Row justify="center" align="middle" className="team-info-section left-slide">
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Card
            hoverable
            cover={<img alt="Aron" src={COFounder2} className="team-image" />}
          >
            <Meta title="Aron" description="Project Engineer" />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          <p className="info-text">
            Aron brings practical software development and hardware experience
            to the team, with a background in electronics and telecommunication
            engineering. Currently pursuing an MS in Computer Science, his
            dedication to ongoing learning ensures our technical prowess remains
            cutting-edge.
          </p>
        </Col>
      </Row>
    </main>
  );
};

export default Team;
