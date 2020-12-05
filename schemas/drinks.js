import { CgCoffee as icon } from 'react-icons/cg';
import PriceInput from '../components/PriceInput';

export default {
  name: 'drink',
  title: 'Drinks',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of drink',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Coffee or Tea?',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short description of drink',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'vegetarian',
      title: 'Can be made vegetarian?',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the Item in Cents',
      validation: (Rule) => Rule.min(400).max(10000),
      // Use a custom input component that automatically formats money value
      inputComponent: PriceInput,
    },
    {
      name: 'extras',
      title: 'Available Extras',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'extra' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      extra1: 'extras.0.extraName',
      extra2: 'extras.1.extraName',
      extra3: 'extras.2.extraName',
      extra4: 'extras.3.extraName',
    },
    prepare({ title, media, ...extras }) {
      const ex = Object.values(extras).filter(Boolean);
      console.log(ex);
      return {
        title,
        media,
        subtitle: ex.join(', '),
      };
    },
  },
};
