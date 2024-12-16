import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To extract the dynamic URL parameter
import { Card } from "antd";
import NewsJson from "./News.json"; // Import the same JSON data
import BackGroundVideo from "../../assets/videos/world.mp4";
import oeditColoradoLogo from "./coloradooeditlogo.svg";
import thetechnology from "./thetechnology.jpeg";
import NSF from "./icorps.jpg";

import "./Blogs.css";

const imageMapping = {
  "coloradooeditlogo.svg": oeditColoradoLogo,
  "thetechnology.jpeg": thetechnology,
  "icorps.jpg": NSF,
};

const Blogs = () => {
  const { id } = useParams(); // Get the dynamic parameter from the URL
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    // Find the corresponding blog post from the JSON data by the index (id)
    const selectedBlog = NewsJson[parseInt(id)];
    setBlogData(selectedBlog);
  }, [id]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="Blog-Application-content">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="Blog-background-video">
        <source src={BackGroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="Blog-background-overlay" />

      {/* Hero Section */}
      <h4 className="Blog-hero-heading">
        <span>{blogData.title}</span>
      </h4>

      {/* Card for the Blog */}
      <Card className="News-card">
        <img
          src={imageMapping[blogData.coverImage]}
          alt="OEdit Colorado Logo"
          className="blog-title-image"
        />

        {/* Date and Location */}
        <h4>{`Date: ${blogData.date}`}</h4>

        {/* Main Blog Content */}
        <div className="news-text">
          <p>
            {blogData.p1}
            {blogData.p2}
          </p>

          <p>
            {blogData.p3} {blogData.p4}
          </p>

          <p>{blogData.p5}</p>
        </div>

        {/* References */}
        <h5>References:</h5>
        <p>{blogData.ref}</p>
      </Card>
    </main>
  );
};

export default Blogs;
