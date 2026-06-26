import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
import { useState } from "react";
import clsx from "clsx";

export default function NavBar() {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  const handleMenuBtn = () => setNavMenuIsOpen((prev) => !prev);

  return (
    <nav className={styles.headerNav}>
      <NavLink to="/" className={styles.home}>
        LA
      </NavLink>

      <div
        className={clsx(styles.hamburgerMenuBtn, {
          [styles.active]: navMenuIsOpen,
        })}
        onClick={handleMenuBtn}
      >
        <span id={styles.top}></span>
        <span id={styles.mid}></span>
        <span id={styles.bot}></span>
      </div>

      {navMenuIsOpen && (
        <ul className={styles.navMenu}>
          <li>
            <a onClick={handleMenuBtn} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={handleMenuBtn} href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a
              href="/public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fileCV}
            >
              My Resume
            </a>
          </li>

          <li className={styles.contactContainer}>
            <a
              onClick={handleMenuBtn}
              href="#contact"
              className={styles.contact}
            >
              Contact
            </a>
          </li>
        </ul>
      )}

      <ul className={styles.navLinks}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a
            href="/public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fileCV}
          >
            My Resume
          </a>
        </li>

        <li className={styles.contactContainer}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
