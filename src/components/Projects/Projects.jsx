import Link from 'next/link';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Miusoft',
    category: 'Game Dev',
    description: 'This is where I publish my game projects, indie experiences built with passion.',
    href: 'https://miusoftgames.github.io/',
    image: '/images/miusoft.png',
    number: '01',
  },
  {
    id: 2,
    title: 'Godot Sensei',
    category: 'Educational',
    description: 'Tutorials and learning content for Godot developers of all skill levels.',
    href: 'https://godotsensei.github.io/',
    image: '/images/godotsensei.png',
    number: '02',
  },
  {
    id: 3,
    title: 'Godot සිංහල',
    category: 'Educational',
    description: 'Sinhala medium tutorials and learning content for Godot developers.',
    href: 'https://godotsinhala.github.io/',
    image: '/images/godotsensei.png',
    number: '03',
  },
  {
    id: 4,
    title: 'Miu Plays',
    category: 'Gaming',
    description: 'Gameplay reviews and support for indie developers.',
    href: 'https://miuplays.github.io',
    image: '/images/miuplays.png',
    number: '04',
  },
  {
    id: 5,
    title: 'Yoo Game Art',
    category: 'Services',
    description: 'Game art resources and assets for game developers (under construction).',
    href: 'https://yoogameart.github.io/',
    image: '/images/yoogameart.png',
    number: '05',
  },
  {
    id: 6,
    title: 'Graphic Miu',
    category: 'Services',
    description: 'Freelancer client design portfolio (currently inactive).',
    href: 'https://www.freelancer.com/u/graphicmiu',
    image: '/images/graphicmiu.png',
    number: '06',
  },
  {
    id: 7,
    title: 'Miu Craft',
    category: 'Art',
    description: 'Older artworks and creative projects (currently inactive).',
    href: 'https://www.youtube.com/@miucraft7559',
    image: '/images/miucraft.png',
    number: '07',
  },
];

export default function Projects() {
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
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/*  <div className={styles.footer}>
          <p className={styles.footerNote}>More projects coming soon</p>
        </div> */}
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
            <span>{project.number}</span>
          </div>
        )}
        <div className={styles.imageOverlay} />
        <span className={styles.category}>{project.category}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <span className={styles.number}>{project.number}</span>
          <span className={styles.arrow}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>
    </a>
  );
}
