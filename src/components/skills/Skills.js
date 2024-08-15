import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./skills.css";

const skills = [
    { name: 'HTML5', icon: faHtml5, level: '90%' },
    { name: 'CSS', icon: faCss3Alt, level: '80%' },
    { name: 'JavaScript', icon: faJs, level: '70%' },
    { name: 'React', icon: faReact, level: '70%' },
    { name: 'Git', icon: faGitAlt, level: '90%' },
    { name: 'GitHub', icon: faGithub, level: '90%' },
];

const Skills = () => {
    return (
        <div className="skills-section">
            <section id="skills">
                <h2 className="skills-title">Skills</h2>
                <div id="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <FontAwesomeIcon icon={skill.icon} title={skill.name} className="skill-icon" />
                            <div className="tooltip">
                                <span className="tooltiptext">{skill.name}</span>
                                <div className="proficiency-bar">
                                    <div className="proficiency-level" style={{ width: skill.level }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
