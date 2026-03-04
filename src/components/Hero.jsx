import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hi, I'm Lorenzo</h1>
      <p>Design ~ Development ~ Animation</p>
      <button className={styles.contactBtn}>Get in Touch</button>
    </section>
  );
}

export default Hero;
