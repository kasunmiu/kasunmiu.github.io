import Link from 'next/link';
import styles from './Projects.module.css';

// ── Replace these with your real projects ──────────────────────────────────
const PROJECTS = [
    {
        id: 1,
        title: 'Miusoft',
        category: 'Game Development',
        description: 'A short description of what this project is about — what problem it solves or what experience it creates.',
        tags: ['Unity', 'C#', 'Multiplayer'],
        href: '/projects/miusoft',
        // image: '/images/alpha.jpg',   ← drop your screenshot here
    },
    {
        id: 2,
        title: 'Godot Sensei',
        category: 'Educational',
        description: 'A short description of what this project is about — what problem it solves or what experience it creates.',
        tags: ['Next.js', 'Node.js', 'API'],
        href: '/projects/godotsensei',
    },
    {
        id: 3,
        title: 'Yoo Game Art',
        category: 'Services',
        description: 'A short description of what this project is about — what problem it solves or what experience it creates.',
        tags: ['Unity', 'iOS', 'Android'],
        href: '/projects/yoogameart',
    },
];
// ─────────────────────────────────────────────────────────────────────────

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                {/* Section header */}
                <div className={styles.header}>
                    <span className={styles.label}>Projects</span>
                    <h2 className={styles.title}>Creator Of,</h2>
                    <p className={styles.subtitle}>
                        Some of my favorite personal projects done so far. 
                    </p>
                </div>

                {/* Cards */}
                <div className={styles.grid}>
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* See more CTA */}
                <div className={styles.footer}>
                    <Link href="/projects" className={styles.seeMore}>
                        See all projects
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    return (
        <Link
            href={project.href}
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Visual placeholder / image */}
            <div className={styles.cardImage}>
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderNumber}>0{index + 1}</span>
                    </div>
                )}
                <span className={styles.cardCategory}>{project.category}</span>
            </div>

            {/* Content */}
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

              {/*   <div className={styles.cardTags}>
                    {project.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div> */}

                <span className={styles.cardArrow}>
                    View project →
                </span>
            </div>
        </Link>
    );
}