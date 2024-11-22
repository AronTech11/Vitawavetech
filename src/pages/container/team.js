import React from "react";
import { Row, Col, Card } from "antd";
import CEO from "../../assets/images/Jason.jpg";
import CTO from "../../assets/images/hingba.jpg";
import COFounder from "../../assets/images/nam.jpeg";
import COFounder1 from "../../assets/images/robin1.png";
import COFounder2 from "../../assets/images/Aron1.jpg";
import Deepanshu from "../../assets/images/deep.png";
import Thanmi from "../../assets/images/thanmi1.png";
import April from "../../assets/images/moi2.png";
import BackGroundVideo from "../../assets/videos/world.mp4";
// import BackGroundVideo1 from "../../assets/videos/video-2.mp4";


import "./team.css";

const { Meta } = Card;

const teamMembers = [
  {
    name: "Jason McGowin",
    designation: "CEO",
    qualifications: "Stanford MBA",
    image: CEO,
  },
  {
    name: "T Hingba",
    designation: "CTO, Co-Founder",
    qualifications: "MBA-MEng",
    image: CTO,
  },
  {
    name: "Robin Deterding",
    designation: "Medical Advisor",
    qualifications: "MD",
    image: COFounder1,
  },
  {
    name: "Nam Bui",
    designation: "CSO - Technical Advisor",
    qualifications: "Professor",
    image: COFounder,
  },
  {
    name: "Taluba Aron Hopson",
    designation: "Project Engineer",
    qualifications: "Msc",
    image: COFounder2,
  },
  {
    name: "Deepanshu Gupta",
    designation: "Data Scientist",
    qualifications: "Msc",
    image: Deepanshu,
  },
  {
    name: "Thanmi Maram",
    designation: "Support",
    qualifications: "",
    image: Thanmi,
  },
  {
    name: "April Yang",
    designation: "Project Engineer",
    qualifications: "",
    image: April,
  },
];

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
            <span className="gradient-text">Empowering Innovation Through Diverse Expertise</span>
          </h4>
          <h4 className="meet_team">
            <span className="gradient-text">
              VitaWave Tech is dedicated to developing and commercializing
              innovative eBP technology for blood pressure monitoring
            </span>
          </h4>
          <h4 className="meet_team">
            <span className="gradient-text">Meet the Team Members</span>
          </h4>
          
        </Col>
      </Row>

      {/* Map through teamMembers to display each card */}
      <Row justify="center" align="middle" className="team-info-section">
        {teamMembers.map((member, index) => (
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            key={index}
            className="team-card-col"
          >
            <Card
              hoverable
              cover={
                <img
                  alt={member.name}
                  src={member.image}
                  className="team-image"
                />
              }
            >
              <Meta
                title={member.name}
                description={`${member.designation}, ${member.qualifications}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default Team;
