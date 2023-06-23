import React from "react";
import '../CSS/About.css'
import ProfilePic from '../img/ProfilePic.jpg'



export default function About(){
 
   return(
<div className="img-container">
    <article className="d-flex">
     <div className="center">
      <img className="rounded-circle img-fluid img-thumbnail m-4 spin" src={ProfilePic} alt="Myself" />
       </div>
        <div className="m-5">
         <div className="articleBg p-4 rounded">
          <h1>Hey There!</h1>
          <p className="fs-3">Welcome to my portfolio website! Take a look around and explore some of my projects I have created!</p>
          <p className="fs-3">I am a Frontend Developer whose work ethic and eagerness to learn makes me ready to take on any project that comes my way!</p>
          <p className="fs-3">To get in touch with me you can either head to the Contact section and send me a message or take a look at my LinkedIn and message me there!</p>
         </div>
        </div>
    </article>
    
</div>
);

};