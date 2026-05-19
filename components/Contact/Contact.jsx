import styles from './Contact.module.css';

const SOCIALS = [
  {
    label: 'Email',
    href: 'mailto:hello@kasunmiu.com', // ← update your email
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kasunmiu', // ← update
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@kasunmiu', // ← update
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--color-bg)"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/kasunmiu', // ← update
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/kasunmiu', // ← update
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.container}>
        <span className={styles.label}>Get In Touch</span>
        <h2 className={styles.title}>Let&apos;s Work Together</h2>
        <p className={styles.subtitle}>
          Have a project in mind, want to collaborate, or just want to say hi?
          I&apos;d love to hear from you.
        </p>

        <a href="mailto:hello@kasunmiu.com" className={styles.emailCta}>
          hello@kasunmiu.com
        </a>

        {/* Divider */}
        <div className={styles.divider}>
          <span>or find me on</span>
        </div>

        {/* Socials */}
        <div className={styles.socials}>
          {SOCIALS.filter(s => s.label !== 'Email').map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={social.label}
            >
              {social.icon}
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
