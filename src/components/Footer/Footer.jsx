import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopyright,
  faHeart,
  faBriefcase,
  faHandshake,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const COLUMNS = [
  {
    title: 'Sitemap',
    links: [
      { label: 'Projects', href: '#projects', icon: faBriefcase },
      { label: 'Reviews', href: '#reviews', icon: faHandshake },
      { label: 'Contact', href: '#contact', icon: faEnvelope },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'Email', href: 'mailto:kasunmiu@gmail.com', icon: faEnvelope },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kasun-miuranga/', icon: faLinkedin },
      { label: 'YouTube', href: 'https://www.youtube.com/@KasunMiu', icon: faYoutube },
      { label: 'Instagram', href: 'https://www.instagram.com/kasun.miu', icon: faInstagram },
      { label: 'Facebook', href: 'https://web.facebook.com/kasunmiuranga.themiu', icon: faFacebook },
      { label: 'WhatsApp', href: 'https://wa.me/94764958373', icon: faWhatsapp },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <img src="/logo.svg" alt="Kasun Miu" width={36} height={36} />
              <span className={styles.logoName}>Kasun Miu</span>
            </div>
            <p className={styles.tagline}>
              A creator building worlds, systems, and solutions, always looking for problems to solve.
            </p>
            <div className={styles.brandBadge}>
              <FontAwesomeIcon icon={faLocationDot} style={{ width: 11, height: 11 }} />
              Sri Lanka
            </div>
          </div>

          {/* Columns */}
          <div className={styles.cols}>
            {COLUMNS.map((col) => (
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

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            <FontAwesomeIcon icon={faCopyright} style={{ width: 12, height: 12 }} /> {year} Kasun Miuranga. All rights reserved.
          </p>
          <span className={styles.badge}>
            Made with <FontAwesomeIcon icon={faHeart} className={styles.heart} style={{ width: 13, height: 13 }} />
          </span>
        </div>
      </div>
    </footer>
  );
}