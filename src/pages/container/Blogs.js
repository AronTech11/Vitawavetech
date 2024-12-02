import React from "react";
import { Card } from "antd";
import NewsJson from "./News.json"; // Import your JSON data
import BackGroundVideo from "../../assets/videos/world.mp4";
import oeditColoradoLogo from "../../assets/images/coloradooeditlogo.svg"
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
        <span>{title}</span>
      </h4>

      {/* Card for Project Announcement */}
      <Card className="News-card">
        <img src={oeditColoradoLogo} alt="OEdit Colorado Logo" className="blog-title-image"/>

        {/* Date and Location */}
        <h4>{`Date: ${date}`}</h4>

        {/* The main project details */}
      <div className="news-text">
        <p>
        VitaWave is pleased to announce that it has been awarded a grant of $150,000 from the Colorado Office of Economic Development and International Trade 
        (OEDIT) to support the development of an innovative in-ear blood pressure monitoring device<sup>i</sup>. This project is a collaborative effort with the Intelligent
        Networked Systems and Cybernetics Laboratory (InsCy Lab) at the University of Colorado Denver, where Nam Bui, the principal investigator and technical advisor to 
        VitaWave, will lead the research and development efforts.<br></br><br></br>

        The grant from OEDIT underscores the state's commitment to fostering groundbreaking innovations in healthcare technology. This funding will enable VitaWave to
        advance its research into non-invasive blood pressure monitoring, a critical area of need in modern medicine. As hypertension remains a leading risk factor for
        cardiovascular diseases, the ability to monitor blood pressure accurately and conveniently can significantly enhance patient outcomes and management strategies<sup>ii</sup>.
        The proposed in-ear device aims to provide continuous and accurate blood pressure readings, facilitating better self-management for patients and reducing the
        burden on healthcare systems.<br></br><br></br>

        The significance of this project extends beyond technological advancement; it aligns with current trends in telehealth and remote patient monitoring. Research 
        indicates that self-monitoring of blood pressure, particularly through telehealth models, can lead to improved management of hypertension and better adherence to
        treatment protocols<sup>iii</sup>. The integration of advanced sensor technology into wearable devices is paving the way for more personalized healthcare solutions, which is
        crucial in addressing the growing prevalence of hypertension globally<sup>iv</sup>,<sup>v</sup>.<br></br><br></br>

        We extend our sincere gratitude to the Colorado OEDIT for their generosity and vision in supporting this initiative. Their investment in innovative healthcare solutions reflects
        a broader understanding of the importance of technology in improving health outcomes. As we embark on this journey, we are excited about the potential impact of our in-ear blood 
        pressure monitoring system on patient care and the future of healthcare technology.<br></br><br></br>

        The collaboration between VitaWave and InsCy Lab, supported by the OEDIT grant, represents a significant step forward in the development of advanced healthcare technologies. We 
        are committed to leveraging this opportunity to enhance the accuracy and accessibility of blood pressure monitoring, ultimately contributing to better health management for individuals 
        with hypertension.
        <br></br><br></br>
        References:
        <hr></hr>
        </p>
        <div class="news-reference">
          <p>
          <sup>i</sup>VitaWave Secures $150,000 Grant from Colorado OEDIT for Innovative In-Ear Blood Pressure Monitoring Device Development<br></br>
          <sup>ii</sup>Qi-Fang Huang et al., “Ambulatory Blood Pressure Monitoring to Diagnose and Manage Hypertension,” Hypertension 77, no. 2 (February 2021): 254–64, <a href="https://doi.org/10.1161/HYPERTENSIONAHA.120.14591">https://doi.org/10.1161/HYPERTENSIONAHA.120.14591</a>.<br></br>
          <sup>iii</sup>Richard J McManus et al., “Efficacy of Self-Monitored Blood Pressure, with or without Telemonitoring, for Titration of Antihypertensive Medication (TASMINH4): An Unmasked Randomised Controlled Trial,” The Lancet 391, no. 10124 (March 10, 2018): 949–59, <a href="https://doi.org/10.1016/S0140-6736(18)30309-X">https://doi.org/10.1016/S0140-6736(18)30309-X</a>.<br></br>
          <sup>iv</sup>“Expert Panel Consensus Recommendations for Ambulatory Blood Pressure Monitoring in Asia: The HOPE Asia Network - Kario - 2019 - The Journal of Clinical Hypertension - Wiley Online Library,” accessed November 23, 2024, <a href="https://onlinelibrary-wiley-com.ezproxy.lib.purdue.edu/doi/10.1111/jch.13652">https://onlinelibrary-wiley-com.ezproxy.lib.purdue.edu/doi/10.1111/jch.13652</a>.<br></br>
          <sup>v</sup>Ting-Wei Wang and Shien-Fong Lin, “Wearable Piezoelectric-Based System for Continuous Beat-to-Beat Blood Pressure Measurement,” Sensors 20, no. 3 (January 2020): 851, <a href="https://doi.org/10.3390/s20030851">https://doi.org/10.3390/s20030851</a>.<br></br>
          </p>
        </div>
      </div>
          



        {/* References 
        <h5>References:</h5>*
        <p>{ref}</p>/*/}
      </Card>
    </main>
  );
};

export default Blogs;
