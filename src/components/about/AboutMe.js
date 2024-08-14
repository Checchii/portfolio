import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import "./aboutme.css";

const ProfilePicture = () => {
    return (
        <img src="../images/me.jpg" alt="Profile" />
    );
}

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
                <div className="contact-social-container">
                    <button type="submit" className="contact-me">
                        <FontAwesomeIcon icon={faArrowRight} /> Get in touch
                    </button>
                    <div className="social">
                        <span className="linked-in">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
