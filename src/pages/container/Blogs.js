import React from "react";
import { Card } from "antd";
import NewsJson from "./News.json"; // Import your JSON data
import BackGroundVideo from "../../assets/videos/world.mp4";
import "./Blogs.css";

const Blogs = () => {
  // Destructure the JSON data from NewsJson
  const { 
    title, 
    date, 
    p1, 
    p2, 
    p3, 
    p4, 
    p5, 
    ref 
  } = NewsJson;

  return (
    <main className="Blog-Application-content">
      {/* Background Video */}
      <video autoPlay muted loop className="Blog-background-video">
        <source src={BackGroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="Blog-background-overlay" />

      {/* Hero Section */}
      <h4 className="Blog-hero-heading">
        <span>Project News</span>
      </h4>

      {/* Card for Project Announcement */}
      <Card title={title} className="News-card">
        {/* Date and Location */}
        <h4>{`Date: ${date}`}</h4>

        {/* The main project details */}
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <p>{p5}</p>

        {/* References */}
        <h5>References:</h5>
        <p>{ref}</p>
      </Card>
    </main>
  );
};

export default Blogs;
