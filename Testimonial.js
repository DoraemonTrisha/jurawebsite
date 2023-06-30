import React from "react";
//import OwlCarousel from 'react-owl-carousel2';
//import 'react-owl-carousel2/style.css';
import Carousel from "react-elastic-carousel";
import "./Testimonialstyle.css";
export default function Testimonial() {
 

  const breakPoints = [
     { width: 1, itemsToShow: 1 },
     { width: 550, itemsToShow: 2 },
     { width: 990, itemsToShow: 3},
     { width: 1300, itemsToShow: 4 }
  ];

  return (
    <React.Fragment>
      <div className="testimonial-block position-relative overflow-hidden">
        <div className="test-element-group">
          <div className="test-element-one"></div>
          <div className="test-element-two"></div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="test-sec-title">
                <h4>Our Testimonials</h4>
                <h2 className="test-title-main">
                  Best Feedback <span className="text-gradient-new">From</span>
                  <br /> Our Clients.
                </h2>
                <p className="test-description">
                  Start working with Jura that can provide
                  <br /> everything you need.
                </p>
              </div>
            </div>
          </div>
            <div className="row"> 
                <div className="col-lg-12"> 
                    <Carousel breakPoints={breakPoints}>
                        <div className="test__card">
                        <div className="client-testimonial">
                            <div className="client__det">
                            <p>
                                Quisque tempus volutpat laoreet. Vivamus facilisis vehicula
                                lobortis. Fusce eu libero dignissim, sagittis lorem non,
                                molestie enim. Duis urna purus, efficitur viverra pulvinar
                                id, vulputate id quam.
                            </p>
                            <div className="test-rating d-flex  align-items-center">
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            </div>
                            
                            </div>
                            <div className="client__area d-flex">
                                <div className="client__thumb">
                                    <img className="img-fluid" src="/images/test1.png" alt="client" />
                                </div>
                                <div className="client__info">
                                    <h4 className="client-name">Erric Denney</h4>
                                    <p className="client-designation">UI/UX Developer</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="test__card">
                        <div className="client-testimonial">
                            <div className="client__det">
                            <p>
                                Quisque tempus volutpat laoreet. Vivamus facilisis vehicula
                                lobortis. Fusce eu libero dignissim, sagittis lorem non,
                                molestie enim. Duis urna purus, efficitur viverra pulvinar
                                id, vulputate id quam.
                            </p>
                            <div className="test-rating d-flex align-items-center">
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            </div>
                            
                            </div>
                            <div className="client__area d-flex">
                                <div className="client__thumb">
                                    <img className="img-fluid" src="/images/test2.png" alt="client" />
                                </div>
                                <div className="client__info">
                                    <h4 className="client-name">Calvin Quade</h4>
                                    <p className="client-designation">Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="test__card">
                        <div className="client-testimonial">
                            <div className="client__det">
                            <p>
                                Quisque tempus volutpat laoreet. Vivamus facilisis vehicula
                                lobortis. Fusce eu libero dignissim, sagittis lorem non,
                                molestie enim. Duis urna purus, efficitur viverra pulvinar
                                id, vulputate id quam.
                            </p>
                            <div className="test-rating d-flex align-items-center">
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            </div>
                            
                            </div>
                            <div className="client__area d-flex">
                                <div className="client__thumb">
                                    <img className="img-fluid" src="/images/test3.png" alt="client" />
                                </div>
                                <div className="client__info">
                                    <h4 className="client-name">Dixie Gordon</h4>
                                    <p className="client-designation">Quality Assurance</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="test__card">
                        <div className="client-testimonial">
                            <div className="client__det">
                            <p>
                                Quisque tempus volutpat laoreet. Vivamus facilisis vehicula
                                lobortis. Fusce eu libero dignissim, sagittis lorem non,
                                molestie enim. Duis urna purus, efficitur viverra pulvinar
                                id, vulputate id quam.
                            </p>
                            <div className="test-rating d-flex  align-items-center">
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            </div>
                            
                            </div>
                            <div className="client__area d-flex">
                                <div className="client__thumb">
                                    <img className="img-fluid" src="/images/test1.png" alt="client" />
                                </div>
                                <div className="client__info">
                                    <h4 className="client-name">Erric Denney</h4>
                                    <p className="client-designation">UI/UX Developer</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="test__card">
                        <div className="client-testimonial">
                            <div className="client__det">
                            <p>
                                Quisque tempus volutpat laoreet. Vivamus facilisis vehicula
                                lobortis. Fusce eu libero dignissim, sagittis lorem non,
                                molestie enim. Duis urna purus, efficitur viverra pulvinar
                                id, vulputate id quam.
                            </p>
                            <div className="test-rating d-flex align-items-center">
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            </div>
                            
                            </div>
                            <div className="client__area d-flex">
                                <div className="client__thumb">
                                    <img className="img-fluid" src="/images/test2.png" alt="client" />
                                </div>
                                <div className="client__info">
                                    <h4 className="client-name">Calvin Quade</h4>
                                    <p className="client-designation">Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="test__card">
                        <div className="client-testimonial">
                            <div className="client__det">
                            <p>
                                Quisque tempus volutpat laoreet. Vivamus facilisis vehicula
                                lobortis. Fusce eu libero dignissim, sagittis lorem non,
                                molestie enim. Duis urna purus, efficitur viverra pulvinar
                                id, vulputate id quam.
                            </p>
                            <div className="test-rating d-flex  align-items-center">
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            </div>
                            
                            </div>
                            <div className="client__area d-flex">
                                <div className="client__thumb">
                                    <img className="img-fluid" src="/images/test3.png" alt="client" />
                                </div>
                                <div className="client__info">
                                    <h4 className="client-name">Dixie Gordon</h4>
                                    <p className="client-designation">Quality Assurance</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="test__card">
                        <div className="client-testimonial">
                            <div className="client__det">
                            <p>
                                Quisque tempus volutpat laoreet. Vivamus facilisis vehicula
                                lobortis. Fusce eu libero dignissim, sagittis lorem non,
                                molestie enim. Duis urna purus, efficitur viverra pulvinar
                                id, vulputate id quam.
                            </p>
                            <div className="test-rating d-flex align-items-center">
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            </div>
                            
                            </div>
                            <div className="client__area d-flex">
                                <div className="client__thumb">
                                    <img className="img-fluid" src="/images/test2.png" alt="client" />
                                </div>
                                <div className="client__info">
                                    <h4 className="client-name">Calvin Quade</h4>
                                    <p className="client-designation">Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="test__card">
                        <div className="client-testimonial">
                            <div className="client__det">
                            <p>
                                Quisque tempus volutpat laoreet. Vivamus facilisis vehicula
                                lobortis. Fusce eu libero dignissim, sagittis lorem non,
                                molestie enim. Duis urna purus, efficitur viverra pulvinar
                                id, vulputate id quam.
                            </p>
                            <div className="test-rating d-flex align-items-center">
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            <img className="img-fluid test-image" src="/images/star.png" alt="star"/>
                            </div>
                            
                            </div>
                            <div className="client__area d-flex">
                                <div className="client__thumb">
                                    <img className="img-fluid" src="/images/test2.png" alt="client" />
                                </div>
                                <div className="client__info">
                                    <h4 className="client-name">Calvin Quade</h4>
                                    <p className="client-designation">Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Carousel>
                </div>    
            </div>    
        </div>
      </div>

      
    </React.Fragment>
  );
}
