import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import NewsJson from "./News.json"; // Import the JSON data
import coloradooeditlogo from "./coloradooeditlogo.svg"; 
import thetechnology from "./thetechnology.jpeg"; 
import NSF from "./icorps.jpg"; 

import "./news.css";

const { Meta } = Card;

const imageMapping = {
  "coloradooeditlogo.svg": coloradooeditlogo,  
  "thetechnology.jpeg": thetechnology,  
  "icorps.jpg": NSF
};

// Helper function to truncate text after a certain number of words
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const News = () => {
  return (
    <main className="News-Application-content">
      {/* Hero Section */}
      <div className="news-main-section">
        <div className="News-hero-heading">
          <h1>News</h1>
          <h3>Stay up-to-date with the latest happenings and</h3>
          <h3>innovations coming out of VitaWave Tech</h3>
        </div>
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
                      marginBottom: "-50px",
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
                      <p>
                        {truncateText(newsItem.abstract, 40)}{" "}
                        {newsItem.abstract.split(" ").length >40 && (
                          <Link to={`/blogs/${index}`} className="news-link">
                            Read more
                          </Link>
                        )}
                      </p>
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
