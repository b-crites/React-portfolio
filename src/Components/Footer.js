import React from "react";
import "../CSS/Footer.css";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import {FaMedium } from "react-icons/fa6"

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start mt-2 position-static bottom-0">
        <div className="container d-flex justify-content-center py-5">
          <button
          aria-label="LinkedIn"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/brandon-crites-542a48212/"
              );
            }}
            type="button"
            className="btn btn-lg btn-floating icoBtn mx-2"
          >
            <i>
              <FaLinkedin />
            </i>
          </button>

          <button
          aria-label="Github"
            onClick={() => {
              window.open("https://github.com/b-crites");
            }}
            type="button"
            className="btn btn-lg btn-floating icoBtn mx-2"
          >
            <i>
              <FaGithub />
            </i>
          </button>
          <button
          aria-label="Medium"
            onClick={() => {
              window.open("https://medium.com/@brandoncrites76");
            }}
            type="button"
            className="btn btn-lg btn-floating icoBtn mx-2"
          >
            <i>
              <FaMedium />
            </i>
          </button>
        </div>
      </footer>
    </>
  );
}
