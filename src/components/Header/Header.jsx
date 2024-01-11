import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    return setClick(!click);
  };
  const[color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=30){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    
    window.addEventListener('scroll',changeColor)
  return (
    <>
  
        <div className={color?('header text-color header-bg'):('header')}>
          <p className="dive-into-skills-heading">Dive Into Skills</p>
          <div className="search-bar-comp">
            <SearchBar />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/Blogs">
              <li className="nav-item">Blogs</li>
            </Link>
            <Link to="/About">
              <li className="nav-item">About</li>
            </Link>
            <Link to="/Contact">
              <li className="nav-item">Contact</li>
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
