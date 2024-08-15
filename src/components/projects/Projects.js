import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projects.css";


// list of projects
const projects = [
    {
        title: 'Dungeons of Aria',
        video: "./dungeonsofaria.mp4",
        description: `"Dungeons of Aria" is a fantasy RPG where players explore dungeons, solve puzzles, and engage in strategic combat.`,
        link: "https://gx.games/games/9cvjkm/dungeons-of-aria/tracks/d83ec71e-52bc-4ebb-adbc-53ca6dc23ddb"
    },
    {
        title: "House Pricing Prediction Model",
        description: "Developed a machine learning model to predict house prices using linear and polynomial regression.",
        tools: ["- Pandas", "- NumPy", "- Matplotlib", "- Seaborn", "- Scikit-learn"]
    },
    {
        title: "Any City Weather App",
        description: "Contributed to the development of a weather application by leveraging my Python skills through Flask."
    },
    {
        title: "Case Closed",
        description: "Developed a crime-solving game in Unity inspired by Sherlock Holmes."
    }

]


const Projects = () => {
    return (
        <div className="projects-section">
            <section id="projects">
            <h2>Projects</h2>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        {project.video && (
                            <video width="640" height="360" controls autoPlay>
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
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
                    </div>
                ))}
            </Carousel>
        </section>
        </div>
    );
};

export default Projects;