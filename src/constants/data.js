import images from './images';

const wines = [
  {
    title: 'RICE',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'CHIPS',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'MEAT',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'BEANS AND PEES',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'IRISH POTATOES AND POTATOES',
    price: '$25',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'CAPPUCINO',
    price: '$25',
    tags: 'coffee | 30 ml',
  },
  {
    title: "LATTE",
    price: '$25',
    tags: 'coffee | Slice of lime',
  },
  {
    title: 'MACHIATO',
    price: '$25',
    tags: 'coffee| Sugar',
  },
  {
    title: 'ESPRESSOR',
    price: '$25',
    tags: 'coffee|sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price:"$25",
    tags:'coffee|sugar',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
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

export default { wines, cocktails, awards };
