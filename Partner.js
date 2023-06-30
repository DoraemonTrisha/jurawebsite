import React from "react";
import Slider from "react-slick";
import "./PartnerStyle.css";

export default function Partner() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div className="partner-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="part-sec-title">
                <h4>Our Clients</h4>
                <h2 className="part-title-main">
                  Supportive{" "}
                  <span className="text-gradient-new"> Partners </span>
                </h2>
                <p className="part-description">
                  Start working with Jura that can provide
                  <br /> everything you need.
                </p>
              </div>
            </div>
          </div>
          <div className="row my-4 py-4">
            <div className="col-lg-12">
              <Slider {...settings}>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-1.png" alt="brand__logo" />
                </div>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-2.png" alt="brand__logo" />
                </div>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-3.png" alt="brand__logo" />
                </div>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-4.png" alt="brand__logo" />
                </div>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-5.png" alt="brand__logo" />
                </div>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-6.png" alt="brand__logo" />
                </div>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-3.png" alt="brand__logo" />
                </div>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-2.png" alt="brand__logo" />
                </div>
                <div className="brand-logo">
                  <img className="img-fluid" src="/images/partner-5.png" alt="brand__logo" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
