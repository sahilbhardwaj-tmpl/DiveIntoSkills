import React from "react";
import "./AboutStyles.css";
import DiveIntoSkills from "../../assets/Dive_into_skills.png";
import profilePic from "../../assets/pic.png";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import SocialMediaLinksForMobile from "../SocialMediaLinks/SocialMediaLinksForMobile";

function About() {
  return (
    <>
      <div className="container1">
        <p className="about-section-heading">All About “Dive Into Skills”</p>
        <div className="About-container">
          <div className="txtContainer">
            <p className="about-section-p" style={{ color: "#000" }}>
              "Dive Into Skills" is a platform where you can learn about
              software development. The purpose behind "Dive Into Skills" is to
              educate people about Programming and technology and to raise
              awareness of skills. Here I will share knowledgeable content about
              "free courses on different platforms, tutorials on different
              topics related to software development". I hope by using this
              platform, you will learn many valuable skills.
            </p>
          </div>
          <div className="imageContainer">
            <img src={DiveIntoSkills} alt="Vector Image" />
          </div>
        </div>
      </div>
      <div className="container1">
        <p className="about-section-heading">
          Master Mind behind "Dive Into Skills"
        </p>
        <div className="About-container">
          <div className="txtContainer">
            <p className="author-name">Ahmad Raza</p>
            <p className="about-section-p">
              I am Ahmad Raza. I am a student of bachelors of Software
              Engineering and also a MERN Stack Developer, UI/UX Designer and
              Content Creator. I'm also a community mentor at iConnect Pakistan.
            </p>
            <p className="about-section-p">
              <Link to="/know more" style={{ color: "black" }}>
                Know More
              </Link>
            </p>
          </div>
          <div className="image-Container">
            <img src={profilePic} alt="Vector Image" />
          </div>
        </div>
      </div>

      <div className="socialLinks">
        <div className="find-us-mob">
          <p className="find-us">Find us on other social media platforms</p>
        </div>

        <div className="SocialMediaLinksForAbout social-media-links">
          <SocialMediaLinks color="#183114" />
        </div>
        <div className="SocialMediaLinksForMobile social-media-links">
          <SocialMediaLinksForMobile color="#183114" />
        </div>
      </div>
    </>
  );
}

export default About;
