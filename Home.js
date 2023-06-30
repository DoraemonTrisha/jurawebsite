import React from "react";
import {Link} from "react-router-dom";
import Banner from "../Banner/Banner";
import ServCard from "../ServCards/ServCards";
import About from "../About/About";
import Counter from "../Counter/Counter";
import Project from "../Project/Project";
import Testimonial from "../Testimonial/Testimonial";
import Partner from "../Partners/Partner";
import "./Homestyle.css";

//import Contact from "../Contact/Contact";
export default function Home(){
    return(
        <>
         <Banner/>
            <div className="servblock position-relative">
                <div className="container">
                    <div className="element-group-new">
                        <div className="element-new first position-absolute"></div>
                        <div className="element-new second position-absolute"></div>
                    </div>
                    <div className="container"> 
                        <div className="row justify-content-center">
                            <div className="col-lg-10">  
                                <div className="serv-section-title">
                                    <h4>Our Services</h4>
                                    <h2 className="serv-title-main">Creative <span className="text-gradient-new">Design</span> Solutions.
                                    </h2>
                                    <p className="serv-description">Start working with Jura that can provide<br/> everything you need.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row my-30">
                            <div className="col-lg-3 col-md-6">
                            <ServCard imgsrc="/images/instrument.png" 
                            desc__title="Design" desc="
                            Phasellus aliquam fermentum tincidunt. Duis accumsan
                        "  />
                            
                            </div>
                            <div className="col-lg-3 col-md-6">
                            <ServCard imgsrc="/images/space-shuttle.png" 
                            desc__title="Branding" desc="
                            Phasellus aliquam fermentum tincidunt. Duis accumsan
                        " />
                            </div>
                            <div className="col-lg-3 col-md-6">
                            <ServCard imgsrc="/images/pen-holder.png" 
                            desc__title="UI/UX" desc="
                            Phasellus aliquam fermentum tincidunt. Duis accumsan
                        " />
                            </div>
                            <div className="col-lg-3 col-md-6">
                            <ServCard imgsrc="/images/pen-holder.png" 
                            desc__title="Logo" desc="
                            Phasellus aliquam fermentum tincidunt. Duis accumsan
                        " />
                            </div>
                        </div>
                        <div className ="row d-flex justify-content-center align-items-center">
                            <button className="viewBtn">
                                <Link to={`/seeCard/1`}>View More</Link>
                            </button>
                        </div>
                    
                    </div>    
                </div>
            </div>
            <About/>
            <Counter/>
            <Project/>
            <Testimonial/>
            <Partner/>
        </>
    )
}