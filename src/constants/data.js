import images from './images';

const Food = [
  {
    title: 'Shahi Paneer',
    price: '550Rs',
    tags: 'Veg | 2 Serving',
  },
  {
    title: 'Paneer Do Pyaaza',
    price: '370Rs',
    tags: 'Veg | 2 Serving',
  },
  {
    title: 'Butter Paneer Masala (BestSeller)',
    price: '550Rs',
    tags: 'Veg | 2 Serving',
  },
  {
    title: 'Chicken Tikka Masala (BestSeller)',
    price: '800Rs',
    tags: 'Non Veg | 2 Serving',
  },
  {
    title: 'Navratan Special (BestSeller)',
    price: '850Rs',
    tags: 'Veg | 1 Serving',
  },
];

const cocktails = [
  {
    title: 'Cold Drink',
    price: 'MRP',
    tags: 'Veg | See Bottle Neck',
  },
  {
    title: "Martini",
    price: '350Rs',
    tags: 'No Alcohol | 100ml',
  },
  {
    title: 'Daiquiri',
    price: '489Rs',
    tags: '30% Alcohol | Rum | 20ml',
  },
  {
    title: 'Virgin Mojjito',
    price: '285Rs',
    tags: 'No Alcohol | 50ml',
  },
  {
    title: 'Baileys (BestSeller)',
    price: '1800Rs',
    tags: '50% Alcohol | Irish Cream | 20ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michigan Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { Food, cocktails, awards };
