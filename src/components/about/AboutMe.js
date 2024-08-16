import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import photo from "./me.jpg";

import "./aboutme.css";

const AboutMe = () => {
    return (
    <div className="header">
    <div className="about-image-container">
        <div className="about-container">
            <h1 className="title">Hi, I'm Sebastian.</h1>
            <div className="about-me">
                <p className="about">I'm a software engineer that enjoys solving complex problems and bringing innovative products to life.</p>
            </div>
            <div className="contact-social-container">
                <a href="mailto:sebastian.checchi@gmail.com?subject=Hello%20from%20Your%20Portfolio&body=Hi%20Sebastian,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch.%0D%0A%0D%0ABest%20regards,">
                    <button type="submit" className="contact-me">
                        <FontAwesomeIcon icon={faArrowRight} /> Get in touch
                    </button>
                </a>
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
        <div className="header-image">
            <span className="image-container">
                <img src={photo} alt="Profile" className="image" />
            </span>
        </div>
    </div>
</div>

    );
};

export default AboutMe;
