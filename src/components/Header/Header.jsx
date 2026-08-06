'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // set correct state immediately on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <img src="/logo_dark.svg" alt="Kasun Miu" width={36} height={36} />
          <span className={styles.logoName}>Kasun Miu</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/#contact" className={styles.cta}>Let's Talk</Link>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen((p) => !p)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={styles.drawerLink}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/#contact" className={styles.drawerCta} onClick={() => setOpen(false)}>
          Let's Talk →
        </Link>
      </nav>
    </header>
  );
}