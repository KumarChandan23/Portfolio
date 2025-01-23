import React from 'react';

const skills = ["React", "Node.js", "Express", "MongoDB", "Git", "Redux"];

const Skills = () => {
    return (
        <section id="skills" className="p-lg-3 p-3 d-lg-flex justify-content-around">
            <div className=''>
            {/* <h2>Skills</h2> */}
            <h2>Frontend Development</h2>
            <ul>
                <li> HTML5, CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js (including hooks, context API)</li>
                <li>Redux or other state management libraries</li>
                <li>Responsive design (Bootstrap, Material-UI, Tailwind CSS)</li>
                <li>Styled-components / CSS-in-JS</li>
            </ul>
            <h2>Backend Development</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST API development</li>
                <li>Authentication (JWT, OAuth)</li>
            </ul>
            <h2>Database Management</h2>
            <ul>
                <li>MongoDB (CRUD operations, aggregation pipelines)</li>
                <li>Mongoose (ODM)</li>
            </ul>
            </div>
            <div className=''>

           
            <h2>Soft Skills</h2>
            <ul>
                <li>Problem-solving</li>
                <li>Communication skills</li>
                <li>Time management</li>
                <li>Team collaboration</li>
                <li>Adaptability and learning agility</li>
            </ul>
            <h2>Tools & Workflow</h2>
            <ul>
                <li>Git/GitHub</li>
                <li>NPM/Yarn</li>
                <li>Webpack, Babel</li>
                <li>Postman</li>
                <li>Deployment (Heroku, Netlify, Vercel)</li>
            </ul>
            </div>


        </section>
    );
};

export default Skills;
