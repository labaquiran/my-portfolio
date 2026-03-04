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
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ""}>Projects</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : ""}>Services</NavLink>
      </div>
    </nav>
  );
}

export default NavLinks;
