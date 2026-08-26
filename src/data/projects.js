export const PROJECTS = [
  {
    id: 8,
    title: 'FeatherFly',
    category: 'Services',
    projectType: 'Personal Projects',
    status: 'Inactive',
    description: 'Older artworks and creative projects (currently inactive).',
    href: 'https://www.youtube.com/@miucraft7559',
    image: '/images/miucraft.png',
    date: '2025-02-01',
    featured: false,
  },
  {
    id: 7,
    title: 'Miu Craft',
    category: 'Art',
    projectType: 'Personal Projects',
    status: 'Inactive',
    description: 'Older artworks and creative projects (currently inactive).',
    href: 'https://www.youtube.com/@miucraft7559',
    image: '/images/miucraft.png',
    date: '2024-11-15',
    featured: false,
  },
  {
    id: 6,
    title: 'Graphic Miu',
    category: 'Services',
    projectType: 'Personal Projects',
    status: 'Inactive',
    description: 'Freelancer client design portfolio (currently inactive).',
    href: 'https://www.freelancer.com/u/graphicmiu',
    image: '/images/graphicmiu.png',
    date: '2024-08-01',
    featured: false,
  },
  {
    id: 5,
    title: 'Yoo Game Art',
    category: 'Services',
    projectType: 'Personal Projects',
    status: 'Working',
    description: 'Game art resources and assets for game developers (under construction).',
    href: 'https://yoogameart.github.io/',
    image: '/images/yoogameart.png',
    date: '2024-04-10',
    featured: false,
  },
  {
    id: 4,
    title: 'Miu Plays',
    category: 'Gaming',
    projectType: 'Personal Projects',
    status: 'Live',
    description: 'Gameplay reviews and support for indie developers.',
    href: 'https://miuplays.github.io',
    image: '/images/miuplays.png',
    date: '2024-01-15',
    featured: false,
  },
  {
    id: 3,
    title: 'Godot සිංහල',
    category: 'Educational',
    projectType: 'Personal Projects',
    status: 'Live',
    description: 'Sinhala medium tutorials and learning content for Godot developers.',
    href: 'https://godotsinhala.github.io/',
    image: '/images/godotsensei.png',
    date: '2023-09-01',
    featured: true,
  },
  {
    id: 2,
    title: 'Godot Sensei',
    category: 'Educational',
    projectType: 'Personal Projects',
    status: 'Live',
    description: 'Tutorials and learning content for Godot developers of all skill levels.',
    href: 'https://godotsensei.github.io/',
    image: '/images/godotsensei.png',
    date: '2023-04-15',
    featured: true,
  },
  {
    id: 1,
    title: 'Miusoft',
    category: 'Game Dev',
    projectType: 'Personal Projects',
    status: 'Live',
    description: 'This is where I publish my game projects, indie experiences built with passion.',
    href: 'https://miusoftgames.github.io/',
    image: '/images/miusoft.png',
    date: '2022-10-01',
    featured: true,
  },
];

/**
 * Helper to sort projects for display:
 * 1. Featured projects first (ordered by small ID first: id 1, id 2...)
 * 2. Followed by latest/non-featured projects (ordered newest to oldest by date)
 */
export function getSortedProjects(projects = PROJECTS) {
  return [...projects].sort((a, b) => {
    // 1. Featured projects come first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // 2. Both featured: sort by ID ascending (small id first: id 1, id 2...)
    if (a.featured && b.featured) {
      return (a.id || 0) - (b.id || 0);
    }

    // 3. Both non-featured: sort by date descending (newest first)
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    if (timeB !== timeA) return timeB - timeA;

    // Fallback to id descending for non-featured
    return (b.id || 0) - (a.id || 0);
  });
}
