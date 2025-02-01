import React from 'react';

const projects = [
    {
        image: "https://res.cloudinary.com/dv53eip2t/image/upload/v1738397180/Screenshot_2025-02-01_133525_y4nqbx.png",
        title: "Electronic Product",
        description: "A Electronic web application that allows users to purches products.",
        link: "https://themechanger-alpha.vercel.app/",
        github: "https://github.com/KumarChandan23/Theme-Changer"
    },

    {
        image: "https://res.cloudinary.com/dv53eip2t/image/upload/v1737887540/Screenshot_2025-01-26_160008_dzj2pc.png",
        title: "BMI Calculator",
        description: "A web application to calculate Body Mass Index (BMI) based on user input.",
        link: "https://bmi-calculator-five-ochre.vercel.app/",
        github: "https://github.com/KumarChandan23/BMI-Calculator"
    },
    {
        image: "https://res.cloudinary.com/dv53eip2t/image/upload/v1737888512/Screenshot_2025-01-26_161809_rosb2w.png",
        title: "Theme Changer",
        description: "A web application that allows users to change the theme of the website.",
        link: "https://themechanger-alpha.vercel.app/",
        github: "https://github.com/KumarChandan23/Theme-Changer"
    },
   

];

const Projects = () => {
    return (
        <section id="projects" className="projects" style={{ padding: " 0 50px " }}>
            <div className="project-list d-flex flex-wrap justify-content-between">
                {projects.map((project, index) => (
                    <div key={index} className="project-card mt-3 card mx-2 border border-5 border-white" style={{ width: "18rem", height: "auto" }}>
                        <div className="card-header p-0" style={{ height: "250px" }}>
                            <img src={project.image} className="card-img-top h-100" alt={project.title}  />
                        </div>
                        <div className="card-body pt-0">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button className='btn btn-primary me-2  border border-sm-danger boder-5'><a href={project.link} target="_blank" className='text-light text-decoration-none '>Preview <i className='bi bi-arrow-right-circle-fill'></i></a></button>
                            <button className='btn btn-primary  m-sm-0'><a href={project.github} target="_blank" className='text-light text-decoration-none'>GitHub <i className='bi bi-arrow-right-circle-fill'></i></a></button>
                        </div>
                       
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
