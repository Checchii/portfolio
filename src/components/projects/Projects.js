import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


// list of projects
const projects = [
    {
        title: 'Dungeons of Aria',
        description: `"Dungeons of Aria" is a fantasy RPG where players explore dungeons, solve puzzles, and engage in strategic combat.`,
        link: "https://gx.games/games/9cvjkm/dungeons-of-aria/tracks/d83ec71e-52bc-4ebb-adbc-53ca6dc23ddb",
        github: "https://github.com/Checchii/DungeonsOfAria"
    },
    {
        title: "House Pricing Prediction Model",
        image: '',
        description: "Developed a machine learning model to predict house prices using linear and polynomial regression.",
        tools: ["- Pandas", "- NumPy", "- Matplotlib", "- Seaborn", "- Scikit-learn"],
        github: "https://github.com/Checchii/ML-House-Prediction-Model"
    },
    {
        title: "Any City Weather App",
        image: './any-city-weather-app.png',
        description: "Contributed to the development of a weather application by leveraging my Python skills through Flask.",
        github: "https://github.com/Checchii/mercyweatherapp",
    },
];


const Projects = () => {
    return (
        <div className="projects-section">
            <section id="projects">
            <h2>Projects</h2>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        {project.tools && (
                            <div>
                                <h4>Tools and Libraries:</h4>
                                <ul>
                                    {project.tools.map((tool, i) => (
                                        <li key={i}><strong>{tool}</strong></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="button">
                                Play Now
                            </a>
                        )}
                        {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button github-button"
                        >
                            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "8px" }} />
                            View Repository
                        </a>
                    )}
                    </div>
                ))}
            </Carousel>
        </section>
        </div>
    );
};

export default Projects;