import styles from "./ProjectsStyles.module.css";
import ToDoList from "../../assets/ToDoList.png";
import WeatherWeb from "../../assets/Weather.jpeg";
import EmployeeManagement from "../../assets/EmployeeManagement.png";

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className={styles.projectCard}>
      <img src={src} alt={h3} className={styles.projectImage} />
      <div className={styles.overlay}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Major Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ToDoList}
          link="https://manthanchaudhary2.github.io/react_To_Do/"
          h3="ToDo List"
          p="ToDo App"
        />
        <ProjectCard
          src={WeatherWeb}
          link="https://manthanchaudhary2.github.io/WeatherWeb/"
          h3="Weather Forecast"
          p="Display weather forecast"
        />
        <ProjectCard
          src={EmployeeManagement}
          link="https://manthanchaudhary2.github.io/EmployeeManagement/"
          h3="Employee Management"
          p="Manage employee records"
        />
      </div>
      <h1 className="sectionTitle">Minour Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ToDoList}
          link="https://manthanchaudhary2.github.io/react_To_Do/"
          h3="ToDo List"
          p="ToDo App"
        />
        <ProjectCard
          src={WeatherWeb}
          link="https://manthanchaudhary2.github.io/WeatherWeb/"
          h3="Weather Forecast"
          p="Display weather forecast"
        />
        <ProjectCard
          src={EmployeeManagement}
          link="https://manthanchaudhary2.github.io/EmployeeManagement/"
          h3="Employee Management"
          p="Manage employee records"
        />
      </div>
    </section>
  );
}

export default Projects;
