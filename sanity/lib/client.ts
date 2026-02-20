import { createClient } from '@sanity/client';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET ?? 'production';

// Only instantiate the client when a real project ID is present.
// During local dev or CI without Sanity credentials, the client is null
// and safeFetch() returns null gracefully.
const _client =
  projectId && projectId !== 'placeholder'
    ? createClient({
        projectId,
        dataset,
        useCdn: false,
        apiVersion: '2025-02-20',
      })
    : null;

// Re-export for places that need the raw client (e.g. image URL builder)
export const sanityClient = _client;

/**
 * Safe fetch — returns null instead of throwing when Sanity isn't configured.
 */
export async function safeFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  if (!_client) return null;
  try {
    return await _client.fetch<T>(query, params);
  } catch (err) {
    console.warn('[sanity] fetch error:', err);
    return null;
  }
}
