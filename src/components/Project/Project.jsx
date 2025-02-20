import React from "react";
import styles from "./Project.module.css"; // Import the CSS module

const projects = [
  {
    image:
      "https://res.cloudinary.com/dv53eip2t/image/upload/v1738397180/Screenshot_2025-02-01_133525_y4nqbx.png",
    title: "Electronic Product",
    description: "An e-commerce platform for purchasing electronic products.",
    link: "https://transcendent-capybara-7a8b38.netlify.app/",
    github: "https://github.com/KumarChandan23/fakestore",
  },
  {
    image:
      "https://res.cloudinary.com/dv53eip2t/image/upload/v1737887540/Screenshot_2025-01-26_160008_dzj2pc.png",
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index (BMI) with this simple tool.",
    link: "https://bmi-calculator-five-ochre.vercel.app/",
    github: "https://github.com/KumarChandan23/BMI-Calculator",
  },
  {
    image:
      "https://res.cloudinary.com/dv53eip2t/image/upload/v1738503273/Screenshot_2025-02-02_190402_pqfoty.png",
    title: "Weather App",
    description: "Real-time weather forecasting app with a clean UI.",
    link: "https://rainbow-elf-cdf085.netlify.app/",
    github: "https://github.com/KumarChandan23/Weather-app",
  },
  {
    image:
      "https://res.cloudinary.com/dv53eip2t/image/upload/v1737888512/Screenshot_2025-01-26_161809_rosb2w.png",
    title: "Theme Changer",
    description: "Switch between light and dark themes dynamically.",
    link: "https://themechanger-alpha.vercel.app/",
    github: "https://github.com/KumarChandan23/Theme-Changer",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.buttonGroup}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.previewButton} >
                  Preview <i className="bi bi-eye-fill"></i>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubButton} >
                  GitHub <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
