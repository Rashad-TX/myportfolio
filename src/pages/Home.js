import React from "react";
import ProfPic from "../assets/profpic.png";
import "../styles/Home.css";
import Email from "../assets/email.png";
import Github from "../assets/github.svg";
import Api from "../assets/api.png";
import Native from "../assets/native.png";


function Home(){

    return(
        <>
<div id = "home" className="home container">
    <div className="row">
        <div className="col" align="center">
<img src={ProfPic} alt="profile-pic" className="prof-pic"/>
<p className="bio-text">Full Stack Software Engineer With A Passion For Front-End Web Development.</p>
      <div> <a href="mailto:rashad@rashadmoore.dev" target="_blank" rel="noopener noreferrer"><img src={Email} className="bio-icon email" alt="icon"/></a><a href="https://github.com/Rashad-TX?tab=repositories" target="_blank"><img src={Github} alt="icon" className="bio-icon github"/> </a></div>
        </div>
    </div>
</div>

<div id="skills" className="skills container-fluid">
<div>
<h1 className ="skills-text">SKILLS:</h1>
</div>

<div className="skills-card mx-auto">
<div><i className="devicon-html5-plain-wordmark colored devicon fluid"></i></div>
<div><i className="devicon-css3-plain-wordmark colored devicon fluid"></i></div>
<div><i className="devicon-sass-original colored devicon fluid"></i></div>
<div><i className="devicon-bootstrap-plain-wordmark colored devicon fluid"></i></div>
<div><i className="devicon-javascript-plain colored devicon fluid"></i></div>
<div><i className="devicon-react-original-wordmark colored devicon fluid"></i></div>
<div><i className="devicon-redux-original colored devicon fluid"></i></div>
<div><i className="devicon-nodejs-plain-wordmark devicon fluid"></i></div>
<div><i className="devicon-express-original devicon fluid"></i></div>
<div><i className="devicon-mongodb-plain-wordmark devicon fluid"></i></div>
<div><i className="devicon-vscode-plain-wordmark colored devicon fluid"></i></div>
<div><i className="devicon-npm-original-wordmark colored devicon fluid"></i></div>
<div><i className="devicon-yarn-plain-wordmark colored devicon fluid"></i></div>
<div><i className="devicon-git-plain-wordmark colored devicon fluid"></i></div>
<div><i className="devicon-github-original-wordmark devicon fluid"></i></div>
<div><i className="devicon-bash-plain devicon fluid"></i></div>
<div><i className="devicon-figma-plain colored devicon fluid"></i></div>
<div><i className="devicon-canva-original devicon fluid"></i></div>
<div><img src={Native} alt="native-icon" className="native-icon"/></div>
<div><img src={Api} alt="api-icon" className="api-icon"/></div>

</div>
</div>

</>
    )

}

export default Home;