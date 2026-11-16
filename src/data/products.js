
const createSizes = (prefix) => [
    { name: "S", sku: `${prefix}-S`, stock: 10 },
    { name: "M", sku: `${prefix}-M`, stock: 10 },
    { name: "L", sku: `${prefix}-L`, stock: 10 },
    { name: "XL", sku: `${prefix}-XL`, stock: 10 },
    { name: "XXL", sku: `${prefix}-XXL`, stock: 10 },
  ];
  
  const createVariants = (collection, prefix) => [
    {
      id: "cream",
      name: "Cream",
      hex: "#E9D8BD",
      images: [
        `/images/${collection}/cream-front.png`,
        `/images/${collection}/cream-back.png`,
      ],
      sizes: createSizes(`${prefix}-CRM`),
    },
    {
      id: "black",
      name: "Black",
      hex: "#111111",
      images: [
        `/images/${collection}/black-front.png`,
        `/images/${collection}/black-back.png`,
      ],
      sizes: createSizes(`${prefix}-BLK`),
    },
  ];
  
  export const products = [
    {
      id: "CAUZ-RC-001",
      slug: "racing-club-tshirt",
      name: "Racing Club T-Shirt",
      category: "Racing Club",
      price: 799,
      badge: "NEW",
      description:
        "Made for those who carry their passion everywhere. Inspired by speed, movement and the spirit of racing.",
      fabric: "Premium Cotton",
      gsm: "240–250 GSM",
      fit: "Oversized Fit",
      variants: createVariants("racing", "CAUZ-RC"),
    },
  
    {
      id: "CAUZ-BC-001",
      slug: "basketball-club-tshirt",
      name: "Basketball Club T-Shirt",
      category: "Basketball Club",
      price: 799,
      badge: "NEW",
      description:
        "For the ones who live for the game. Inspired by basketball culture, court energy and the love of the sport.",
      fabric: "Premium Cotton",
      gsm: "240–250 GSM",
      fit: "Oversized Fit",
      variants: createVariants("basketball", "CAUZ-BC"),
    },
  
    {
      id: "CAUZ-CC-001",
      slug: "cricket-club-tshirt",
      name: "Cricket Club T-Shirt",
      category: "Cricket Club",
      price: 799,
      badge: "NEW",
      description:
        "For the ones who live every ball, every boundary and every moment. Inspired by the spirit of cricket.",
      fabric: "Premium Cotton",
      gsm: "240–250 GSM",
      fit: "Oversized Fit",
      variants: createVariants("cricket", "CAUZ-CC"),
    },
  
    {
      id: "CAUZ-FC-001",
      slug: "football-club-tshirt",
      name: "Football Club T-Shirt",
      category: "Football Club",
      price: 799,
      badge: "NEW",
      description:
        "For the ones who live for the beautiful game. Inspired by football culture, passion and the energy of the pitch.",
      fabric: "Premium Cotton",
      gsm: "240–250 GSM",
      fit: "Oversized Fit",
      variants: createVariants("football", "CAUZ-FC"),
    },
  ];
  
  export const getProductBySlug = (slug) =>
    products.find((product) => product.slug === slug);
  