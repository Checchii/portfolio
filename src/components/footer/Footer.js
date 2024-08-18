import React from "react";
import Navigation from "../nav/Navigation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-container">
                <span className="logo">
                    <Navigation />
                </span>
                <span>
                    <p className="copyright">© All rights reserved.</p>
                </span>
                <div className="footer-socials">
                    <span className="footer-social-button ">
                        <Link to="https://linkedin.com/in/sebastian-checchi/" target="_blank" className="icons">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </Link>
                    </span>
                    <span className="footer-social-button github">
                        <Link to="https://github.com/Checchii" target="_blank" className="icons">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Link>
                    </span>
                    <span className="footer-social-button instagram">
                        <Link to="https://www.instagram.com/checchii__" target="_blank" className="icons">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
