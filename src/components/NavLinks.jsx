import { NavLink } from "react-router";
import styles from "./NavLinks.module.css";

function NavLinks() {
  return (
    <nav className={styles.navLinks}>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/services">Services</NavLink>
    </nav>
  );
}

export default NavLinks;
