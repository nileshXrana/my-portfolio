import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hey There, I am',
  title: 'Nilesh Rana.',
  tagline:
    'I build modern, user-focused web solutions that turn ideas into innovation.',
  description:
    "I'm a full-stack developer focused on building modern, scalable web applications with Next.js, Nest.js, TypeScript, PostgreSQL, MongoDB, and Docker. From polished user interfaces to reliable backend systems, I focus on writing clean and maintainable code.",
  specialText:
    'Available for Freelance | Internship | Full-Time Opportunities.',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
