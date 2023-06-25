import React from "react";
import "../CSS/Project.css";

function Project(props) {
  return (
    <div className="card m-4" style={{ width: "20rem" }}>
      <img
        src={props.img}
        className="card-img-top"
        width="300px"
        alt="Projects Screenshot"
      />
      <div className="card-body icon">
        <h3 className="card-title">{props.title}</h3>
        <div className="container-md row">
          <a
            href={props.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link link-secondary link-underline-opacity-0"
          >
            Deploy
          </a>

          <a
            href={props.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-secondary link-underline-opacity-0"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
