'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BackToTop from '@/components/BackToTop/BackToTop';
import { PROJECTS } from '@/data/projects';
import styles from './projects.module.css';

const FILTER_CATEGORIES = ['All', 'Personal Projects', 'Client Work', 'Charity'];

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on projectType and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const type = project.projectType || 'Personal Projects';
      const matchesCategory =
        selectedCategory === 'All' || type === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Back link */}
          <Link href="/" className={styles.backLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <div className={styles.header}>
            <span className={styles.badge}>Portfolio & Work</span>
            <h1 className={styles.title}>All Projects</h1>
            <p className={styles.subtitle}>
              A showcase of personal projects, client collaborations, and charity work. Each one made with love.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className={styles.controls}>
            <div className={styles.searchBox}>
              <svg
                className={styles.searchIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.filters}>
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ''
                    }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count meta */}
          <div className={styles.resultsMeta}>
            <span>
              Showing <strong>{filteredProjects.length}</strong> of{' '}
              <strong>{PROJECTS.length}</strong> projects
            </span>
            {(selectedCategory !== 'All' || searchQuery !== '') && (
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className={styles.grid}>
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3 className={styles.emptyTitle}>No projects found</h3>
              <p className={styles.emptyText}>
                No projects matched your criteria "{searchQuery || selectedCategory}".
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Search & Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      style={{ animationDelay: `${index * 0.08}s` }}
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
              <path
                d="M7 17L17 7M17 7H7M17 7v10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>
    </a>
  );
}
