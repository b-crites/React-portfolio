import {useEffect, useRef} from "react";
import Typed from 'typed.js';

import '../CSS/Landing.css'




export default function Landing(){

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Brandon Crites.', 'Frontend Developer.'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 1000,
        loop:true,

      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return(
        <div className="gridCenter text-white vh-100 bg-black">
            <div className="typeContainer">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>

                {/* <h1 className="typed landingFont">Brandon Crites.</h1> */}

                <span className="landingFont typed-cursor mb-6" ref={el} />
                {/* <div className="landingBtn">
                    <button className=" btn bg-light">Contact</button>
                </div> */}
            </div>
        

        </div>
    )
}