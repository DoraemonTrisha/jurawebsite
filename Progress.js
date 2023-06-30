import React from "react";
import "./ProgressStyle.css";
export default function Progress(){
    return(
        <>
        <div className="skill-block">
            <div className="skill position-relative">
                <h3 className="skill-title">Design</h3>
                <div className="progress position-relative">
                    <div className="progress-bar" style={{width:"60%"}}>
                        <span>60%</span>
                    </div>
                </div>
            </div>
            <div className="skill position-relative">
                <h3 className="skill-title">Development</h3>
                <div className="progress position-relative">
                    <div className="progress-bar" style={{width:"90%"}}>
                        <span>90%</span>
                    </div>
                </div>
            </div>
            <div className="skill position-relative">
                <h3 className="skill-title">Marketing</h3>
                <div className="progress position-relative">
                    <div className="progress-bar" style={{width:"20%"}}>
                        <span>20%</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}