import styles from './Footer.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHeart, faUser, faBriefcase, faEnvelope, faHandsBound, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// ─── Edit footer columns here ──────────────────
const columns = [
  {
    title: 'Sitemap',
    links: [
      { label: 'About',   href: '#about',    icon: faUser },
      { label: 'Work',    href: '#work',     icon: faBriefcase },
      { label: 'Contact', href: '#contact',  icon: faHandshake },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'Email',    href: 'mailto:kasunmiu@gmail.com',              icon: faEnvelope },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/kasun-miuranga', icon: faLinkedin },
      { label: 'X',        href: 'https://x.com/KasunMiu',                 icon: faXTwitter },
      { label: 'YouTube',  href: 'https://www.youtube.com/@KasunMiu',      icon: faYoutube },
    ],
  },
];
// ───────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Top: brand + link columns */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <Image
                src="/logo.svg"
                alt="Kasun Miu"
                width={36}
                height={36}
                priority
              />
              <span className={styles.logoName}>
                Kasun Miu
              </span>
            </div>

            <p className={styles.tagline}>
              A creator building worlds, systems, and solutions, always looking for problems to solve.
            </p>
          </div>

          <div className={styles.cols}>
            {columns.map((col) => (
              <div key={col.title} className={styles.col}>
                <span className={styles.colTitle}>{col.title}</span>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={styles.colLink}
                  >
                    <FontAwesomeIcon icon={link.icon} className={styles.linkIcon} />
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom: copyright + badge */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            <span className={styles.accentDot}><FontAwesomeIcon icon={faCopyright} /></span> {year} Kasun Miuranga.
            All rights reserved.
          </p>
          <span className={styles.badge}>Made with <FontAwesomeIcon icon={faHeart} /></span>
        </div>

      </div>
    </footer>
  );
}