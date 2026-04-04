import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    techStack: z.array(z.string()),
    image: z.string().optional(),
    githubLink: z.string().url().optional(),
    liveLink: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    description: z.string(),
    dateStart: z.date(),
    dateEnd: z.date().optional(),
    type: z.enum(['Full Time', 'Part Time', 'Practicas Profesionalizantes', 'Freelance', 'Otro']),
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    institution: z.string(),
    title: z.string(),
    description: z.string().optional(),
    dateStart: z.date(),
    dateEnd: z.date().optional(),
    type: z.enum(['Secundaria', 'Carrera universitaria', 'Cursos', 'Otro']),
  }),
});

const techStack = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.enum(['frontend', 'backend', 'languages', 'tools']),
    icon: z.string(),
    items: z.array(z.object({
      name: z.string(),
      icon: z.string().optional(),
    })),
  }),
});

export const collections = { projects, experience, education, 'tech-stack': techStack };
