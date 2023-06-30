import React from "react";
import "./BannerStyle.css";
export default function Banner(){
    return(
        <>
         <div className="container-fluid">
             <div className="banner position-relative">
                <div className="element-group position-relative">
                    <div className="element one position-absolute"></div>
                    <div className="element two position-absolute"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="banner-left-content">
                                <h2 className="hero-title-one">Creative</h2>
                                <h2 className="hero-title">Agency <span className="colorText">
                                 Jura   </span></h2>
                                 <div className="hero-desc">
                                     <p>We are an agency that could help you with creative and digital.</p>
                                 </div>
                                 <div className="bannerBtn">
                                 <a className="bannBtn rounded-pill" href="#">
                                    Our Services
                                    </a>
                                 </div>
                            </div>

                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-6">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-6">
                                    <div className="row"> 
                                        <div className="col-lg-12 col-md-12">
                                            <img className="img-fluid" src="images/hero-banner-2.jpg" alt="group-of-peoples" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-6">
                                <img className="img-fluid" src="images/hero-banner-3.jpg" alt="man-drinking-coffee" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
        </>
    )
}