import React from "react";
import "../CSS/Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start mt-2 position-static bottom-0">
        <div className="container d-flex justify-content-center py-5">
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/brandon-crites-542a48212"
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
        </div>
      </footer>
    </>
  );
}
