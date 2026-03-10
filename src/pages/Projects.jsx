import Card from "../components/Card";
import { Link } from "react-router";
import styles from "./Projects.module.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "Description of project 1",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of project 2",
      link: "https://example.com/project2",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description of project 3",
      link: "https://example.com/project3",
    },
  ];

  return (
    <section className={styles.projects}>
      {projects.length > 0 ? (
        projects.map((project) => (
          <Card key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </Link>
          </Card>
        ))
      ) : (
        <p>No projects to display.</p>
      )}
    </section>
  );
}

export default Projects;
