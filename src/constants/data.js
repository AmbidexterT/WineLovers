import images from './images';

const wines = [
  {
    title: 'Winery Castellani S.p.A',
    price: '$16.99',
    tags: 'Bottle',
    year: 2019,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
  {
    title: 'Winery Castellani S.p.A',
    price: '$16.99',
    tags: 'Bottle',
    year: 2019,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
  {
    title: 'Winery Castellani S.p.A',
    price: '$16.99',
    tags: 'Bottle',
    year: 2019,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
  {
    title: 'Winery Castellani S.p.A',
    price: '$16.99',
    newPrice: '$14.99',
    tags: 'Bottle',
    year: 2019,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
  {
    title: 'Winery Castellani S.p.A',
    price: '$56.99',
    tags: 'Bottle',
    year: 2015,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
];

const awards = [
  {
    imgUrl: images.plat2023,
    title: 'Platinum 2023',
    score: '97',
    region: 'Italy,Lugana',
    year: '2017',
  },
  {
    imgUrl: images.gold2023,
    title: 'Gold 2023',
    score: '91',
    region: 'France,Alsac',
    year: '2017',
  },
  {
    imgUrl: images.bis2023,
    title: 'Best in Show 2023',
    score: '88',
    region: 'Italy,Veneto',
    year: '2018',
  },
  {
    imgUrl: images.silver2023,
    title: 'Silver 2023',
    score: '77',
    region: 'Hungary,Tokaj',
    year: '2019',
  },
];

export default { wines, awards };
