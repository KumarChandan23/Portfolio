import React from 'react';
import './About.css';

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    Hi, I'm CHANDAN KUMAR, a passionate <strong>MERN Stack Developer</strong> with a Bachelor's degree in BAC from Ram Lakhan Singh Yadav College Ranchi.  
                    I specialize in creating seamless and responsive web applications using <strong>React, Node.js, Express, and MongoDB</strong>.
                </p>
                <p>
                    Over the past few months, I've worked on diverse projects ranging from e-commerce platforms to dynamic product management systems.  
                    I thrive in collaborative environments and enjoy solving challenging problems through clean, maintainable code.
                </p>
                <p>
                    Beyond coding, I stay updated with the latest tech trends and continuously enhance my skills by building personal projects.  
                    My goal is to contribute to innovative teams and build user-centric applications that make a difference.
                </p>
                <div className="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>React, Redux</li>
                        <li>Node.js, Express.js</li>
                        <li>MongoDB, Mongoose</li>
                        <li>JavaScript (ES6+)</li>
                        <li>REST API Development</li>
                        <li>Responsive Web Design (CSS3, TailwindCSS)</li>
                        <li>Git, GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

