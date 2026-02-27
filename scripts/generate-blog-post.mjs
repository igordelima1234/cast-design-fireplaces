/**
 * Auto Blog Post Generator — Cast Design Fireplaces
 *
 * Uses the Claude API to write an SEO-optimized blog post about cast stone
 * fireplaces and publishes it as a DRAFT in Sanity for human review.
 *
 * Usage:
 *   node scripts/generate-blog-post.mjs               # random topic
 *   node scripts/generate-blog-post.mjs "your topic"  # custom topic
 *
 * Required env vars:
 *   ANTHROPIC_API_KEY   — Claude API key
 *   SANITY_PROJECT_ID   — Sanity project ID
 *   SANITY_WRITE_TOKEN  — Sanity token with Editor permissions
 *   SANITY_DATASET      — (optional, defaults to "production")
 */

import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@sanity/client';
import { randomBytes, randomUUID } from 'node:crypto';

// ── Validate env ──────────────────────────────────────────────────────────────
const { ANTHROPIC_API_KEY, SANITY_PROJECT_ID, SANITY_WRITE_TOKEN } = process.env;
const SANITY_DATASET = process.env.SANITY_DATASET ?? 'production';

if (!ANTHROPIC_API_KEY) { console.error('Missing ANTHROPIC_API_KEY'); process.exit(1); }
if (!SANITY_PROJECT_ID) { console.error('Missing SANITY_PROJECT_ID'); process.exit(1); }
if (!SANITY_WRITE_TOKEN) { console.error('Missing SANITY_WRITE_TOKEN'); process.exit(1); }

// ── Clients ───────────────────────────────────────────────────────────────────
const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

const sanity = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: false,
  apiVersion: '2025-02-20',
  token: SANITY_WRITE_TOKEN,
});

// ── Topic bank (55 topics = ~1 year of weekly posts) ─────────────────────────
const TOPICS = [
  // Cast Stone & Materials
  'Cast stone vs. natural stone fireplaces: pros, cons, and DFW suitability',
  'How cast stone fireplace mantels are crafted: the process behind the product',
  '5 reasons DFW homeowners prefer cast stone over prefab fireplace surrounds',
  'Limestone vs. travertine vs. cast stone: which fireplace material is best for Texas homes?',
  'Cast stone fireplace finishes explained: honed, tumbled, and antiqued',
  'The durability of cast stone in Texas heat and humidity',

  // Design & Trends
  'Fireplace mantel design trends for Dallas–Fort Worth luxury homes in 2025',
  'Modern minimalist cast stone fireplaces for contemporary DFW homes',
  'French country fireplace design ideas using cast stone',
  'Mediterranean-inspired cast stone fireplaces for Texas homes',
  'Traditional vs. contemporary fireplace mantel styles for DFW homes',
  'How to create a stunning focal point with a cast stone fireplace',
  'Mixing materials: pairing cast stone with shiplap, tile, and brick',
  'Fireplace design for open floor plans in DFW homes',
  'Two-story great room fireplace design for DFW estate homes',

  // Choosing & Sizing
  'How to choose the right fireplace mantel size for your Dallas home',
  'How high should a fireplace mantel be? Height guidelines for Texas homes',
  'Cast stone fireplace colors: matching your mantel to your DFW interior',
  'Fireplace surround vs. mantel vs. hearth: understanding the difference',
  'Questions to ask before commissioning a custom fireplace mantel in DFW',

  // Room-Specific
  'Living room fireplace design: making your cast stone mantel the centerpiece',
  'Primary bedroom fireplace ideas for Dallas luxury homes',
  'Cast stone range hoods: elevating your DFW kitchen elegance',
  'Double-sided fireplace design ideas for open-concept DFW homes',
  'Home office fireplace design: adding warmth and character to your workspace',

  // Outdoor Living
  'Outdoor fireplace design for DFW patios and entertaining spaces',
  'Mediterranean-style outdoor fireplaces for DFW backyards',
  'Complete outdoor kitchen guide: integrating cast stone fireplaces for DFW entertaining',
  'All-season outdoor fireplace design for North Texas weather',
  'Pool and patio fireplace design ideas for Dallas luxury homes',

  // Installation & Process
  'Raised vs. flush fireplace hearths: which is right for your Texas home?',
  'Gas vs. wood-burning fireplace: what DFW homeowners should consider',
  'Adding a fireplace to a room that does not have one: options for Dallas homeowners',
  'How long does it take to install a cast stone fireplace in your Dallas home?',
  'The custom cast stone fireplace design process: from concept to installation',
  'Electric vs. gas vs. wood fireplace inserts: a DFW homeowner guide',

  // Maintenance & Care
  'How to clean and maintain your cast stone fireplace surround',
  'Seasonal fireplace maintenance checklist for DFW homeowners',
  'Protecting your cast stone fireplace from Texas weather',
  'When to reseal your cast stone fireplace: signs and how-to guide',
  'Getting your DFW fireplace ready for fall: a complete prep guide',

  // Home Value & Investment
  'How a cast stone fireplace increases your DFW home resale value',
  'Return on investment: upgrading to a cast stone fireplace in Dallas',
  'Why luxury homebuilders in Southlake and Plano choose cast stone fireplaces',

  // DFW Spotlight
  'The most popular fireplace styles in Dallas homes right now',
  'Cast stone fireplaces in Southlake: design inspiration for luxury homes',
  'Plano homeowners guide to choosing the perfect fireplace surround',
  'Frisco home design trends: why cast stone fireplaces are leading the way',
  'McKinney historic home renovation: restoring fireplaces with cast stone',
  'Fort Worth rustic-modern homes and the cast stone fireplace renaissance',

  // Corbels, Columns & Accessories
  'Cast stone corbels and columns: adding architectural character to your DFW home',
  'How to use cast stone corbels as interior design accents',
  'Architectural stone columns for DFW homes: when and how to use them',

  // Seasonal & Lifestyle
  'Holiday fireplace decorating ideas for your Dallas cast stone mantel',
  'Summer outdoor fireplace entertaining guide for DFW homeowners',
  'Cozy fireplace styling ideas for North Texas winters',
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function randomKey() {
  return randomBytes(4).toString('hex');
}

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96);
}

