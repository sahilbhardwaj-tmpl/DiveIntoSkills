import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'
import SocialMediaLinksForMobile from '../SocialMediaLinks/SocialMediaLinksForMobile'
function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <p
            className="footer-heading"
            style={{ color: "#FCEE21", fontWeight: "bolder", fontSize: "40px" }}
          >
            Dive Into Skills
          </p>
        </div>
        <div className="text-container">
          <div className="txt">
            <p className='txt-p'>
              The latest articles and courses to help you upgrade your skills
              and learn the latest trends. Master web Development with these
              amazing resources that are available for free!
            </p>
          </div>
          <div className="for-mobile"><ul className="flex-row_1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Blogs'>Blog</Link></li>
            <li><Link to='/course'>Course</Link></li>
            <li><a href='https://youtube.com' target="_blank">YouTube</a></li>
          </ul></div>
          <div className="for-mobile"><ul className="flex-row_2">
            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/Privacy Policy">Privacy Policy</Link>
            </li>

            <li>
              <Link to="/conditions">Terms & Conditions</Link>
            </li>
          </ul></div>
          
        </div>
        
          <div className="SocialMediaLinks social-media-links" ><SocialMediaLinks color="#DCDE9F" /></div>
          <div className="SocialMediaLinksForMobile social-media-links"><SocialMediaLinksForMobile color="#DCDE9F" /></div>
          
       
        <div className="info" style={{ color: "#DCDE9F" }}>
          <p className='info-p'  >
            COPYRIGHT @ 2022 Dive Into Skills
          </p>
          <p className='info-p'>Developed by: Ahmad Raza</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
