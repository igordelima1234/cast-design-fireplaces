/**
 * Gallery Import Script
 * Reads each folder in public/images/gallery/, uploads all images to Sanity,
 * and creates a "product" document for each gallery item.
 *
 * Run: SANITY_API_TOKEN=xxx node scripts/import-gallery.mjs
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GALLERY_DIR = path.resolve(__dirname, '../public/images/gallery');

const client = createClient({
  projectId: 'nhzcbxp2',
  dataset: 'production',
  apiVersion: '2025-02-20',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function isImage(filename) {
  return /\.(jpe?g|png|webp|heic|heif|gif|avif)$/i.test(filename);
}

/** Recursively collect all image files from a directory */
function collectImages(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectImages(fullPath));
    } else if (entry.isFile() && isImage(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

/** Upload a single image file to Sanity and return the asset reference */
async function uploadImage(filePath) {
  const filename = path.basename(filePath);
  const ext = path.extname(filename).slice(1).toLowerCase();
  // Sanity accepts heic as image/heic
  const mimeMap = {
    jpg: 'image/jpeg', jpeg: 'image/jpeg',
    png: 'image/png', webp: 'image/webp',
    heic: 'image/heic', heif: 'image/heif',
    gif: 'image/gif', avif: 'image/avif',
  };
  const contentType = mimeMap[ext] || 'image/jpeg';
  const fileStream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('image', fileStream, {
    filename,
    contentType,
  });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

// ─── Gallery item definitions ─────────────────────────────────────────────────
// Folder name → { category, catLabel, tagline, description }
const META = {
  'Ashton': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'A clean-lined transitional mantel with restrained corbel detail — our most-requested profile.',
    description: 'The Ashton strikes the perfect balance between classic proportion and modern restraint. Refined leg corbels, a generous shelf, and a smooth limestone finish that pairs beautifully with virtually any interior palette.',
  },
  'Ashton (Custom)': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'The Ashton profile built to custom dimensions for a unique Dallas installation.',
    description: 'A custom-spec Ashton mantel tailored to the client\'s exact opening and ceiling height. Demonstrates the flexibility of cast stone when dimensions need to go beyond our standard range.',
  },
  'Ashton 2.0': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'An evolved take on our signature Ashton — refined proportions, updated detail.',
    description: 'The Ashton 2.0 refines the original profile with updated corbel scaling and a deeper shelf. A popular choice for transitional interiors looking for a slightly more contemporary edge.',
  },
  'Austin': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'A sleek, minimal mantel built for modern Texas homes.',
    description: 'The Austin is a streamlined cast stone mantel with clean lines and a low-profile shelf. Designed for gas fireplaces in contemporary open-plan living spaces.',
  },
  'Brooklyn': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'Urban-inspired proportions with a refined limestone finish.',
    description: 'The Brooklyn draws from loft-style interiors — bold proportions, flat fascia, and a substantial shelf that commands attention without ornament.',
  },
  'Cana': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'A warm, classical mantel with graceful leg detailing.',
    description: 'The Cana features traditional European mantel proportions softened for modern interiors. The leg detail adds a classical touch without feeling heavy or dated.',
  },
  'Florence': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'European elegance rendered in cast stone.',
    description: 'The Florence draws inspiration from Italian Renaissance architecture. Refined pilaster legs, a generous cornice shelf, and smooth limestone finish make it a centerpiece in any formal living space.',
  },
  'Grace': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'Delicate proportions and refined detailing — built for lighter, brighter rooms.',
    description: 'The Grace is one of our most slender profiles. Ideal for smaller fireplace openings or rooms where the mantel should complement rather than dominate. Popular in transitional and coastal interiors.',
  },
  'Legacy': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'A timeless mantel profile that has anchored DFW homes for over two decades.',
    description: 'The Legacy is a proven classic. Its balanced proportions and moulded leg detail make it one of our most versatile profiles — at home in traditional, transitional, and even contemporary settings.',
  },
  'London': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'British-influenced proportions with a refined cast stone execution.',
    description: 'The London takes cues from Georgian townhouse architecture — tall legs, pronounced shelf, and a clean frieze. A natural fit for formal dining rooms and library settings.',
  },
  'Milan': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'Contemporary Italian sensibility in cast stone.',
    description: 'The Milan is a modern mantel with crisp geometry and a floating shelf aesthetic. Minimal ornamentation lets the quality of the cast stone speak for itself.',
  },
  'Minerva': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'Bold, architectural presence — built to anchor large rooms.',
    description: 'The Minerva is one of our most substantial profiles. Tall, wide, and commanding — it was designed for great rooms with high ceilings where a lesser mantel would be lost.',
  },
  'Nova': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'A fresh, contemporary profile with confident proportions.',
    description: 'The Nova brings a modern energy to cast stone. Clean lines, a generous shelf, and a subtle beveled edge detail make it a standout in transitional and contemporary interiors.',
  },
  'Paragon': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'Our benchmark profile — the standard against which others are measured.',
    description: 'The Paragon earned its name through years of client feedback and refinement. Its proportions are considered near-perfect for a standard 8\'–10\' ceiling room with a 42"–48" opening.',
  },
  'Upton': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'Understated luxury with a quiet confidence.',
    description: 'The Upton is for the client who wants presence without show. Refined moulding, a clean shelf line, and a smooth limestone finish that ages gracefully over time.',
  },
  'York': {
    category: 'fireplace-mantels',
    catLabel: 'Fireplace Mantel',
    tagline: 'Classic English proportions adapted for the American home.',
    description: 'The York is inspired by the grand fireplaces of English country estates, scaled for modern DFW homes. Tall legs, deep shelf, and a distinctive frieze panel set it apart.',
  },
};

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const folders = fs.readdirSync(GALLERY_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)
    .sort();

  console.log(`\nFound ${folders.length} gallery folders\n`);

  for (const folderName of folders) {
    const folderPath = path.join(GALLERY_DIR, folderName);
    const meta = META[folderName] || {
      category: 'fireplace-mantels',
      catLabel: 'Fireplace Mantel',
      tagline: `The ${folderName} cast stone fireplace mantel.`,
      description: `The ${folderName} is a cast stone fireplace mantel handcrafted by Cast Design Fireplaces for Dallas–Fort Worth homes.`,
    };

    const slug = slugify(folderName);
    const docId = `product-${slug}`;

    // Collect all images
    const imagePaths = collectImages(folderPath);
    if (imagePaths.length === 0) {
      console.log(`⚠ Skipping "${folderName}" — no images found`);
      continue;
    }

    console.log(`\n📁 "${folderName}" (${imagePaths.length} image${imagePaths.length > 1 ? 's' : ''})`);

    // Upload all images
    const uploadedImages = [];
    for (const imgPath of imagePaths) {
      process.stdout.write(`   Uploading ${path.basename(imgPath)}... `);
      try {
        const ref = await uploadImage(imgPath);
        uploadedImages.push(ref);
        console.log('✓');
      } catch (err) {
        console.log(`✗ (${err.message})`);
      }
    }

    if (uploadedImages.length === 0) {
      console.log(`   ⚠ No images uploaded — skipping document creation`);
      continue;
    }

    // First image = cover, rest = additional images
    const [coverImage, ...additionalImages] = uploadedImages;

    // Create / replace the Sanity document
    const doc = {
      _id: docId,
      _type: 'product',
      name: folderName,
      slug: { _type: 'slug', current: slug },
      category: meta.category,
      catLabel: meta.catLabel,
      tagline: meta.tagline,
      description: meta.description,
      coverImage: { ...coverImage, alt: folderName },
      images: additionalImages.map((img, i) => ({
        ...img,
        _key: `img-${i}`,
        alt: `${folderName} — view ${i + 2}`,
      })),
    };

    await client.createOrReplace(doc);
    console.log(`   ✓ Document created: "${folderName}" (slug: ${slug})`);
  }

  console.log('\n✅ Gallery import complete!\n');
}

main().catch(err => {
  console.error('Import failed:', err);
  process.exit(1);
});
