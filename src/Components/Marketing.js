import React from "react";
import {motion} from "framer-motion"
import MountainWicksLogo from "../img/moutainWicksLogo.png"


export default function Marketing(){

    const clientPhoto = [
        {
            img: require("../img/moutainWicksLogo.png")
        }
    ]


    return(
        <>
        <motion.h1 
className="center projectUnderline pb-5"
initial={{opacity:0, x:'-30%'}}
whileInView={{opacity:1, x:0, transition:{duration:2}}}
viewport={{once:true}}
>Digital Marketing</motion.h1>    
        <div className="">
        <div className="center">
            <motion.div
            initial={{opacity:0, x:'-50px'}}
            whileInView={{opacity:1,x:0, transition:{duration:2}}}
            viewport={{once:true}}
            className="">
                <a href="https://www.mountainwicks.com/"target="_blank"
            rel="noopener noreferrer">
                <img className="w-25" src={MountainWicksLogo} alt="Mountain Wicks Logo" />
                </a>
            </motion.div>
        </div>
        </div>
        </>
    );
}