import styles from "./About.module.css";
import selfImg from "../assets/self-img.png";

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <img src={selfImg} alt="Self" className={styles.selfImg} />
        <p>
          Hi! My name's Lorenzo. I'm a software engineer and aspiring animator
          from Iloilo, Philippines. Despite my very technical background, I
          still am a creative perosn. I enjoy making objects move through
          animation and building projects on the web with modern technologies.
          <br />
          <br />I have worked with dynamic and responsive websites throughout
          different companies. This portfolio here is in its early stages and
          showcases my recent projects (some are work in progress) and ideas
          that might change anytime. I hope to connect with fellow developers
          and animators to create something great.
          <br />
          <br />
          The Projects section also features some of my works from the Animation
          Basics course that I took from Animation Mentor in 2025. I dream to
          make feature film animations myself in the future.
        </p>
      </div>
    </section>
  );
}

export default About;
