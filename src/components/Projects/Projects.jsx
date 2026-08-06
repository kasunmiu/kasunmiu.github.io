import Link from 'next/link';
import styles from './Projects.module.css';
import { PROJECTS } from '@/data/projects';

export default function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>Creator of</h2>
          <p className={styles.subtitle}>
            Personal projects, each a different world.
          </p>
        </div>

        <div className={styles.grid}>
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          {/* See All Projects Card (Grid card for mobile / small screens) */}
          <Link href="/projects" className={styles.seeAllCard}>
            <div className={styles.seeAllCardInner}>
              <div className={styles.seeAllIconBadge}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.seeAllCardTitle}>See All Projects</h3>
            </div>
          </Link>
        </div>

        {/* See All Projects Button (Below grid for desktop screens) */}
        <div className={styles.seeAllWrapper}>
          <Link href="/projects" className={styles.seeAllBtn}>
            <span>See All Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className={styles.cardImage}>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.arrow}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
