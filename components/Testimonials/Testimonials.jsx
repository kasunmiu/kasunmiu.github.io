import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      `I am delighted to have come across Kasun who has assisted in building a game with me.
He is a multi-talented all-rounder. He is able to build as well as create graphics.

He is both technical and creative. His coding skills are very good and he delivers high standards.
Kasun is responsive, polite and a pleasure to work with.`,
    role: "Content Designer / Digital Specialist",
    name:"Lisa Mac",
    profile: "/images/clients/LisaMac.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Reviews</span>
          <h2 className={styles.title}>What People Say</h2>
        </div>

        <div className={styles.single}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>
                {t.quote}
              </p>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  <img src={t.profile} alt={t.name} />
                </div>
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