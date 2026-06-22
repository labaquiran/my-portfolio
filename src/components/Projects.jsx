import Card from "./Card";
import { Link } from "react-router";
import { useState } from "react";
import styles from "./Projects.module.css";
import DevProjectsList from "./DevProjectsList";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("Development");

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.categories}>
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
      {activeCategory === "Development" && <DevProjectsList />}
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
