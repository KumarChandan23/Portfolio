import React from 'react';

const projects = [
   
    {
        title: "BMI Calculator",
        description: "A web application to calculate Body Mass Index (BMI) based on user input.",
        link: "https://bmi-calculator-five-ochre.vercel.app/",
        github: "https://github.com/KumarChandan23/BMI-Calculator"
    },
    {
        title: "Theme Changer",
        description: "A web application that allows users to change the theme of the website.",
        link: "https://themechanger-alpha.vercel.app/",
        github: "https://github.com/KumarChandan23/Theme-Changer"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects" style={{padding: "50px "}}>
            <h2>Projects</h2>
            <div className="project-list ">
                {projects.map((project, index) => (
                    <div key={index} className="project-card mt-3">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button className='btn btn-primary me-3'><a href={project.link} target="_blank" className='text-light text-decoration-none '>Live Demo <i className='bi bi-arrow-right-circle-fill'></i></a></button>
                        <button className='btn btn-primary me-3'><a href={project.github} target="_blank" className='text-light text-decoration-none'>GitHub <i className='bi bi-arrow-right-circle-fill'></i></a></button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
