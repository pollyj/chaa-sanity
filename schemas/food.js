import { GiCakeSlice as icon } from 'react-icons/gi';

export default {
  // computer name
  name: 'food',
  // visible title
  title: 'Food',
  type: 'document',
  // you can pass any react component here (?)
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian?',
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
