import { defineCollection } from 'astro:content';
import { z } from 'zod/v4';
import { glob } from 'astro/loaders';

/**
 * Shared vocabulary. Changing these values is a taxonomy decision, not a
 * cosmetic one -- entries are validated against them at build time.
 */
export const OBJECT_CLASSES = ['Coachable', 'Euclid', 'Uninstall'] as const;
export const SIDES = ['CT', 'T', 'either'] as const;
export const STATUSES = ['filed', 'pitch'] as const;
export const ROLES = ['Entry', 'Support', 'Lurker', 'Anchor', 'Sniper', 'Rescue'] as const;

const objectClass = z.enum(OBJECT_CLASSES);
const status = z.enum(STATUSES).default('filed');

/** Fields every record carries, regardless of type. */
const record = z.object({
  title: z.string(),
  summary: z.string(),
  status,
  filed: z.coerce.date(),
  clearance: z.number().int().min(1).max(5).default(2),
});

const specimens = defineCollection({
  loader: glob({ base: './src/content/specimens', pattern: '**/*.md' }),
  schema: record.extend({
    id: z.string().regex(/^SMF-\d{3}$/, 'Specimen ids are SMF-### (e.g. SMF-001)'),
    designation: z.string().optional(),
    objectClass,
    role: z.array(z.enum(ROLES)).default([]),
    side: z.enum(SIDES).default('either'),
    buyPattern: z.array(z.string()).default([]),
    /** Sub-designations for paired specimens, e.g. ['α', 'β']. */
    subDesignations: z.array(z.string()).default([]),
  }),
});

const fixtures = defineCollection({
  loader: glob({ base: './src/content/fixtures', pattern: '**/*.md' }),
  schema: record.extend({
    id: z.string().regex(/^SMF-F-\d{2}$/, 'Fixture ids are SMF-F-## (e.g. SMF-F-01)'),
    location: z.string(),
  }),
});

const incidents = defineCollection({
  loader: glob({ base: './src/content/incidents', pattern: '**/*.md' }),
  schema: record.extend({
    id: z.string().regex(/^INC-\d{3}$/, 'Incident ids are INC-### (e.g. INC-001)'),
    /** Specimen / fixture ids referenced by this incident. Resolved at build time. */
    involves: z.array(z.string()).default([]),
    occurred: z.coerce.date(),
  }),
});

const docs = defineCollection({
  loader: glob({ base: './src/content/docs', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int().default(99),
  }),
});

export const collections = { specimens, fixtures, incidents, docs };
