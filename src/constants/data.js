import images from "./images";

const drinks = [
  {
    title: "Mango",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "RedBull",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose Smoothie",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Straw-Nana Shake",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Choclate Shake",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];
const exprt = { drinks, cocktails, awards };
export default exprt;
