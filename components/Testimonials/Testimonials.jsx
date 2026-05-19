import styles from './Testimonials.module.css';

// ── Replace with your real testimonials ──────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Kasun has a rare ability to see both the creative and technical sides of a project. The game he built for us exceeded every expectation.",
    name: "Alex Rivera",
    role: "Indie Studio Lead",
    initials: "AR",
  },
  {
    id: 2,
    quote: "Working with Kasun was seamless. He communicates clearly, delivers fast, and the quality of his work is consistently high.",
    name: "Priya Nair",
    role: "Product Manager, TechCo",
    initials: "PN",
  },
  {
    id: 3,
    quote: "Kasun built our entire web platform from scratch. It's fast, beautiful, and our users love it. Highly recommend.",
    name: "Sam Chen",
    role: "Founder, CreativeLab",
    initials: "SC",
  },
];
// ─────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Kind Words</span>
          <h2 className={styles.title}>What People Say</h2>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={styles.card}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
