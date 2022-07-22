import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
   
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project-image"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="project-links">
      <div>
      <a href={project.website} target="_blank" rel="noreferrer" className="proj-link">Live</a>
      </div>
      <div>
      <a href={project.repository}  target="_blank" rel="noreferrer" className="proj-link">Repository</a>
      </div>
      </div>
      
    </div>
  );
}

export default ProjectDisplay;