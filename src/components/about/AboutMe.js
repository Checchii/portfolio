import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./aboutme.css";

// not sure why my photo isn't loading so i made a new component
const ProfilePicture = () => {
    return (
        <img src="../images/me.jpg" alt=""></img>
    )
}

// about me component containing introduction / bio , maybe some passions
const AboutMe = () => {
    return (
        <div className="header">
            <div className="header-image">
                <ProfilePicture />
            </div>
            <div className="about-container">
                <h1 className="title">Hi, I'm Sebastian.</h1>
                <div className="about-me">
                    <p className="about">I'm a software engineer that enjoys solving complex problems and bringing innovative products to life.</p>
                </div>
            </div>
            <div className="contact">
                <button type="submit" className="contact-me">Get in touch</button>
            </div>
            <div className="socials">
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size="lg" />
            </div>
        </div>
    );
};

export default AboutMe;