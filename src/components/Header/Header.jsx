import React from "react";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import { Context } from "../Layout/Layout";
function Header() {
  const{pageName, setPageName}=useContext(Context);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    return setClick(!click);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 30) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
 console.log(pageName);
  return (
    <>
      <div className={color ? "header text-color header-bg" : "header"}>
        <p className="dive-into-skills-heading">Dive Into Skills</p>
        <div className="search-bar-comp">
          <SearchBar />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/"
            className={`nav-item ${pageName === "Home" ? "active" : "inactive"}`}
            
          >
            <li onClick={handleClick}className="nav-item">Home</li>
          </Link>
          <Link
            to="/Blogs"
            className={`nav-item ${pageName === "Blogs"? "active" : "inactive"}`}
          >
            <li onClick={handleClick} className="nav-item">Blogs</li>
          </Link>
          <Link
            to="/About"
           
            className={`nav-item ${pageName=== "About" ? "active" : "inactive"}`}
          >
            <li onClick={handleClick} className="nav-item">About</li>
          </Link>
          <Link
            to="/Contact"
        
            className={`nav-item ${pageName === "Contact" ? "active" : "inactive"}`}
          >
            <li onClick={handleClick} className="nav-item">Contact</li>
          </Link>
        </ul>
        <div className="hamsburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: "white" }} />
          ) : (
            <FaBars size={25} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
