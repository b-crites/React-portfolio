import React from "react";
import "../CSS/About.css";
import { motion } from "framer-motion";
import ProfilePic from "../img/NewHeader.jpg";

export default function About() {
  return (
    <div id="about" className="mb-5">
      <div className=" mb-5 ">
        <article className="d-flex">
          <div className="center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 2.5 },
              }}
              viewport={{ once: true }}
              className="hide rounded-circle img-fluid img-thumbnail m-4 spin"
              src={ProfilePic}
              alt="Picture of myself"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="m-5 mediaBox w-100 "
          >
            <div className="articleBg p-4  rounded">
              <p className="fs-3">
                Welcome to my digital realm! I'm Brandon Crites, a dedicated tech nerd fueled by a passion for coding and marketing. This portfolio is a curated space offering a
                glimpse into my journey—an ever-evolving exploration of
                experiences, projects, and a genuine love for learning.
                <br />
                <br />
                In the dynamic world of technology, I thrive on challenges and
                embrace the opportunity to dive into new projects. My approach
                is rooted in curiosity and adaptability, recognizing that growth
                often stems from embracing the unexpected. Here, you won't find
                a quest for perfection; instead, it's a celebration of progress
                and the joy I find in the process.
                <br />
                <br />
                Feel free to wander through my professional endeavors. This
                space is a testament to my belief that the most valuable lessons
                are learned through hands-on experiences and an unwavering
                enthusiasm to learn and grow.
                <br />
                <br />
                I invite you to join me on this journey of discovery, where each
                project is a chapter, and every challenge is an opportunity to
                learn.
                <br />
                Excited to have you here, Brandon Crites
              </p>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
}
