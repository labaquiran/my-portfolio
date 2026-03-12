import { NavLink } from "react-router";
import styles from "./NavLinks.module.css";

function NavLinks() {
  return (
    <nav className={styles.navLinks}>
      <div>
        <NavLink to="/" className={styles.home}>
          LA
        </NavLink>
      </div>
      <div className={styles.pages}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Projects
        </NavLink>

        <div className={styles.contactContainer}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (
              isActive ? styles.active : "",
              styles.contact
            )}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
