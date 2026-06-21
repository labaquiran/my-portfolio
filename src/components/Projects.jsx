import Card from "./Card";
import { Link } from "react-router";
import { useState } from "react";
import styles from "./Projects.module.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("Design");
  const projects = [];

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.categories}>
        <a
          href=""
          className={activeCategory === "Design" ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveCategory("Design");
          }}
        >
          Design
        </a>
        <a
          href=""
          className={activeCategory === "Development" ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveCategory("Development");
          }}
        >
          Development
        </a>
        <a
          href=""
          className={activeCategory === "Animation" ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveCategory("Animation");
          }}
        >
          Animation
        </a>
      </div>
      {/* {activeCategory === "Design" && (
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
        </div>
      )} */}
      {activeCategory === "Development" && (
        <div className={styles.projectList}>
          <p>
            Development projects will be displayed here. Please check back
            later.
          </p>
        </div>
      )}
      {activeCategory === "Animation" && (
        <div className={styles.projectList}>
          <p>
            Animation projects will be displayed here. Please check back later.
          </p>
        </div>
      )}
    </section>
  );
}

export default Projects;
