import styles from "./About.module.css";
import selfImg from "../assets/self-img.png";

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <p>
          Hello! I'm a passionate web developer with experience in building
          dynamic and responsive websites. I enjoy working with modern
          technologies and continuously learning new skills to enhance my craft.
        </p>
        <img src={selfImg} alt="Self" className={styles.selfImg} />
      </div>
    </section>
  );
}

export default About;
