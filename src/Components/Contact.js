import React, {useState} from "react";
import "../CSS/Contact.css";
import {motion} from 'framer-motion'
import axios from "axios";


export default function Contact() {


  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.post("https://formspree.io/f/maygzqyq", formData);
      alert("Form submitted successfully!!")
    }catch (err){
      console.err("Error submitting form: ", err);
      alert("There seems to be a problem submitting the form. Try again later.")
    }
  };

  const handleChange = (e) => {
    const {name,value}= e.target;
    setFormData({...formData, [name]: value});
  }
  return (
    <>
    <div id="contact">
    <motion.div
    initial={{scale:0, opacity:0, x:'-30%'}}
    whileInView={{scale:1, opacity:1,x:0, transition:{duration:1.5}}}
    viewport={{once:true}}
    className="center projectUnderline py-5"><h1>Connect with me!</h1></motion.div>
    <div className="center">
      
      <motion.div
       initial={{ scale:0 ,opacity: 0 }}
       whileInView={{ scale:1,opacity: 1, transition:{duration: 1}}}
       viewport={{once:true}}
       transition={{
         type: "spring",
         stiffness: 260,
         damping: 20,
       
       }} className="formBg p-3 m-5 rounded">
        <div className="row m-3">
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Name"
              aria-label="Name"
            />
          </div>
          <div className="col-md-6">
            <input
            onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="form-group mt-3">
            <textarea
            onChange={handleChange}
              className="form-control"
              rows="5"
              name="message"
              id="message"
              placeholder="Message"
            />
          </div>
          <div>
            <button className="btn mt-3 submitBtn float-end">Send</button>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
    </>
  );
}
