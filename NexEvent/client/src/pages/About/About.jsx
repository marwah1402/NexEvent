import React from "react";
import "./About.css";
import missionIcon from "../../assets/mission.png";
import visionIcon from "../../assets/vision.png";
import valuesIcon from "../../assets/values.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About NexEvent</h1>
        <p>
          NexEvent is your go-to solution for planning and managing events seamlessly. Whether it's a wedding,
          corporate event, or celebration, we've got you covered.
        </p>
      </div>
      
      <div className="about-sections">
        <div className="about-section">
          <img src={missionIcon} alt="Our Mission" />
          <h3>Our Mission</h3>
          <p>
            To simplify the event planning process while delivering unforgettable experiences that exceed expectations.
          </p>
        </div>
        <div className="about-section">
          <img src={visionIcon} alt="Our Vision" />
          <h3>Our Vision</h3>
          <p>
            To become the leading event management platform, renowned for innovation and exceptional customer service.
          </p>
        </div>
        <div className="about-section">
          <img src={valuesIcon} alt="Our Values" />
          <h3>Our Values</h3>
          <p>
            Creativity, collaboration, and commitment to making every event a success.
          </p>
        </div>
      </div>

      <div className="about-team">
        <h2>Meet Our Team</h2>
        <p>
          We are a group of dedicated professionals passionate about creating memorable experiences for our clients.
        </p>
      </div>
    </div>
  );
};

export default About;
