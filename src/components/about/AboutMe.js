import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
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
                            <Link to="https://linkedin.com/in/sebastian-checchi/" target="_blank" className="icons">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                            </Link>
                        </span>
                        <span className="github">
                            <Link to="https://github.com/Checchii" target="_blank" className="icons">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                            </Link>
                        </span>
                        <span className="instagram">
                            <Link to="https://www.instagram.com/checchii__" target="_blank" className="icons">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