/**
 * Convert simple [{type, text}] blocks from Claude into Sanity portable text.
 * Supported types: p, h2, h3
 */
function toPortableText(blocks) {
  return blocks.map((b) => ({
    _type: 'block',
    _key: randomKey(),
    style: b.type === 'p' ? 'normal' : b.type,
    children: [{ _type: 'span', _key: randomKey(), text: b.text, marks: [] }],
    markDefs: [],
  }));
}

// ── Generate post via Claude ───────────────────────────────────────────────────
async function generatePost(topic) {
  console.log(`\nCalling Claude API for topic: "${topic}"`);

  const message = await anthropic.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 4096,
    messages: [
      {
        role: 'user',
        content: `You are a content writer for Cast Design Fireplaces, a premium cast stone fireplace company based in Irving, TX serving the Dallas–Fort Worth metro area since 2004. We specialize in custom cast stone fireplace mantels, surrounds, range hoods, corbels, and outdoor fireplaces.

Write an SEO-optimized blog post about: "${topic}"

Return ONLY a valid JSON object — no markdown, no code fences, nothing else — with this exact structure:
{
  "title": "SEO-friendly title (55-70 characters)",
  "excerpt": "Compelling meta description (140-160 characters)",
  "category": "one of exactly: Design Tips | Installation | Materials | Maintenance | DFW Spotlight | Trends | Outdoor Living",
  "readTime": "X min read",
  "body": [
    { "type": "p",  "text": "Opening paragraph..." },
    { "type": "h2", "text": "Section heading" },
    { "type": "p",  "text": "Section content..." }
  ]
}

Writing guidelines:
- Total body word count: 900–1200 words
- Include 5–7 sections, each with an h2 heading followed by 1–2 paragraphs
- Naturally mention Dallas, Fort Worth, DFW, or Texas 3–5 times throughout
- Tone: knowledgeable, warm, and professional — like advice from a trusted local craftsman
- Use specific, practical information — not generic fluff
- Do NOT include a conclusion section or call-to-action (the site template adds one)
- Do NOT use markdown formatting inside text values
- Every body item must have exactly "type" (p, h2, or h3) and "text" keys`,
      },
    ],
  });

  const raw = message.content[0].text.trim();

  // Strip any accidental code fences
  const clean = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');

  return JSON.parse(clean);
}

// ── Create draft in Sanity ────────────────────────────────────────────────────
async function createDraft(post) {
  const slug = toSlug(post.title);

  // Prefix with "drafts." so Sanity Studio shows it as an unpublished draft
  const doc = {
    _id: `drafts.${randomUUID()}`,
    _type: 'post',
    title: post.title,
    slug: { _type: 'slug', current: slug },
    excerpt: post.excerpt,
    category: post.category,
    readTime: post.readTime,
    publishedAt: new Date().toISOString(),
    author: 'Cast Design Team',
    body: toPortableText(post.body),
  };

  const result = await sanity.createOrReplace(doc);
  return result;
}

// ── Main ──────────────────────────────────────────────────────────────────────
const topic = process.argv[2]?.trim() || TOPICS[Math.floor(Math.random() * TOPICS.length)];

console.log('=== Cast Design Auto Blog Generator ===');
console.log(`Topic: ${topic}`);

const post = await generatePost(topic);

console.log(`\nGenerated:`);
console.log(`  Title:    ${post.title}`);
console.log(`  Category: ${post.category}`);
console.log(`  ReadTime: ${post.readTime}`);
console.log(`  Blocks:   ${post.body.length}`);

const created = await createDraft(post);

console.log(`\nDraft created in Sanity!`);
console.log(`  ID:   ${created._id}`);
console.log(`  Slug: ${toSlug(post.title)}`);
console.log(`\nReview it at: https://nhzcbxp2.sanity.studio/structure/post`);
