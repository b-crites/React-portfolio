import React from "react";
import Project from "./Project";
import {motion} from 'framer-motion'
import "../CSS/Project.css";


function Portfolio() {
  // const projectData = [
  //   {
  //     img: require("../img/Bookclub.png"),
  //     title: "Book Finder",
  //     deployLink: "https://b-crites.github.io/BookClub/",
  //     gitLink: "https://github.com/b-crites/BookClub",
  //     description:"THis is a test"
  //   },
  //   {
  //     img: require("../img/Workday.png"),
  //     title: "WorkDay Scheduler",
  //     deployLink: "https://b-crites.github.io/Project5/",
  //     gitLink: "https://github.com/b-crites/Project5",
  //   },
  // ];

  const clientData = [

    {
      img: require("../img/vps2ss.png"),
      title: "VPS Psychiatry",
      deployLink: "https://www.vps-psychiatry.com"
    },
    {
      img: require("../img/MelanieWebsite.png"),
      title: "Dr. Kawashima Velez",
      deployLink: "https://brandoncrites76.wixsite.com/my-site-1"
    }
  ]

  return (
    
    
    <div id="portfolio" className="portfolio">

      {/* <motion.h1

initial={{opacity:0, x:'-30%'}}
whileInView={{opacity:1, x:0, transition:{duration:2}}}
viewport={{once:true}}
      
      className=" center projectUnderline pb-5">Projects</motion.h1>
      <div
      
      className="flex-row">
        {projectData.map((project, index) => (
          <Project
          
            key={index}
            img={project.img}
            title={project.title}
            deployLink={project.deployLink}
            description={project.description}
          />
        ))}
      </div> */}

      <div>
<motion.h1 
className="center projectUnderline  pb-5"
initial={{opacity:0, x:'-30%'}}
whileInView={{opacity:1, x:0, transition:{duration:2}}}
viewport={{once:true}}
>Client Work</motion.h1>

<div
      
      className="flex-row">
        {clientData.map((project, index) => (
          <Project
          
            key={index}
            img={project.img}
            title={project.title}
            deployLink={project.deployLink}
            description={project.description}
          />
        ))}
      </div>

      </div>
    </div>
    
    
  );
}

export default Portfolio;
