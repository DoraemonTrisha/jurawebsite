import React from "react";
import "./AboutStyle.css";
import Progress from "../Progress/Progress";
export default function About(){
    return(
        <>
            <div className="about-block">
                <div className="abt-element-group position-relative">
                    <div className="abt-element-one position-absolute"></div>
                    <div className="abt-element-two position-absolute"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <img className="img-fluid" src="images/about-1.jpg" alt="group_of_peoples" />
                                </div>
                                <div className="col-lg-5 abt-small-img">
                                <img className="img-fluid" src="images/about-2.jpg" alt="group_of_peoples" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="abt-content-area mt-30">
                                <div className="abt-sec-title">
                                    <h4>What We Do</h4>
                                    <h2 class="abt-title-main">Experience <span class="text-gradient-abt">True</span> Business</h2>
                                    <div className="abt-title-text">
                                        <p>
                                             Publication expand still ever records ago, it rationally it that to we've the wasn't the ability range of are way only because then been in was over searched promptness or a of be up from based term the carried.
                                        </p>
                                    </div>
                                </div>
                            
                                <Progress/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}