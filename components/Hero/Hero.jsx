import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.noise} />
      <div className={styles.glow} />

      <div className={styles.inner}>
        {/* Left — photo */}
        <div className={styles.photoWrap}>
          <img src="/images/kasunmiu.png" alt="Kasun Miuranga" className={styles.photo} />
        </div>

        {/* Right — text */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span className={styles.line}>Kasun</span>
            <span className={styles.line}>
              <span className={styles.accent}>
                <span className={styles.miu}>Miu</span>ranga
              </span>
            </span>
          </h1>

          <a href="#projects" className={styles.cta}>
            a creator
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.scrollArrow}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}