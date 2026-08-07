import { defineType, defineField, defineArrayMember } from 'sanity';

// One document per main site page. The layout lives in code; these documents
// hold the words. Fields are shown/hidden based on which page the document
// represents, so editors only see what's relevant.
//
// Headings support light formatting: wrap words in *asterisks* for gold/italic
// emphasis, and use a line break for a new line.

const onlyOn =
  (...pageIds: string[]) =>
  ({ document }: { document?: { pageId?: string } }) =>
    !pageIds.includes(document?.pageId ?? '');

const heroField = defineField({
  name: 'hero',
  title: 'Hero (top banner)',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow (small text above heading)', type: 'string' }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 2,
      description: 'Wrap words in *asterisks* for emphasis. Line breaks are kept.',
    }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'text', rows: 2 }),
  ],
});

const statItem = defineArrayMember({
  type: 'object',
  fields: [
    defineField({ name: 'value', title: 'Value (e.g. "500+", "4.9★")', type: 'string' }),
    defineField({ name: 'label', title: 'Label', type: 'string' }),
  ],
  preview: { select: { title: 'value', subtitle: 'label' } },
});

const titleBodyItem = defineArrayMember({
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'body' } },
});

export const mainPage = defineType({
  name: 'mainPage',
  title: 'Main Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Contact', value: 'contact' },
          { title: 'Service Areas', value: 'service-areas' },
          { title: 'Cast Stone Fireplaces (SEO page)', value: 'cast-stone-fireplaces' },
        ],
      },
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => Boolean(document?.pageId),
    }),
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Only shown in this editor list — not on the website.',
    }),

    // ── SEO (all pages) ────────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'Search Engine Listing',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'title', title: 'Page Title (browser tab / Google)', type: 'string' }),
        defineField({
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Shown under the title in Google results. 150–160 characters ideal.',
        }),
      ],
    }),

    heroField,

    // ── HOME ───────────────────────────────────────────────────────────────
    defineField({
      name: 'trustBar',
      title: 'Trust Bar (stats under hero)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Bold line (e.g. "4.9 Rating")', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Small line (e.g. "200+ Five-Star Reviews")', type: 'string' }),
          ],
          preview: { select: { title: 'title', subtitle: 'subtitle' } },
        }),
      ],
      hidden: onlyOn('home'),
    }),
    defineField({
      name: 'valueProps',
      title: '"Why Choose Us" section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'label', title: 'Small label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'text', rows: 2, description: '*asterisks* = emphasis' }),
        defineField({ name: 'intro', title: 'Intro paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'cards', title: 'Cards', type: 'array', of: [titleBodyItem] }),
      ],
      hidden: onlyOn('home'),
    }),
    defineField({
      name: 'process',
      title: '"How It Works" section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'label', title: 'Small label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'text', rows: 2, description: '*asterisks* = emphasis' }),
        defineField({ name: 'intro', title: 'Intro paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'steps', title: 'Steps', type: 'array', of: [titleBodyItem] }),
      ],
      hidden: onlyOn('home'),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
            defineField({ name: 'author', title: 'Author (e.g. "Jennifer M.")', type: 'string' }),
            defineField({ name: 'location', title: 'Location (e.g. "Southlake, TX")', type: 'string' }),
          ],
          preview: { select: { title: 'author', subtitle: 'quote' } },
        }),
      ],
      hidden: onlyOn('home'),
    }),
    defineField({
      name: 'aboutBlurb',
      title: '"Our Story" section (homepage)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'label', title: 'Small label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'text', rows: 2, description: '*asterisks* = emphasis' }),
        defineField({
          name: 'body',
          title: 'Paragraphs',
          type: 'text',
          rows: 10,
          description: 'Separate paragraphs with a blank line.',
        }),
      ],
      hidden: onlyOn('home'),
    }),

    // ── ABOUT ──────────────────────────────────────────────────────────────
    defineField({
      name: 'story',
      title: '"Our Story" section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'label', title: 'Small label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'text', rows: 2, description: '*asterisks* = emphasis' }),
        defineField({
          name: 'body',
          title: 'Paragraphs',
          type: 'text',
          rows: 12,
          description: 'Separate paragraphs with a blank line.',
        }),
        defineField({ name: 'stats', title: 'Stats', type: 'array', of: [statItem] }),
      ],
      hidden: onlyOn('about'),
    }),
    defineField({
      name: 'craft',
      title: '"Our Craft" section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'label', title: 'Small label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'text', rows: 2, description: '*asterisks* = emphasis' }),
        defineField({ name: 'intro', title: 'Intro paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'pillars', title: 'Pillars (cards)', type: 'array', of: [titleBodyItem] }),
      ],
      hidden: onlyOn('about'),
    }),
    defineField({
      name: 'showroom',
      title: '"Visit Us / Showroom" section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'label', title: 'Small label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'text', rows: 2, description: '*asterisks* = emphasis' }),
        defineField({
          name: 'body',
          title: 'Paragraphs',
          type: 'text',
          rows: 6,
          description: 'Separate paragraphs with a blank line.',
        }),
        defineField({ name: 'address', title: 'Address', type: 'text', rows: 2 }),
        defineField({ name: 'hours', title: 'Hours note (e.g. "By Appointment")', type: 'string' }),
      ],
      hidden: onlyOn('about'),
    }),

    // ── CONTACT ────────────────────────────────────────────────────────────
    defineField({
      name: 'contactIntro',
      title: '"What Happens Next" section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'label', title: 'Small label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'body', title: 'Intro paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'steps', title: 'Process steps', type: 'array', of: [titleBodyItem] }),
      ],
      hidden: onlyOn('contact'),
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'phone', title: 'Phone (display)', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'address', title: 'Showroom address', type: 'text', rows: 2 }),
        defineField({ name: 'hours', title: 'Hours', type: 'text', rows: 2 }),
      ],
      hidden: onlyOn('contact'),
    }),

    // ── SERVICE AREAS ──────────────────────────────────────────────────────
    defineField({
      name: 'areasIntro',
      title: '"Where We Work" section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'body', title: 'Paragraph', type: 'text', rows: 4 }),
      ],
      hidden: onlyOn('service-areas'),
    }),

    // ── CAST STONE FIREPLACES (SEO page) ───────────────────────────────────
    defineField({
      name: 'longHero',
      title: 'Hero (intro paragraph)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'lead', title: 'Lead paragraph (larger text)', type: 'text', rows: 4 }),
      ],
      hidden: onlyOn('cast-stone-fireplaces'),
    }),

    // ── SHARED CTA BANNER (home + about + contact + service-areas) ─────────
    defineField({
      name: 'ctaBanner',
      title: 'Bottom Call-to-Action Banner',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'label', title: 'Small label (if shown)', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'sub', title: 'Subtext', type: 'text', rows: 3 }),
        defineField({ name: 'cardTitle', title: 'Right card title (if shown)', type: 'string' }),
        defineField({ name: 'cardBody', title: 'Right card text (if shown)', type: 'text', rows: 3 }),
      ],
      hidden: onlyOn('home', 'about', 'contact', 'service-areas'),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'pageId' },
    prepare({ title, subtitle }) {
      return { title: title ?? subtitle ?? 'Untitled page', subtitle: subtitle ? `/${subtitle === 'home' ? '' : subtitle}` : '' };
    },
  },
});
