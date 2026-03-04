import NavLinks from "./NavLinks";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavLinks />
    </header>
  );
}

export default Header;
