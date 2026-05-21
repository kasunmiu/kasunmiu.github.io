import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faYoutube,
  faInstagram,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Contact.module.css';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kasun-miuranga', icon: faLinkedin },
  { label: 'YouTube', href: 'https://youtube.com/@KasunMiu', icon: faYoutube },
  { label: 'Instagram', href: 'https://instagram.com/kasun.miu', icon: faInstagram },
  { label: 'Facebook', href: 'https://facebook.com/kasunmiuranga.themiu', icon: faFacebook },
  { label: 'WhatsApp', href: 'https://wa.me/94764958373', icon: faWhatsapp },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.blob} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardAccent} />

          <div className={styles.left}>
            <span className={styles.label}>Get In Touch</span>
            <h2 className={styles.title}>Let's Work<br />Together</h2>
            <p className={styles.subtitle}>
              Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.
            </p>

            <a href="mailto:kasunmiu@gmail.com" className={styles.emailCta}>
              <FontAwesomeIcon icon={faEnvelope} />
              kasunmiu@gmail.com
              <FontAwesomeIcon icon={faArrowRight} className={styles.emailArrow} />
            </a>
          </div>

          <div className={styles.right}>
            <p className={styles.socialsLabel}>Or find me on</p>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={s.label}
                >
                  <FontAwesomeIcon icon={s.icon} className={styles.socialIcon} />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
