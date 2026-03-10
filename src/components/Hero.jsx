import { NavLink, Link } from "react-router";
import styles from "./Hero.module.css";

// Assets
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hi, I'm Lorenzo</h1>
      <p>Design ~ Development ~ Animation</p>

      <NavLink to="/contact" className={styles.contactBtn}>
        Get in Touch
      </NavLink>

      <div className={styles.socialLinks}>
        <Link
          to="https://www.instagram.com/la_bqrn/"
          target="_blank"
          className={styles.socialLink}
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            className={styles.socialIcon}
          />
        </Link>

        <Link
          to="https://www.linkedin.com/in/la-baquiran/"
          target="_blank"
          className={styles.socialLink}
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className={styles.socialIcon}
          />
        </Link>

        <Link
          to="https://github.com/labaquiran"
          target="_blank"
          className={styles.socialLink}
        >
          <img src={githubIcon} alt="GitHub" className={styles.socialIcon} />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
