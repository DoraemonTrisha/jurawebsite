import React from "react";
import {useParams} from "react-router-dom";
import ServCard from "../ServCards/ServCards";
export default function Service(){
    
    const params = useParams();
    console.log(params, "params");

    return(
        <>
         <div className="container">
                   <div className="element-group-new position-relative">
                       <div className="element-new first position-absolute"></div>
                       <div className="element-new second position-absolute"></div>
                   </div>
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
        </div>
        {params.id == 1 ? (
                <div className="servblock position-relative">
               
                   <div className="container"> 
                       
                       <div className="row my-30">
                           <div className="col-lg-3 col-md-6">
                              <ServCard imgsrc="/images/instrument.png" 
                              desc__title="Design" desc="
                              Phasellus aliquam fermentum tincidunt. Duis accumsan
                          " />
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
                       <div className="row my-30">
                           <div className="col-lg-3 col-md-6">
                              <ServCard imgsrc="/images/smart-phone.png" 
                              desc__title="App Development" desc="
                              Phasellus aliquam fermentum tincidunt. Duis accumsan
                          " />
                           </div>
                           <div className="col-lg-3 col-md-6">
                           <ServCard imgsrc="/images/chart-line-alt.png" 
                              desc__title="Digital Marketing" desc="
                              Phasellus aliquam fermentum tincidunt. Duis accumsan
                          " />
                           </div>
                           <div className="col-lg-3 col-md-6">
                           <ServCard imgsrc="/images/video-clapper.png" 
                              desc__title="Video Production" desc="
                              Phasellus aliquam fermentum tincidunt. Duis accumsan
                          " />
                           </div>
                           <div className="col-lg-3 col-md-6">
                           <ServCard imgsrc="/images/pen-nib.png" 
                              desc__title="Contact Strategy" desc="
                              Phasellus aliquam fermentum tincidunt. Duis accumsan
                          " />
                           </div>
                       </div>
                   </div>    
                </div>
            
            ) : null}
        </>
    )
}