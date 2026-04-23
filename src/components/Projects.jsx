import Card from "./Card";
import { Link } from "react-router";
import styles from "./Projects.module.css";

function Projects() {
  const projects = [];

  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectList}>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://embed.figma.com/design/vbVMrcP1yfojz12CrSSQta/Google-Search-Mock?node-id=11-2&embed-host=share"
          allowfullscreen
        ></iframe>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://embed.figma.com/design/qPyMIJJ3cJyorieSLmCalk/Apple-Mock?node-id=8-2&embed-host=share"
          allowfullscreen
        ></iframe>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://embed.figma.com/design/dJnr24zAX3zBcS4P1GQUpE/Portfolio?node-id=1-2&embed-host=share"
          allowfullscreen
        ></iframe>
        {projects.length > 0 &&
          projects.map((project) => (
            <Card key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <Link to={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </Link>
            </Card>
          ))}
      </div>
    </section>
  );
}

export default Projects;
