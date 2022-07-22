import React from "react";
import "../styles/Footer.css";
import Github from "../assets/github.svg";
import Email from "../assets/email.png";


function Footer() {
  return (
    <div className="footer">
        <div> 
           <a href="mailto:rashad@rashadmoore.dev" target="_blank" rel="noopener noreferrer"><img src={Email} className="bio-icon email" alt="icon"/></a><a href="https://github.com/Rashad-TX?tab=repositories" target="_blank"><img src={Github} alt="icon" className="bio-icon github"/> </a>
        </div>
            <p className="footer-text">&copy; Rashad Moore {new Date().getFullYear()}</p>
    </div>
        
  );
}

export default Footer;