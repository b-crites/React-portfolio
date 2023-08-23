import React from "react";
import Project from "./Project";
import {motion} from 'framer-motion'
import "../CSS/Project.css";


function Portfolio() {
  const projectData = [
    {
      img: require("../img/Bookclub.png"),
      title: "Book Finder",
      deployLink: "https://b-crites.github.io/BookClub/",
      gitLink: "https://github.com/b-crites/BookClub",
      description:"THis is a test"
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
    },
  ];

  return (
    
    <div className="">

      <motion.h1

initial={{opacity:0, x:'-30%'}}
whileInView={{opacity:1, x:0, transition:{duration:2}}}
viewport={{once:true}}
      
      className="fs-1 center projectUnderline">Projects</motion.h1>
      <div
      
      className="flex-row">
        {projectData.map((project, index) => (
          <Project
          
            key={index}
            img={project.img}
            title={project.title}
            deployLink={project.deployLink}
            gitLink={project.gitLink}
            description={project.description}
          />
        ))}
      </div>
    </div>
    
    
  );
}

export default Portfolio;
