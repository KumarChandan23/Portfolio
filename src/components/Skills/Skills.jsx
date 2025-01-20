import React from 'react';

const skills = ["React", "Node.js", "Express", "MongoDB", "Git", "Redux"];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">{skill}</div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
