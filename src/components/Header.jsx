import NavBar from "./NavBar";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
}

export default Header;
