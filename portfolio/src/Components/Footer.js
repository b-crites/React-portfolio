import React from "react";
import '../CSS/Footer.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";





export default function Footer(){
    return (
<div className=" my-5" >

  <footer className="text-center text-lg-start">
    <div className="container d-flex justify-content-center py-5">
        
      <button onClick={() => { window.location.href = "https://www.linkedin.com/in/brandon-crites-542a48212";} } type="button" className="btn btn-lg btn-floating mx-2">
        <i><FaLinkedin /></i>
      </button>
      
     
      <button onClick={() => { window.location.href ="https://github.com/b-crites";}} type="button" className="btn btn-lg btn-floating mx-2">
        <i ><FaGithub /></i>
      </button>
    </div>
  </footer>
  
</div>
    );
}