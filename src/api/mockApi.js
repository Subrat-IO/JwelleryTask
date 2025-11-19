// Simple mock API for products and search.
// Add more products / fields to match your Figma data.

const PRODUCTS = [
  {
    id: "p1",
    title: "Classic Solitaire Ring",
    priceUSD: 1200,
    shape: "round",
    metal: "gold",
    image: "https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509243.jpg?semt=ais_incoming&w=740&q=80",
    description: "A classic solitaire engagement ring crafted in gold."
  },
  {
    id: "p2",
    title: "Pearl Drop Necklace",
    priceUSD: 800,
    shape: "pear",
    metal: "silver",
    image: "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwf829a31b/Landing%20Pages/Butterfly%202025/Butterfly-Diamond-High-Jewellery-1280x849.jpg",
    description: "Elegant pearl necklace with a delicate chain."
  },
  {
    id: "p3",
    title: "Emerald Halo Ring",
    priceUSD: 2200,
    shape: "oval",
    metal: "gold",
    image: "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
    description: "Emerald set in a halo of sparkling diamonds."
  },
  {
    id: "p4",
    title: "Twisted Band Ring",
    priceUSD: 450,
    shape: "round",
    metal: "rose-gold",
    image: "https://i.pinimg.com/736x/28/29/f8/2829f812304010fa4e016be1da1944ec.jpg",
    description: "Minimal twisted band for everyday wear."
  },
  {
    id: "p5",
    title: "Signet Ring",
    priceUSD: 650,
    shape: "square",
    metal: "silver",
    image: "https://www.shutterstock.com/image-photo/natural-stone-ring-on-elegant-600nw-2478182559.jpg",
    description: "Bold signet style ring with subtle engraving."
  },
  
];

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export const fetchProducts = async () => {
  await delay(250);
  return PRODUCTS;
};

export const fetchProductById = async (id) => {
  await delay(200);
  return PRODUCTS.find((p) => p.id === id) || null;
};

export const searchProducts = async (query = "", filters = {}) => {
  await delay(200);
  const q = (query || "").trim().toLowerCase();
  return PRODUCTS.filter((p) => {
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.shape.toLowerCase().includes(q);
    const matchShape = !filters.shape || p.shape === filters.shape;
    const matchMetal = !filters.metal || p.metal === filters.metal;
    return matchQ && matchShape && matchMetal;
  });
};
