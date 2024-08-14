import React from "react";
import "./aboutme.css";

// about me component containing introduction / bio , maybe some passions
const AboutMe = () => {
    return (
        <div className="header">
            <div className="header-image">
            </div>
            <div className="about-section">
                <h1 className="title">Hi, I'm Sebastian.</h1>
                <div className="about-me">
                    <p className="about">I'm a software engineer that enjoys solving complex problems and bringing innovative products to life.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;