import Card from "./Card";
import { Link } from "react-router";
import styles from "./Projects.module.css";

function Projects() {
  const projects = [];

  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectList}>
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
          <p>Please stay tuned. I am currently working on new projects!</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
