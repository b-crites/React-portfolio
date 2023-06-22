import React from "react";
import Project from "../Components/Project";

function Portfolio() {
  const projectData = [
    {
      img: require("../img/Bookclub.png"),
      title: "Book Finder",
      deployLink: "https://b-crites.github.io/BookClub/",
      gitLink: "https://github.com/b-crites/BookClub",
    },
    {
      img: require("../img/QuizImg.png"),
      title: "Quiz App",
      deployLink: "https://b-crites.github.io/Project4/",
      gitLink: "https://github.com/b-crites/Project4",
    },
    {
        img: require("../img/Workday.png"),
        title: "WorkDay Scheduler",
        deployLink: "https://b-crites.github.io/Project5/",
        gitLink: "https://github.com/b-crites/Project5",
    }
  ];

  return (
    <div className="m-4">
      <div className="d-flex center flex-wrap">
        {projectData.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            deployLink={project.deployLink}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;