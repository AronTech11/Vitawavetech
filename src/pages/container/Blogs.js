import React from "react";
import {  Card } from "antd";
import NewsJson from "./News.json"; // Import your JSON data
import BackGroundVideo from "../../assets/videos/world.mp4";
import "./Blogs.css";

const Blogs = () => {
  // Assuming NewsJson is the JSON data you've given
  const { announcement, grant_details, collaboration, project_details, healthcare_impact, references } = NewsJson;

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
      <Card title={announcement.title} className="News-card">
       
        <h4>{`Date: ${announcement.date} | Location: ${announcement.location}`}</h4>
        <p>{announcement.title}</p>
        <p><strong>Date:</strong> {announcement.date}</p>
        <p><strong>Location:</strong> {announcement.location}</p>
      </Card>

      {/* Card for Grant Details */}
      <Card title="Grant Details" style={{ marginTop: '10px' }} className="News-card">
        <p><strong>Grant Amount:</strong> ${grant_details.amount}</p>
        <p><strong>Source:</strong> {grant_details.source}</p>
        <p><strong>Purpose:</strong> {grant_details.purpose}</p>
      </Card>

      {/* Card for Collaboration */}
      <Card title="Collaboration Details" style={{ marginTop: '10px' }} className="News-card">
        <p><strong>Partner:</strong> {collaboration.partner}</p>
        <p><strong>Principal Investigator:</strong> {collaboration.principal_investigator}</p>
      </Card>

      {/* Card for Project Focus */}
      <Card title="Project Details" style={{ marginTop: '10px' }} className="News-card">
        <p><strong>Focus:</strong> {project_details.focus}</p>
        <p><strong>Goal:</strong> {project_details.goal}</p>
        <p><strong>Target Area:</strong> {project_details.target_area}</p>
      </Card>

      {/* Card for Healthcare Impact */}
      <Card title="Healthcare Impact" style={{ marginTop: '10px' }} className="News-card">
        <p><strong>Significance:</strong> {healthcare_impact.significance}</p>
        <p><strong>Integration:</strong> {healthcare_impact.integration}</p>
      </Card>

      {/* Card for References */}
      <Card title="References" style={{ marginTop: '10px' }} className="News-card">
        {references.map((reference, index) => (
          <p key={index}>
            <a href={reference.url} target="_blank" rel="noopener noreferrer">{reference.title}</a>
          </p>
        ))}
      </Card>
    </main>
  );
};

export default Blogs;
