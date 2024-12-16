import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import NewsJson from "./News.json"; // Import the JSON data
import coloradooeditlogo from "./coloradooeditlogo.svg"; 
import thetechnology from "./thetechnology.jpeg"; 
import NSF from "./icorps.jpg"; 


import BackGroundVideo from "../../assets/videos/world.mp4";
import "./news.css";

const { Meta } = Card;

const imageMapping = {
  "coloradooeditlogo.svg": coloradooeditlogo,  
  "thetechnology.jpeg": thetechnology,  
  "icorps.jpg": NSF
};

const News = () => {
  return (
    <main className="News-Application-content">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="News-background-video">
        <source src={BackGroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="News-background-overlay" />

      {/* Hero Section */}
      <div className="News-hero-heading">
        <h1>
          <span style={{ fontSize: "100px" }}>News</span>
        </h1>
        <h3>Stay up-to-date with the latest happenings and</h3>
        <h3>innovations coming out of VitaWave Tech</h3>
      </div>

      {/* Articles Grid */}
      <Row gutter={16} className="card-container">
        {NewsJson.map((newsItem, index) => (
          <Col xs={{ span: 24 }} lg={{ span: 8 }} key={index}>
            <Link to={`/blogs/${index}`} className="news-link" style={{ display: "block" }}>
              <Card
                style={{ width: "100%", height: "auto" }}
                cover={
                  <img
                    alt="Cover"
                    src={imageMapping[newsItem.coverImage]} // Use mapped image
                    style={{
                      height: "200px",
                      padding: "20px",
                      objectFit: "contain",
                    }}
                  />
                }
              >
                <Meta
                  title={
                    <div>
                      <p className="title">{newsItem.title}</p>
                      <p>{newsItem.date}</p>
                      <p>{newsItem.abstract}</p>
                    </div>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default News;
