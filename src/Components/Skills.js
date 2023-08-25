import { motion } from "framer-motion";
import React from "react";
import "../CSS/Skills.css";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { BiLogoJavascript, BiLogoCss3, BiLogoHtml5, BiLogoTailwindCss } from "react-icons/bi";
import {TbBrandBulma} from "react-icons/tb"

export default function Skills() {
  return (
    <>
      <div className="center mb-5 flex-row">
        <motion.div
          initial={{ opacity: 0, x: "-30%" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          viewport={{ once: true }}
          className="text-white  skillsBox"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
              viewport={{ once: true }}
              className="center py-3"
            >
              Skills
            </motion.h1>
            <div className="fs-3">
              <ul className="">
                <motion.li
                  initial={{ opacity: 0, x: "-30%" }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.7 },
                  }}
                  viewport={{ once: true }}
                >
                  React <FaReact />
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: "-30%" }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.9 },
                  }}
                  viewport={{ once: true }}
                >
                  Javascript <BiLogoJavascript />
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: "-30%" }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2.3 },
                  }}
                  viewport={{ once: true }}
                >
                  CSS <BiLogoCss3 />{" "}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: "-30%" }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2.6 },
                  }}
                  viewport={{ once: true }}
                >
                  HTML5 <BiLogoHtml5 />
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: "-30%" }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2.8 },
                  }}
                  viewport={{ once: true }}
                >
                  Bootstrap <FaBootstrap />
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: "-30%" }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 3 },
                  }}
                  viewport={{ once: true }}
                >
                  Tailwind <BiLogoTailwindCss />
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: "-30%" }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 3 },
                  }}
                  viewport={{ once: true }}
                >
                  Bulma <TbBrandBulma/>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
