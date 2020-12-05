import { HiOutlineSparkles as icon } from 'react-icons/hi';

export default {
  // computer name
  name: 'extra',
  // visible title
  title: 'Extras',
  type: 'document',
  // you can pass any react component here (?)
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of item',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short description',
      type: 'string',
    },
    {
      name: 'vegetarian',
      title: 'Is the optional extra vegetarian?',
      type: 'boolean',
      options: {
        layout: 'checkbox',
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
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the extra',
      validation: (Rule) => Rule.min(100).max(10000),
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'image',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, media, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
      media,
    }),
  },
};
