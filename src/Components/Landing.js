import {useEffect, useRef, useState} from "react";
import Typed from 'typed.js';
import "bootstrap/dist/css/bootstrap.css";
import '../CSS/Landing.css'




export default function Landing(){

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Brandon Crites', 'Web Developer', 'Digital Marketer'],
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

    const [isVisible, setIsVisible] = useState(false);

  // useEffect to simulate the delay
  useEffect(() => {
    // Delay for 2000 milliseconds (2 seconds)
    const delayTime = 8000;

    // Use setTimeout to toggle the visibility after the delay
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, delayTime);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []); // E
    




    return(
        <div className="gridCenter text-white vh-100 bg-black">
            <div className="typeContainer position-absolute">
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

            <div>
            <svg class="arrows fadeIn" style={{ display: isVisible ? 'block' : 'none'}}>
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
            </div>
        

        </div>
    )
}