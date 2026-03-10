import styles from "./About.module.css";
import selfImg from "../assets/self-img.jpg";

function About() {
  return (
    <section id="about" className={styles.about}>
      <img src={selfImg} alt="Self" className={styles.selfImg} />
      <p>
        Hello! I'm a passionate web developer with experience in building
        dynamic and responsive websites. I enjoy working with modern
        technologies and continuously learning new skills to enhance my craft.
      </p>
    </section>
  );
}

export default About;
