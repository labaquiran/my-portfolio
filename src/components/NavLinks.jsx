import { NavLink } from "react-router";
import styles from "./NavLinks.module.css";

function NavLinks() {
  return (
    <nav className={styles.headerNav}>
      <div>
        <NavLink to="/" className={styles.home}>
          LA
        </NavLink>
      </div>
      <div className={styles.navLinks}>
        <a href="#about">About</a>

        <a href="#projects">Projects</a>

        <div className={styles.contactContainer}>
          <a
            href="#contact"
            className={({ isActive }) => (
              isActive ? styles.active : "",
              styles.contact
            )}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
