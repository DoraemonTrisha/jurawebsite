import React from "react";

//import { Link } from "react-router-dom";
import "./ServiceStyle.css";
export default function ServCard(props) {
   
  return (
    <>
      <div className="service-item-box position-relative">
        <div className="serv-icon">
          <img src={props.imgsrc} alt="mypic" className="img-fluid card__img" />
        </div>
        <div className="serv-body">
          <h3 className="card__title">{props.desc__title}</h3>
          <p className="card__desc">{props.desc}</p>
        </div>
        <div className="serv-footer">
          <button className="card__button">
            Read More 
          </button>
        </div>
      </div>
     
    </>
  );
}
