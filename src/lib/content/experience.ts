import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "Where I've Worked",
  experiences: [
    {
      company: 'Zenmonk',
      companyUrl: 'https://www.zenmonk.tech/',
      role: 'full stack developer intern',
      started: 'June 2026',
      upto: 'present',
      tasks: [
        'TechStack: Next.js, TypeScript, Material UI.'
      ],
    },
    {
      company: 'Gharpayy',
      companyUrl: 'https://www.gharpayy.com/',
      role: 'full stack developer intern',
      started: 'Nov 2025',
      upto: 'May 2026',
      tasks: [
        'Enhancing a dashboard with RBAC authentication, lead ingestion, and multi-stage pipelines.',
        'Reducing lead handling turnaround by 35% across daily operations.',
        'Fixing bugs, handling updates, and continuously enhancing the platform based on user needs and feedback.',
        'TechStack: Next.js, Node.js, TypeScript, MongoDB.'
      ],
    },
  ],
};
