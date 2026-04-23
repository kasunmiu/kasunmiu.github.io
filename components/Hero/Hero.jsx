import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>
        Kasun<span className={styles.accent}> Miuranga</span>
      </h1>
      <p className={styles.tagline}>
        Coming soon...
      </p>
    </section>
  );
}