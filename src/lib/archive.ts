import { getCollection, type CollectionEntry } from 'astro:content';

export type Specimen = CollectionEntry<'specimens'>;
export type Fixture = CollectionEntry<'fixtures'>;
export type Incident = CollectionEntry<'incidents'>;

/**
 * Prefix internal hrefs with the configured base path. Directory routes get a
 * trailing slash so Pages serves them without a 301; file paths do not.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  if (clean === '') return `${base}/`;
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  return `${base}/${clean}${isFile ? '' : '/'}`;
}

const bySerial = (a: { data: { id: string } }, b: { data: { id: string } }) =>
  a.data.id.localeCompare(b.data.id, 'en', { numeric: true });

export const listSpecimens = async () => (await getCollection('specimens')).sort(bySerial);
export const listFixtures = async () => (await getCollection('fixtures')).sort(bySerial);
export const listIncidents = async () => (await getCollection('incidents')).sort(bySerial);

/**
 * Resolve an incident's `involves` ids to real records. A dangling reference
 * throws, which fails the build -- cross-links cannot silently rot.
 */
export async function resolveReferences(ids: string[]) {
  const [specimens, fixtures] = await Promise.all([listSpecimens(), listFixtures()]);
  const index = new Map<string, { id: string; title: string; href: string }>();
  for (const s of specimens) {
    index.set(s.data.id, { id: s.data.id, title: s.data.title, href: url(`archive/${s.id}`) });
  }
  for (const f of fixtures) {
    index.set(f.data.id, { id: f.data.id, title: f.data.title, href: url(`fixtures/${f.id}`) });
  }
  return ids.map((id) => {
    const hit = index.get(id);
    if (!hit) throw new Error(`Unknown record referenced in an incident: "${id}"`);
    return hit;
  });
}
