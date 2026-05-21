import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background decorations */}
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left: Photo */}
        <div className={styles.photoSide}>
          <div className={styles.photoFrame}>
            {/* <div className={styles.photoRing} aria-hidden="true" /> */}
            <img
              src="/images/kasunmiu.png"
              alt="Kasun Miuranga"
              className={styles.photo}
            />
            <div className={styles.photoBadge}>
              <span>✦</span> Creator
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className={styles.content}>
          {/* <div className={styles.eyebrow}>
            <span className={styles.dot} />
            Available for projects
          </div> */}

          <h1 className={styles.heading}>
            <span className={styles.line1}>Kasun</span>
            <span className={styles.line2}>
              <em>Miu</em>ranga
            </span>
          </h1>

          <p className={styles.tagline}>
            A creator building worlds, systems, and solutions, always looking for problems to solve.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.ctaPrimary}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className={styles.ctaSecondary}>Get in Touch</a>
          </div>

          {/* <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>3+</strong>
              <span>Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>5★</strong>
              <span>Reviews</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>∞</strong>
              <span>Ideas</span>
            </div>
          </div> */}
        </div>
      </div>

      <div className={styles.scrollHint} aria-label="Scroll down">
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
    </section>
  );
}
