import React from "react";
import { Layout, Card, Row, Col, Typography, Button } from "antd";
import "./Application.css";
import Video from "../../assets/videos/medical-beat.mp4";
import Platform from "../../assets/images/Env.png";
import Kidneys from "../../assets/images/kidneys.jpg";
import Minitor from "../../assets/images/ear-monitor.jpg";
import HeartBeat from "../../assets/images/challenge.png";
import Device from "../../assets/images/blood-pressure-logo.png";
import prototype from "../../assets/images/prototype.png";
import diagram from "../../assets/images/diagram.jpeg";

const { Content } = Layout;
const { Title, Text } = Typography;

const events = [
  {
    photo: <div className="app-Events"><img src={Platform} alt="Logo" /></div>,
    title: "Platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  {
    photo: <div className="app-Events"><img src={Kidneys} alt="Logo" /></div>,
    title: "Kidneys",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  {
    photo: <div className="app-Events"><img src={Minitor} alt="Logo" /></div>,
    title: "Minitor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  {
    photo: <div className="app-Events"><img src={HeartBeat} alt="Logo" /></div>,
    title: "HeartBeat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  {
    photo: <div className="app-Events"><img src={Device} alt="Logo" /></div>,
    title: "Device",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  {
    photo: <div className="app-Events"><img src={prototype} alt="Logo" /></div>,
    title: "prototype",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  {
    photo: <div className="app-Events"><img src={diagram} alt="Logo" /></div>,
    title: "diagram",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
];

const Application = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div className="hero-section">
          <div className="app-hero-image-container">
            <video src={Video} autoPlay loop muted playsInline />
          </div>
        </div>
        <div className="app-site-layout-content">
          <Row gutter={[16, 16]}>
            {events.map((event, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  cover={<div className="app-event-photo">{event.photo}</div>}
                >
                  <Title level={4}>{event.title}</Title>
                  <p>{event.description}</p>
                  <Button type="primary">Learn More</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Application;
