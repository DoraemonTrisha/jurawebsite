import React, {useState} from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./CountStyle.css";
export default function Counter(){
    
    const [counterOn, setCounterOn] = useState(false);
    return(
        <>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                   
            <div className="counter-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4 number__block">
                            
                            <h3 className="count__Num fw-bold">{counterOn && <CountUp start={0} 
                            end={10} duration={2} delay={0} />}K+</h3>
                            <span className="grad__count">Completed Projects</span>
                        </div>
                        <div className="col-lg-4 col-md-4 number__block">
                            <h3 className="count__Num fw-bold">
                                {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}%
                            </h3>
                            <span className="grad__count">Happy Clients</span>
                        </div>
                        <div className="col-lg-4 col-md-4 number__block">
                            <h3 className="count__Num fw-bold">
                                {counterOn && <CountUp start={0} end={20} duration={2} delay={0}/>}+
                            </h3>
                            <span className="grad__count">Awards Won</span>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>      
        </>
    )
}