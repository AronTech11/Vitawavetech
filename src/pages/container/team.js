import React from "react";
import { Row, Col, Card } from "antd";
import LinkedIn from "../../assets/images/download.png"
import CEO from "../../assets/images/Jason.jpg";
import CTO from "../../assets/images/hingba.jpg";
import COFounder from "../../assets/images/nam.jpeg";
import COFounder1 from "../../assets/images/robin1.png";
import Engineer from "../../assets/images/Aron.jpg";
/*import Deepanshu from "../../assets/images/deep.png";*/
import April from "../../assets/images/april.png";
// import BackGroundVideo1 from "../../assets/videos/video-2.mp4";


import "./team.css";

const { Meta } = Card;

const teamMembers = [
  {
    name: "Jason McGowin, Stanford MBA",
    designation: "CEO,",
    qualifications: "Co-Founder",
    image: CEO,
    social: "https://www.linkedin.com/in/jasonmcgowin/"
  },
  {
    name: "T Hingba, MBA-MEng",
    designation: "CTO,",
    qualifications: "Co-Founder",
    image: CTO,
    social: "https://www.linkedin.com/in/t-hingba" // LinkedIn link
  },
  {
    name: "Robin Deterding, MD",
    designation: "Medical Advisor",
    qualifications: "",
    image: COFounder1,
    social: "https://www.linkedin.com/in/robin-deterding-2979a056/"
  },
  {
    name: "Nam Bui, Ph.D",
    designation: "CSO,",
    qualifications: "Technical Advisor",
    image: COFounder,
    social: "https://www.linkedin.com/in/namnbui/"
  },
  {
    name: "Taluba Aron Hopson, MS",
    designation: "Project Engineer",
    qualifications: "",
    image: Engineer,
    social: "https://www.linkedin.com/in/taluba-aron-hopson/"
  },
 /*{ He booted out for now but he shall return from the ashes} {
    name: "Deepanshu Gupta, MS",
    designation: "Data Scientist",
    qualifications: "",
    image: Deepanshu,
    social: "https://www.linkedin.com/in/deepanshu-gupta2805/"
  },}*/
  {
    name: "April Yang Maram",
    designation:"Software Developer",
    qualifications: "",
    image: April,
    social: "https://www.linkedin.com/in/april-yang-185a5a1a7/"
  },
];

const Team = () => {
  return (
    <main className="team-content">
      <div className="team-main-section">
        <div className="team-main-text">
            <h1>Our Team</h1>
        </div>
      </div>
       
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
                description={`${member.designation} ${member.qualifications}`}
              />
              <a
                  href={member.social} // Use the custom social link for each member
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedIn} // LinkedIn image
                    alt="LinkedIn"
                    style={{width: "40px", height: "40px", marginTop: "15px", borderRadius: "50%",}}
                  />
                </a>

            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default Team;
