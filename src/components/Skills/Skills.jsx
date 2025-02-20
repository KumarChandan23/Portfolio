import React from "react";
import styles from "./Skills.module.css"; // Import the CSS module

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsSection}>
            <h1 className={styles.heading}>Skills</h1>
            <div className={styles.container}>
                {/* Frontend Skills */}
                <div className={styles.skillCategory}>
                    <h4 className={styles.subHeading}>
                        <i className="bi bi-code-slash"></i> Frontend Development
                    </h4>
                    <ul className={styles.skillList}>
                        <li>HTML5, CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React.js (including hooks, context API)</li>
                        <li>Redux or other state management libraries</li>
                        <li>Responsive design (Bootstrap, Material-UI, Tailwind CSS)</li>
                        <li>Styled-components / CSS-in-JS</li>
                    </ul>
                </div>

                {/* Soft Skills */}
                <div className={styles.skillCategory}>
                    <h3 className={styles.subHeading}>
                        <i className="bi bi-people"></i> Soft Skills
                    </h3>
                    <ul className={styles.skillList}>
                        <li>Problem-solving</li>
                        <li>Communication skills</li>
                        <li>Time management</li>
                        <li>Adaptability and learning agility</li>
                    </ul>
                </div>

                {/* Tools & Workflow */}
                <div className={styles.skillCategory}>
                    <h3 className={styles.subHeading}>
                        <i className="bi bi-tools"></i> Tools & Workflow
                    </h3>
                    <ul className={styles.skillList}>
                        <li>Git/GitHub</li>
                        <li>NPM/Yarn</li>
                        <li>Webpack, Babel</li>
                        <li>Postman</li>
                        <li>Deployment (Heroku, Netlify, Vercel)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
