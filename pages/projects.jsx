import styles from "./../styles/Projects.module.css";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  return (
    <main className={styles.container}>


      <section className={styles.hero}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          This page is still under construction. More projects will be added soon.
        </p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>🎮 Playable Games</h2>

        <p className={styles.cardText}>
          In the meantime, check out some of my playable game builds.
        </p>

        <a
          href="https://miusoftgames.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          View Games
        </a>

        <button
          className={styles.backButton}
          onClick={() => router.back()}
        >
          ← Go Back
        </button>
      </section>
    </main>
  );
}