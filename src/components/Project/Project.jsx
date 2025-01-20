import React from 'react';

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce website with cart and payment features.",
        link: "#",
        github: "#"
    },
    {
        title: "Task Manager App",
        description: "A task management application with drag-and-drop functionality.",
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
