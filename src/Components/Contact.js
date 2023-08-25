import React from "react";
import "../CSS/Contact.css";
import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <div className="vh-100 center">
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
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              placeholder="Message"
            />
          </div>
          <div>
            <button className="btn mt-3 submitBtn float-end">Send</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
