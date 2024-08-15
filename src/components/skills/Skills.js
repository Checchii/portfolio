import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
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
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (index) => {
        setSelectedSkill(selectedSkill === index ? null : index);
    };

    return (
        <div className="skills-section">
            <section id="skills">
                <h2>Skills</h2>
                <div id="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill" onClick={() => handleSkillClick(index)}>
                            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                            <div className="proficiency-circle">
                                <motion.span 
                                    className="proficiency-text"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {skill.level}
                                </motion.span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
