import { defineType, defineField, defineArrayMember } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Gallery Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fireplace Mantels', value: 'fireplace-mantels' },
          { title: 'Fireplace Surrounds', value: 'fireplace-surrounds' },
          { title: 'Outdoor Fireplaces', value: 'outdoor-fireplaces' },
          { title: 'Range Hoods', value: 'range-hoods' },
          { title: 'Corbels & Columns', value: 'corbels-columns' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'catLabel',
      title: 'Category Label',
      type: 'string',
      description: 'Display label shown on the card (e.g. "Fireplace Mantels")',
    }),
    defineField({
      name: 'finish',
      title: 'Finish',
      type: 'string',
      description: 'e.g. "Aged Limestone", "Natural White"',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'key', title: 'Spec Name', type: 'string' }),
            defineField({ name: 'value', title: 'Spec Value', type: 'string' }),
          ],
          preview: {
            select: { title: 'key', subtitle: 'value' },
          },
        }),
      ],
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'product' }],
        }),
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
});
