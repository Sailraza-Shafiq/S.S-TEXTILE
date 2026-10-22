import { Product, ClothingSize } from '../types';

export const HERO_MODEL_IMAGE = '/src/assets/images/ss_hero_male_model_1790763158760.jpg';
export const HOODIE_IMAGE = '/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg';
export const PANTS_IMAGE = '/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg';
export const TSHIRT_IMAGE = '/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg';
export const JACKET_IMAGE = '/src/assets/images/ss_architectural_jacket_1790608094780.jpg';
export const OVERSHIRT_IMAGE = '/src/assets/images/ss_atelier_overshirt_1790669837619.jpg';

const STANDARD_SIZES: ClothingSize[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const PRODUCTS: Product[] = [
  {
    "id": "ss-hoodies-01",
    "name": "S.S Core Heavyweight Boxy Hoodie",
    "category": "hoodies",
    "price": 165,
    "originalPrice": 200,
    "tagline": "480 GSM Loopback French Terry with tonal chest embroidery.",
    "description": "480 GSM Loopback French Terry with tonal chest embroidery. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 450,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
    "additionalImages": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "450 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-02",
    "name": "S.S Monolith Double-Layer Hoodie",
    "category": "hoodies",
    "price": 175,
    "tagline": "Dual-layered ergonomic construction with structured stand collar.",
    "description": "Dual-layered ergonomic construction with structured stand collar. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 470,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "470 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-03",
    "name": "S.S Minimalist Half-Zip Terry Hoodie",
    "category": "hoodies",
    "price": 185,
    "tagline": "Italian Raccagni silver zipper with reinforced high collar.",
    "description": "Italian Raccagni silver zipper with reinforced high collar. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 490,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "490 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-04",
    "name": "S.S Vintage Washed Raw-Edge Hoodie",
    "category": "hoodies",
    "price": 195,
    "originalPrice": 230,
    "tagline": "Artisanal pigment wash with hand-distressed edge finish.",
    "description": "Artisanal pigment wash with hand-distressed edge finish. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 510,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578768079052-aa76e520028b?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578768079052-aa76e520028b?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "510 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578768079052-aa76e520028b?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-05",
    "name": "S.S Thermal Waffle-Lined Winter Hoodie",
    "category": "hoodies",
    "price": 205,
    "tagline": "Dual thermal chamber insulation for cold climate comfort.",
    "description": "Dual thermal chamber insulation for cold climate comfort. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 450,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "450 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-06",
    "name": "S.S Architectural Stand-Collar Hoodie",
    "category": "hoodies",
    "price": 165,
    "tagline": "Eliminated drawstrings with continuous clean hood volume.",
    "description": "Eliminated drawstrings with continuous clean hood volume. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 470,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "470 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-07",
    "name": "S.S Raglan Sleeve Heavy Fleece Hoodie",
    "category": "hoodies",
    "price": 175,
    "originalPrice": 210,
    "tagline": "Unrestricted shoulder drape with flatlock reinforced seams.",
    "description": "Unrestricted shoulder drape with flatlock reinforced seams. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 490,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "490 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-08",
    "name": "S.S Studio Cut Cropped Heavyweight Hoodie",
    "category": "hoodies",
    "price": 185,
    "tagline": "Shorter body length designed to stack over tailored trousers.",
    "description": "Shorter body length designed to stack over tailored trousers. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 510,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "510 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-09",
    "name": "S.S Asymmetrical Zip Atelier Hoodie",
    "category": "hoodies",
    "price": 195,
    "tagline": "Offset curved closure with dense rib-knit throat latch.",
    "description": "Offset curved closure with dense rib-knit throat latch. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 450,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
    "additionalImages": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "450 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-10",
    "name": "S.S Garment-Dyed Loopback Zip Hoodie",
    "category": "hoodies",
    "price": 205,
    "originalPrice": 240,
    "tagline": "Two-way heavy silver zipper with split front kangaroo pockets.",
    "description": "Two-way heavy silver zipper with split front kangaroo pockets. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 470,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "470 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-11",
    "name": "S.S Double-Stitch Raw Seam Hoodie",
    "category": "hoodies",
    "price": 165,
    "tagline": "Exposed structural seams with subtle S.S chest embroidery.",
    "description": "Exposed structural seams with subtle S.S chest embroidery. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 490,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "490 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-12",
    "name": "S.S Mockneck Hooded Sweatshirt",
    "category": "hoodies",
    "price": 175,
    "tagline": "Internal ribbed mockneck layer for tailored warmth.",
    "description": "Internal ribbed mockneck layer for tailored warmth. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 510,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578768079052-aa76e520028b?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578768079052-aa76e520028b?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "510 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578768079052-aa76e520028b?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-13",
    "name": "S.S Heavy Rib Panelled Drop Hoodie",
    "category": "hoodies",
    "price": 185,
    "originalPrice": 220,
    "tagline": "Wide side underarm gussets for effortless athletic movement.",
    "description": "Wide side underarm gussets for effortless athletic movement. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 450,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "450 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-14",
    "name": "S.S Seamless Hood Minimalist Pullover",
    "category": "hoodies",
    "price": 195,
    "tagline": "Continuous front panel with hidden side welt pockets.",
    "description": "Continuous front panel with hidden side welt pockets. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 470,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "470 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-15",
    "name": "S.S Oversized Fleece Zip Runway Hoodie",
    "category": "hoodies",
    "price": 205,
    "tagline": "Exaggerated runway proportions with fluid weighty drape.",
    "description": "Exaggerated runway proportions with fluid weighty drape. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 490,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "490 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-hoodies-16",
    "name": "S.S Archive Edition 01 Collector Hoodie",
    "category": "hoodies",
    "price": 165,
    "originalPrice": 200,
    "tagline": "Serialized interior leather patch with premium Porto milling.",
    "description": "Serialized interior leather patch with premium Porto milling. Milled from 100% Organic Loopback French Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Organic Loopback French Terry",
    "weightGsm": 510,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Boxy Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "510 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-01",
    "name": "S.S 280 GSM Heavy Boxy T-Shirt",
    "category": "t-shirts",
    "price": 75,
    "originalPrice": 110,
    "tagline": "Thick 1.25-inch ribbed collar that will never roll or stretch.",
    "description": "Thick 1.25-inch ribbed collar that will never roll or stretch. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
    "additionalImages": [
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-02",
    "name": "S.S Raw Edge Mercerized Cotton Tee",
    "category": "t-shirts",
    "price": 85,
    "tagline": "Lustrous long-staple pima cotton with subtle raw hems.",
    "description": "Lustrous long-staple pima cotton with subtle raw hems. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 280,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-03",
    "name": "S.S Seamless Drop-Shoulder Studio Tee",
    "category": "t-shirts",
    "price": 95,
    "tagline": "Architectural shoulder line with clean blind hemstitch.",
    "description": "Architectural shoulder line with clean blind hemstitch. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 300,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "300 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-04",
    "name": "S.S Vintage Wash Charcoal Tee",
    "category": "t-shirts",
    "price": 105,
    "originalPrice": 140,
    "tagline": "Sun-drenched mineral wash with broken-in softness.",
    "description": "Sun-drenched mineral wash with broken-in softness. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 320,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-05",
    "name": "S.S Split-Hem Architectural Tee",
    "category": "t-shirts",
    "price": 115,
    "tagline": "Subtle stepped hem with reinforced side vents.",
    "description": "Subtle stepped hem with reinforced side vents. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-06",
    "name": "S.S 320 GSM Monolith Ultra-Heavy Tee",
    "category": "t-shirts",
    "price": 75,
    "tagline": "Dense heavyweight jersey that holds its form indefinitely.",
    "description": "Dense heavyweight jersey that holds its form indefinitely. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 280,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-07",
    "name": "S.S Chest Monogram Minimalist Tee",
    "category": "t-shirts",
    "price": 85,
    "originalPrice": 120,
    "tagline": "Micro-embroidered S.S insignia in tonal high-density thread.",
    "description": "Micro-embroidered S.S insignia in tonal high-density thread. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 300,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "300 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-08",
    "name": "S.S Ribbed High-Neck Crewneck Tee",
    "category": "t-shirts",
    "price": 95,
    "tagline": "Elevated mock collar for high-fashion layering.",
    "description": "Elevated mock collar for high-fashion layering. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 320,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-09",
    "name": "S.S Relaxed Pima Cotton Essential Tee",
    "category": "t-shirts",
    "price": 105,
    "tagline": "Silk-like hand feel engineered for everyday rotation.",
    "description": "Silk-like hand feel engineered for everyday rotation. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
    "additionalImages": [
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-10",
    "name": "S.S Double-Stitch Pocket Tee",
    "category": "t-shirts",
    "price": 115,
    "originalPrice": 150,
    "tagline": "Reinforced bar-tacked chest pocket with clean internal seams.",
    "description": "Reinforced bar-tacked chest pocket with clean internal seams. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 280,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-11",
    "name": "S.S Garment-Dyed Earth Tee",
    "category": "t-shirts",
    "price": 75,
    "tagline": "Natural pigment dyeing with organic botanical extracts.",
    "description": "Natural pigment dyeing with organic botanical extracts. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 300,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "300 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-12",
    "name": "S.S Curved Back Yoke Tee",
    "category": "t-shirts",
    "price": 85,
    "tagline": "Anatomical back seam detailing for contoured drape.",
    "description": "Anatomical back seam detailing for contoured drape. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 320,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-13",
    "name": "S.S Oversized Elbow-Length Sleeve Tee",
    "category": "t-shirts",
    "price": 95,
    "originalPrice": 130,
    "tagline": "Streetwear proportion with wide boxy sleeve opening.",
    "description": "Streetwear proportion with wide boxy sleeve opening. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-14",
    "name": "S.S Textured Slub Cotton Studio Tee",
    "category": "t-shirts",
    "price": 105,
    "tagline": "Tactile organic slub texture with rich natural depth.",
    "description": "Tactile organic slub texture with rich natural depth. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 280,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-15",
    "name": "S.S Heavy Cotton Cutoff Muscle Tee",
    "category": "t-shirts",
    "price": 115,
    "tagline": "Structured sleeveless silhouette with finished armholes.",
    "description": "Structured sleeveless silhouette with finished armholes. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 300,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "300 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-t-shirts-16",
    "name": "S.S Limited Archive Graphic Tee",
    "category": "t-shirts",
    "price": 75,
    "originalPrice": 110,
    "tagline": "Minimalist screen-printed studio coordinate on back.",
    "description": "Minimalist screen-printed studio coordinate on back. Milled from 100% Combed Compact Long-Staple Cotton. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "100% Combed Compact Long-Staple Cotton",
    "weightGsm": 320,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Oversized Boxy Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_oversized_box_tshirt_1790608082335.jpg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-01",
    "name": "S.S Relaxed Camp Collar Shirt",
    "category": "shirts",
    "price": 145,
    "originalPrice": 180,
    "tagline": "Cuban collar cut from fluid breathable linen-cotton blend.",
    "description": "Cuban collar cut from fluid breathable linen-cotton blend. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 180,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "180 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-02",
    "name": "S.S Concealed Placket Poplin Shirt",
    "category": "shirts",
    "price": 155,
    "tagline": "Hidden buttons with minimalist architectural front styling.",
    "description": "Hidden buttons with minimalist architectural front styling. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 200,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "200 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-03",
    "name": "S.S Washed Belgian Linen Casual Shirt",
    "category": "shirts",
    "price": 165,
    "tagline": "Pre-washed breathable linen with relaxed rumpled elegance.",
    "description": "Pre-washed breathable linen with relaxed rumpled elegance. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-04",
    "name": "S.S French Cuff Sartorial Dress Shirt",
    "category": "shirts",
    "price": 175,
    "originalPrice": 210,
    "tagline": "Crisp 120s two-ply cotton with structured point collar.",
    "description": "Crisp 120s two-ply cotton with structured point collar. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 240,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-05",
    "name": "S.S Drop Shoulder Silk-Cotton Shirt",
    "category": "shirts",
    "price": 185,
    "tagline": "Unstructured fluidity with mother-of-pearl buttons.",
    "description": "Unstructured fluidity with mother-of-pearl buttons. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 180,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "180 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-06",
    "name": "S.S Band Collar Atelier Shirt",
    "category": "shirts",
    "price": 145,
    "tagline": "Clean mandarin neckline with split rounded curved hems.",
    "description": "Clean mandarin neckline with split rounded curved hems. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 200,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "200 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-07",
    "name": "S.S Textured Dobby Weave Shirt",
    "category": "shirts",
    "price": 155,
    "originalPrice": 190,
    "tagline": "Subtle geometric micro-pattern woven into breathable cotton.",
    "description": "Subtle geometric micro-pattern woven into breathable cotton. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-08",
    "name": "S.S Oxford Cotton Button-Down Shirt",
    "category": "shirts",
    "price": 165,
    "tagline": "Classic heavy Oxford cloth with unlined soft roll collar.",
    "description": "Classic heavy Oxford cloth with unlined soft roll collar. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 240,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-09",
    "name": "S.S Short Sleeve Resort Shirt",
    "category": "shirts",
    "price": 175,
    "tagline": "Relaxed drape tailored for high-summer temperature regulation.",
    "description": "Relaxed drape tailored for high-summer temperature regulation. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 180,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "180 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-10",
    "name": "S.S Popover Half-Placket Shirt",
    "category": "shirts",
    "price": 185,
    "originalPrice": 220,
    "tagline": "Casual pullover silhouette with double pleated back.",
    "description": "Casual pullover silhouette with double pleated back. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 200,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "200 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-11",
    "name": "S.S Flannel Twill Brushed Shirt",
    "category": "shirts",
    "price": 145,
    "tagline": "Ultra-soft brushed cotton twill in muted neutral shades.",
    "description": "Ultra-soft brushed cotton twill in muted neutral shades. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-12",
    "name": "S.S Military Utility Dual-Pocket Shirt",
    "category": "shirts",
    "price": 155,
    "tagline": "Flap chest pockets with reinforced shoulder epaulette detail.",
    "description": "Flap chest pockets with reinforced shoulder epaulette detail. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 240,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-13",
    "name": "S.S Fluid Lyocell Evening Shirt",
    "category": "shirts",
    "price": 165,
    "originalPrice": 200,
    "tagline": "Satin-finish drape engineered for sleek monochrome eveningwear.",
    "description": "Satin-finish drape engineered for sleek monochrome eveningwear. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 180,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "180 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-14",
    "name": "S.S Split Side-Seam Studio Shirt",
    "category": "shirts",
    "price": 175,
    "tagline": "Deep side splits that flow naturally over trouser waistbands.",
    "description": "Deep side splits that flow naturally over trouser waistbands. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 200,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "200 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-15",
    "name": "S.S Striped Poplin Atelier Shirt",
    "category": "shirts",
    "price": 185,
    "tagline": "Subtle chalk stripe woven on antique Swiss shuttle looms.",
    "description": "Subtle chalk stripe woven on antique Swiss shuttle looms. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shirts-16",
    "name": "S.S Clean Collarless Tuxedo Shirt",
    "category": "shirts",
    "price": 145,
    "originalPrice": 180,
    "tagline": "Pleated bib detail with hidden fly closure.",
    "description": "Pleated bib detail with hidden fly closure. Milled from Long-Staple Egyptian Cotton & Belgian Linen. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Long-Staple Egyptian Cotton & Belgian Linen",
    "weightGsm": 240,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Tailored Proportion",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-01",
    "name": "S.S Relaxed Pleated Tailored Trouser",
    "category": "pants",
    "price": 175,
    "originalPrice": 210,
    "tagline": "Deep front single pleat with fluid ankle drape.",
    "description": "Deep front single pleat with fluid ankle drape. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
    "additionalImages": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-02",
    "name": "S.S Wide-Leg Minimalist Wool Pants",
    "category": "pants",
    "price": 185,
    "tagline": "Continuous straight silhouette tailored from virgin wool.",
    "description": "Continuous straight silhouette tailored from virgin wool. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 340,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-03",
    "name": "S.S Drawstring Tailored Commuter Pants",
    "category": "pants",
    "price": 195,
    "tagline": "Internal elasticated drawstring with tailored front creases.",
    "description": "Internal elasticated drawstring with tailored front creases. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 360,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-04",
    "name": "S.S Double-Pleat Gurkha Trouser",
    "category": "pants",
    "price": 205,
    "originalPrice": 240,
    "tagline": "Extended crossover waistband with double brass side buckles.",
    "description": "Extended crossover waistband with double brass side buckles. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 380,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-05",
    "name": "S.S Cropped Tapered Wool Pants",
    "category": "pants",
    "price": 215,
    "tagline": "Clean ankle crop designed to highlight footwear.",
    "description": "Clean ankle crop designed to highlight footwear. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
    "additionalImages": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-06",
    "name": "S.S Heavy Cotton Canvas Work Pant",
    "category": "pants",
    "price": 175,
    "tagline": "Triple-stitched seams with silent magnetic pocket flaps.",
    "description": "Triple-stitched seams with silent magnetic pocket flaps. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 340,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-07",
    "name": "S.S Tech Nylon Tailored Trouser",
    "category": "pants",
    "price": 185,
    "originalPrice": 220,
    "tagline": "Water-resistant Italian technical fabric with tailored press.",
    "description": "Water-resistant Italian technical fabric with tailored press. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 360,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-08",
    "name": "S.S High-Waisted Sartorial Trouser",
    "category": "pants",
    "price": 195,
    "tagline": "Extended waistband with side tab adjusters and horn buttons.",
    "description": "Extended waistband with side tab adjusters and horn buttons. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 380,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-09",
    "name": "S.S Relaxed Chino Cotton Trouser",
    "category": "pants",
    "price": 205,
    "tagline": "340 GSM organic twill washed for a velvety peach-skin hand.",
    "description": "340 GSM organic twill washed for a velvety peach-skin hand. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
    "additionalImages": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-10",
    "name": "S.S Split-Hem Flare Trousers",
    "category": "pants",
    "price": 215,
    "originalPrice": 250,
    "tagline": "Concealed inner ankle zippers for adjustable shoe breaks.",
    "description": "Concealed inner ankle zippers for adjustable shoe breaks. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 340,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-11",
    "name": "S.S Architectural Pleated Wide Pants",
    "category": "pants",
    "price": 175,
    "tagline": "Exaggerated volume that flows effortlessly while in motion.",
    "description": "Exaggerated volume that flows effortlessly while in motion. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 360,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-12",
    "name": "S.S Linen-Cotton Summer Trouser",
    "category": "pants",
    "price": 185,
    "tagline": "Lightweight breathable weave tailored with front pleats.",
    "description": "Lightweight breathable weave tailored with front pleats. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 380,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-13",
    "name": "S.S Flat-Front Sartorial Trousers",
    "category": "pants",
    "price": 195,
    "originalPrice": 230,
    "tagline": "Streamlined front with bespoke interior curtain waistband.",
    "description": "Streamlined front with bespoke interior curtain waistband. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
    "additionalImages": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-14",
    "name": "S.S Corduroy Tailored Pants",
    "category": "pants",
    "price": 205,
    "tagline": "8-wale plush cotton corduroy with deep angled pockets.",
    "description": "8-wale plush cotton corduroy with deep angled pockets. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 340,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-15",
    "name": "S.S Cargo Tailored Hybrid Pants",
    "category": "pants",
    "price": 215,
    "tagline": "Streamlined flush cargo compartments with magnetic closure.",
    "description": "Streamlined flush cargo compartments with magnetic closure. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 360,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-pants-16",
    "name": "S.S Archive Runway Pleated Trousers",
    "category": "pants",
    "price": 175,
    "originalPrice": 210,
    "tagline": "Serialized edition from our flagship Milan presentation.",
    "description": "Serialized edition from our flagship Milan presentation. Milled from Virgin Wool & Organic Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Virgin Wool & Organic Cotton Twill",
    "weightGsm": 380,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Fluid Relaxed Drape",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-01",
    "name": "S.S 14oz Kurabo Selvedge Raw Denim",
    "category": "jeans",
    "price": 155,
    "originalPrice": 190,
    "tagline": "Unwashed shuttle-loom denim that fades uniquely to your body.",
    "description": "Unwashed shuttle-loom denim that fades uniquely to your body. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-02",
    "name": "S.S Washed Black Straight-Leg Jeans",
    "category": "jeans",
    "price": 165,
    "tagline": "Subtle stone-wash finish on heavyweight 100% cotton denim.",
    "description": "Subtle stone-wash finish on heavyweight 100% cotton denim. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-03",
    "name": "S.S Relaxed Wide Selvedge Jeans",
    "category": "jeans",
    "price": 175,
    "tagline": "Vintage 90s silhouette with red-line selvedge coin pocket.",
    "description": "Vintage 90s silhouette with red-line selvedge coin pocket. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-04",
    "name": "S.S Vintage Tint Bleached Denim",
    "category": "jeans",
    "price": 185,
    "originalPrice": 220,
    "tagline": "Artisanal light wash with authentic whiskering.",
    "description": "Artisanal light wash with authentic whiskering. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-05",
    "name": "S.S Tapered Raw Indigo Jeans",
    "category": "jeans",
    "price": 195,
    "tagline": "Fitted ankle taper that breaks cleanly over boots.",
    "description": "Fitted ankle taper that breaks cleanly over boots. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-06",
    "name": "S.S Ecru Natural Selvedge Jeans",
    "category": "jeans",
    "price": 155,
    "tagline": "Unbleached natural denim containing subtle cotton seed specks.",
    "description": "Unbleached natural denim containing subtle cotton seed specks. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-07",
    "name": "S.S Destroyed Knee Grunge Denim",
    "category": "jeans",
    "price": 165,
    "originalPrice": 200,
    "tagline": "Precision razor slashes with reinforced backing fabric.",
    "description": "Precision razor slashes with reinforced backing fabric. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-08",
    "name": "S.S Charcoal Fade Baggy Denim",
    "category": "jeans",
    "price": 175,
    "tagline": "Skater-inspired volume balanced with tailored waistband.",
    "description": "Skater-inspired volume balanced with tailored waistband. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-09",
    "name": "S.S Dark Resin Rinse Denim",
    "category": "jeans",
    "price": 185,
    "tagline": "Resin baked finish that preserves deep ink saturation.",
    "description": "Resin baked finish that preserves deep ink saturation. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-10",
    "name": "S.S Split-Hem Flared Denim",
    "category": "jeans",
    "price": 195,
    "originalPrice": 230,
    "tagline": "Subtle bootcut kick at the bottom with raw frayed hem.",
    "description": "Subtle bootcut kick at the bottom with raw frayed hem. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-11",
    "name": "S.S Carpenter Utility Denim",
    "category": "jeans",
    "price": 155,
    "tagline": "Hammer loop and utility leg pockets in 14.5oz denim.",
    "description": "Hammer loop and utility leg pockets in 14.5oz denim. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-12",
    "name": "S.S Double-Knee Reinforced Jeans",
    "category": "jeans",
    "price": 165,
    "tagline": "Heavy-duty paneling engineered for durable daily wear.",
    "description": "Heavy-duty paneling engineered for durable daily wear. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-13",
    "name": "S.S Acid Wash Minimalist Jeans",
    "category": "jeans",
    "price": 175,
    "originalPrice": 210,
    "tagline": "Modernized 80s marble wash with clean black hardware.",
    "description": "Modernized 80s marble wash with clean black hardware. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-14",
    "name": "S.S Stacked Skinny Waxed Denim",
    "category": "jeans",
    "price": 185,
    "tagline": "Black matte paraffin wax coating with extended 36\" inseam.",
    "description": "Black matte paraffin wax coating with extended 36\" inseam. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-15",
    "name": "S.S Cropped Hem Raw Denim",
    "category": "jeans",
    "price": 195,
    "tagline": "Pre-cropped 28\" inseam with chain-stitched hem.",
    "description": "Pre-cropped 28\" inseam with chain-stitched hem. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jeans-16",
    "name": "S.S Studio Archive Selvedge Jeans",
    "category": "jeans",
    "price": 155,
    "originalPrice": 190,
    "tagline": "Serialized leather patch with vintage copper hardware.",
    "description": "Serialized leather patch with vintage copper hardware. Milled from 13.5–15oz Kurabo Japanese Selvedge Denim. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "13.5–15oz Kurabo Japanese Selvedge Denim",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Straight Relaxed Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-01",
    "name": "S.S Double-Breasted Wool Trench Coat",
    "category": "coats",
    "price": 360,
    "originalPrice": 395,
    "tagline": "Substantial 680 GSM Melton wool with storm flap.",
    "description": "Substantial 680 GSM Melton wool with storm flap. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 550,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "550 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-02",
    "name": "S.S Single-Breasted Chesterfield Overcoat",
    "category": "coats",
    "price": 370,
    "tagline": "Hand-sewn velvet collar and horn button closures.",
    "description": "Hand-sewn velvet collar and horn button closures. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 570,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "570 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-03",
    "name": "S.S Belted Wool Robe Overcoat",
    "category": "coats",
    "price": 380,
    "tagline": "Unstructured wrap design with detachable self-fabric tie.",
    "description": "Unstructured wrap design with detachable self-fabric tie. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 590,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "590 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-04",
    "name": "S.S Cashmere Blend Car Coat",
    "category": "coats",
    "price": 390,
    "originalPrice": 425,
    "tagline": "Clean hidden placket with storm collar latch.",
    "description": "Clean hidden placket with storm collar latch. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 610,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "610 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-05",
    "name": "S.S Oversized Double-Faced Wool Coat",
    "category": "coats",
    "price": 400,
    "tagline": "Unlined luxury craftsmanship with invisible seam stitching.",
    "description": "Unlined luxury craftsmanship with invisible seam stitching. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 550,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "550 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-06",
    "name": "S.S Peacoat Heavy Melton Navy",
    "category": "coats",
    "price": 360,
    "tagline": "Nautical-inspired wide lapels with anchor-embossed buttons.",
    "description": "Nautical-inspired wide lapels with anchor-embossed buttons. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 570,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "570 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-07",
    "name": "S.S Technical Hooded Rain Overcoat",
    "category": "coats",
    "price": 370,
    "originalPrice": 405,
    "tagline": "Bonded 3-layer membrane with waterproof taped seams.",
    "description": "Bonded 3-layer membrane with waterproof taped seams. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 590,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "590 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-08",
    "name": "S.S Houndstooth Wool Bal Coat",
    "category": "coats",
    "price": 380,
    "tagline": "Raglan sleeves tailored in heritage black-and-cream weave.",
    "description": "Raglan sleeves tailored in heritage black-and-cream weave. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 610,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "610 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-09",
    "name": "S.S Duster Length Minimalist Coat",
    "category": "coats",
    "price": 390,
    "tagline": "Extended calf-length silhouette creating dramatic movement.",
    "description": "Extended calf-length silhouette creating dramatic movement. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 550,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "550 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-10",
    "name": "S.S Funnel Neck Melton Wool Coat",
    "category": "coats",
    "price": 400,
    "originalPrice": 435,
    "tagline": "High stand collar that eliminates need for winter scarves.",
    "description": "High stand collar that eliminates need for winter scarves. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 570,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "570 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-11",
    "name": "S.S Puffer Down Trench Hybrid",
    "category": "coats",
    "price": 360,
    "tagline": "800-fill goose down insulation encased in tailored wool.",
    "description": "800-fill goose down insulation encased in tailored wool. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 590,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "590 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-12",
    "name": "S.S Raw Seam Studio Overcoat",
    "category": "coats",
    "price": 370,
    "tagline": "Deconstructed edges with exposed contrast structural seams.",
    "description": "Deconstructed edges with exposed contrast structural seams. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 610,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "610 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-13",
    "name": "S.S Shearling Lined Wool Greatcoat",
    "category": "coats",
    "price": 380,
    "originalPrice": 415,
    "tagline": "Genuine plush shearling collar with double storm throat tab.",
    "description": "Genuine plush shearling collar with double storm throat tab. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 550,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "550 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-14",
    "name": "S.S Drop Shoulder Cocoon Coat",
    "category": "coats",
    "price": 390,
    "tagline": "Voluminous rounded shoulders that taper gracefully at hem.",
    "description": "Voluminous rounded shoulders that taper gracefully at hem. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 570,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "570 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-15",
    "name": "S.S Military Officer Wool Coat",
    "category": "coats",
    "price": 400,
    "tagline": "Sharp structured shoulder pads with tailored back half-belt.",
    "description": "Sharp structured shoulder pads with tailored back half-belt. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 590,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "590 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-coats-16",
    "name": "S.S Runway Edition Pure Cashmere Coat",
    "category": "coats",
    "price": 360,
    "originalPrice": 395,
    "tagline": "100% Mongolian Cashmere serialized archive release.",
    "description": "100% Mongolian Cashmere serialized archive release. Milled from Cashmere & Melton Wool Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Cashmere & Melton Wool Blends",
    "weightGsm": 610,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Architectural Overcoat Fit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "610 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-01",
    "name": "S.S Architectural Boxy Utility Jacket",
    "category": "jackets",
    "price": 240,
    "originalPrice": 275,
    "tagline": "Water-repellent Japanese canvas with hidden magnetic pockets.",
    "description": "Water-repellent Japanese canvas with hidden magnetic pockets. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
    "additionalImages": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-02",
    "name": "S.S MA-1 Modernist Bomber Jacket",
    "category": "jackets",
    "price": 250,
    "tagline": "Reversible emergency orange satin with matte black metal hardware.",
    "description": "Reversible emergency orange satin with matte black metal hardware. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 440,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-03",
    "name": "S.S Lambskin Leather Moto Jacket",
    "category": "jackets",
    "price": 260,
    "tagline": "Buttery Italian nappa leather with asymmetrical zipper.",
    "description": "Buttery Italian nappa leather with asymmetrical zipper. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 460,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "460 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-04",
    "name": "S.S Heavy Twill Coach Jacket",
    "category": "jackets",
    "price": 270,
    "originalPrice": 305,
    "tagline": "Snap closure with drawstring hem and satin quilted lining.",
    "description": "Snap closure with drawstring hem and satin quilted lining. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 480,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "480 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-05",
    "name": "S.S Tech Harrington Jacket",
    "category": "jackets",
    "price": 280,
    "tagline": "Stand collar with umbrella back yoke in technical microfiber.",
    "description": "Stand collar with umbrella back yoke in technical microfiber. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
    "additionalImages": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-06",
    "name": "S.S Cropped Down Puffer Jacket",
    "category": "jackets",
    "price": 240,
    "tagline": "Dense baffled chambers filled with 750-fill sustainable down.",
    "description": "Dense baffled chambers filled with 750-fill sustainable down. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 440,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-07",
    "name": "S.S Suede Trucker Jacket",
    "category": "jackets",
    "price": 250,
    "originalPrice": 285,
    "tagline": "Fine nap split suede in rich Cafe au Lait tones.",
    "description": "Fine nap split suede in rich Cafe au Lait tones. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 460,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "460 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-08",
    "name": "S.S Field Multi-Pocket Utility Jacket",
    "category": "jackets",
    "price": 260,
    "tagline": "Four bellows pockets with concealed waist cinch cords.",
    "description": "Four bellows pockets with concealed waist cinch cords. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 480,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "480 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-09",
    "name": "S.S Double-Zip Track Jacket",
    "category": "jackets",
    "price": 270,
    "tagline": "Heavy athletic interlock with contrast piped sleeve seams.",
    "description": "Heavy athletic interlock with contrast piped sleeve seams. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
    "additionalImages": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-10",
    "name": "S.S Wool Blend Varsity Jacket",
    "category": "jackets",
    "price": 280,
    "originalPrice": 315,
    "tagline": "Tonal black leather sleeves with heavyweight wool torso.",
    "description": "Tonal black leather sleeves with heavyweight wool torso. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 440,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-11",
    "name": "S.S Modular Hooded Windbreaker",
    "category": "jackets",
    "price": 240,
    "tagline": "Packable hood inside collar with storm-resistant zippers.",
    "description": "Packable hood inside collar with storm-resistant zippers. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 460,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "460 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-12",
    "name": "S.S Workwear Chore Denim Jacket",
    "category": "jackets",
    "price": 250,
    "tagline": "Reinforced patch pockets with brass rivet reinforcements.",
    "description": "Reinforced patch pockets with brass rivet reinforcements. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 480,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "480 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-13",
    "name": "S.S Anorak Pullover Quarter-Zip",
    "category": "jackets",
    "price": 260,
    "originalPrice": 295,
    "tagline": "Oversized center kangaroo pouch with side entry zippers.",
    "description": "Oversized center kangaroo pouch with side entry zippers. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
    "additionalImages": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-14",
    "name": "S.S Tactical Minimalist Vest Jacket",
    "category": "jackets",
    "price": 270,
    "tagline": "Sleeveless layering piece with magnetic modular attachments.",
    "description": "Sleeveless layering piece with magnetic modular attachments. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 440,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-15",
    "name": "S.S Flight B-3 Shearling Jacket",
    "category": "jackets",
    "price": 280,
    "tagline": "Thick sheepskin interior with rugged leather buckle straps.",
    "description": "Thick sheepskin interior with rugged leather buckle straps. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 460,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "460 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-jackets-16",
    "name": "S.S Limited Campaign Uniform Jacket",
    "category": "jackets",
    "price": 240,
    "originalPrice": 275,
    "tagline": "Featured in the Series 01 Runway Collection.",
    "description": "Featured in the Series 01 Runway Collection. Milled from Japanese Technical Canvas & Lambskin Leather. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Japanese Technical Canvas & Lambskin Leather",
    "weightGsm": 480,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Cropped Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "480 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-01",
    "name": "S.S 480 GSM Heavy Loopback Crewneck",
    "category": "sweatshirts",
    "price": 135,
    "originalPrice": 170,
    "tagline": "Thick ribbed collar and V-insert heritage athletic detail.",
    "description": "Thick ribbed collar and V-insert heritage athletic detail. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-02",
    "name": "S.S Vintage Washed Crewneck Sweatshirt",
    "category": "sweatshirts",
    "price": 145,
    "tagline": "Mineral wash with subtle abrasion around collar and cuffs.",
    "description": "Mineral wash with subtle abrasion around collar and cuffs. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 440,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-03",
    "name": "S.S Minimalist Tonal Embroidered Crewneck",
    "category": "sweatshirts",
    "price": 155,
    "tagline": "Tone-on-tone S.S insignia placed subtly on upper left chest.",
    "description": "Tone-on-tone S.S insignia placed subtly on upper left chest. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 460,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "460 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-04",
    "name": "S.S Raw Hem Boxy French Terry Sweatshirt",
    "category": "sweatshirts",
    "price": 165,
    "originalPrice": 200,
    "tagline": "Unfinished rolling hem that falls casually at waistline.",
    "description": "Unfinished rolling hem that falls casually at waistline. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 480,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "480 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-05",
    "name": "S.S Raglan Studio Fleece Sweatshirt",
    "category": "sweatshirts",
    "price": 175,
    "tagline": "Seamless raglan shoulders with flatlock interior stitching.",
    "description": "Seamless raglan shoulders with flatlock interior stitching. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-06",
    "name": "S.S Mockneck Heavy Sweatshirt",
    "category": "sweatshirts",
    "price": 135,
    "tagline": "3-inch ribbed mock collar for refined streetwear aesthetics.",
    "description": "3-inch ribbed mock collar for refined streetwear aesthetics. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 440,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-07",
    "name": "S.S Drop Shoulder Cropped Sweatshirt",
    "category": "sweatshirts",
    "price": 145,
    "originalPrice": 180,
    "tagline": "Wide chest measurement with shortened modern torso length.",
    "description": "Wide chest measurement with shortened modern torso length. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 460,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "460 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-08",
    "name": "S.S Thermal Paneled Crewneck",
    "category": "sweatshirts",
    "price": 155,
    "tagline": "Honeycomb thermal knit underarm panels for breathability.",
    "description": "Honeycomb thermal knit underarm panels for breathability. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 480,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "480 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-09",
    "name": "S.S Double-Knit Interlock Sweatshirt",
    "category": "sweatshirts",
    "price": 165,
    "tagline": "Ultra-smooth dual-face fabric with subtle matte sheen.",
    "description": "Ultra-smooth dual-face fabric with subtle matte sheen. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-10",
    "name": "S.S Asymmetrical Hem Pullover",
    "category": "sweatshirts",
    "price": 175,
    "originalPrice": 210,
    "tagline": "Stepped side slits with reinforced bar-tacked seams.",
    "description": "Stepped side slits with reinforced bar-tacked seams. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 440,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-11",
    "name": "S.S Contrast Stitch Minimal Sweatshirt",
    "category": "sweatshirts",
    "price": 135,
    "tagline": "Off-white topstitching outlining architectural pattern pieces.",
    "description": "Off-white topstitching outlining architectural pattern pieces. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 460,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "460 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-12",
    "name": "S.S Inside-Out French Terry Sweatshirt",
    "category": "sweatshirts",
    "price": 145,
    "tagline": "Exposed loopback texture on exterior body panels.",
    "description": "Exposed loopback texture on exterior body panels. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 480,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "480 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-13",
    "name": "S.S Oversized Winter Fleece Sweatshirt",
    "category": "sweatshirts",
    "price": 155,
    "originalPrice": 190,
    "tagline": "500 GSM Portuguese brushed fleece interior.",
    "description": "500 GSM Portuguese brushed fleece interior. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-14",
    "name": "S.S Quarter-Snap Studio Sweatshirt",
    "category": "sweatshirts",
    "price": 165,
    "tagline": "Matte black metal snaps on stand collar.",
    "description": "Matte black metal snaps on stand collar. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 440,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-15",
    "name": "S.S Heavy Terry Batwing Sweatshirt",
    "category": "sweatshirts",
    "price": 175,
    "tagline": "Dramatic batwing sleeve volume that tapers into tight cuffs.",
    "description": "Dramatic batwing sleeve volume that tapers into tight cuffs. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 460,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "460 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweatshirts-16",
    "name": "S.S Archive Monogram Pullover",
    "category": "sweatshirts",
    "price": 135,
    "originalPrice": 170,
    "tagline": "Numbered collector edition with woven atelier label.",
    "description": "Numbered collector edition with woven atelier label. Milled from Heavyweight Loopback Terry. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavyweight Loopback Terry",
    "weightGsm": 480,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Boxy Drop Shoulder",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "480 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-01",
    "name": "S.S Atelier Full Zip Tech Tracksuit",
    "category": "tracksuits",
    "price": 260,
    "originalPrice": 295,
    "tagline": "Two-piece coordinated ensemble with bonded tape seams.",
    "description": "Two-piece coordinated ensemble with bonded tape seams. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-02",
    "name": "S.S Monolith Heavy Terry Tracksuit",
    "category": "tracksuits",
    "price": 270,
    "tagline": "Includes 480 GSM zip jacket and matching tapered sweatpants.",
    "description": "Includes 480 GSM zip jacket and matching tapered sweatpants. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-03",
    "name": "S.S Velour Luxury Loungewear Tracksuit",
    "category": "tracksuits",
    "price": 280,
    "tagline": "Plush velvet cotton interlock in rich obsidian black.",
    "description": "Plush velvet cotton interlock in rich obsidian black. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-04",
    "name": "S.S Nylon Taslan Retro Tracksuit",
    "category": "tracksuits",
    "price": 290,
    "originalPrice": 325,
    "tagline": "Vintage crinkle nylon shell with breathable mesh lining.",
    "description": "Vintage crinkle nylon shell with breathable mesh lining. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-05",
    "name": "S.S Piped Seam Performance Tracksuit",
    "category": "tracksuits",
    "price": 300,
    "tagline": "Subtle white cord piping tracing the leg and arm lines.",
    "description": "Subtle white cord piping tracing the leg and arm lines. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-06",
    "name": "S.S Flared Leg Technical Tracksuit",
    "category": "tracksuits",
    "price": 260,
    "tagline": "Zippered bottom hems allowing custom flare over shoes.",
    "description": "Zippered bottom hems allowing custom flare over shoes. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-07",
    "name": "S.S Minimalist Half-Zip Tracksuit",
    "category": "tracksuits",
    "price": 270,
    "originalPrice": 305,
    "tagline": "Clean pullover top with concealed drawstring bottoms.",
    "description": "Clean pullover top with concealed drawstring bottoms. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-08",
    "name": "S.S Cargo Pocket Technical Tracksuit",
    "category": "tracksuits",
    "price": 280,
    "tagline": "Integrated utilitarian thigh pockets with silent snaps.",
    "description": "Integrated utilitarian thigh pockets with silent snaps. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-09",
    "name": "S.S French Terry Warmup Tracksuit",
    "category": "tracksuits",
    "price": 290,
    "tagline": "Pre-shrunk Portuguese terry built for all-day comfort.",
    "description": "Pre-shrunk Portuguese terry built for all-day comfort. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-10",
    "name": "S.S Seamless Knit Studio Tracksuit",
    "category": "tracksuits",
    "price": 300,
    "originalPrice": 335,
    "tagline": "Circular-knit construction with zero chafing seams.",
    "description": "Circular-knit construction with zero chafing seams. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-11",
    "name": "S.S Colorblock Minimal Tracksuit",
    "category": "tracksuits",
    "price": 260,
    "tagline": "Cafe au Lait and deep black paneled geometry.",
    "description": "Cafe au Lait and deep black paneled geometry. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-12",
    "name": "S.S Hooded Heavyweight Tracksuit",
    "category": "tracksuits",
    "price": 270,
    "tagline": "Includes structured double-layer hoodie and matching jogger.",
    "description": "Includes structured double-layer hoodie and matching jogger. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-13",
    "name": "S.S Studio Commuter Travel Tracksuit",
    "category": "tracksuits",
    "price": 280,
    "originalPrice": 315,
    "tagline": "Wrinkle-resistant technical fabric with passport pocket.",
    "description": "Wrinkle-resistant technical fabric with passport pocket. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-14",
    "name": "S.S Relaxed Fit Streetwear Tracksuit",
    "category": "tracksuits",
    "price": 290,
    "tagline": "Generous oversized proportion with elasticated cuffs.",
    "description": "Generous oversized proportion with elasticated cuffs. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-15",
    "name": "S.S Vintage Athlete Washed Tracksuit",
    "category": "tracksuits",
    "price": 300,
    "tagline": "Mineral washed for lived-in comfort right out of the box.",
    "description": "Mineral washed for lived-in comfort right out of the box. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-tracksuits-16",
    "name": "S.S Runway Edition Coordinated Tracksuit",
    "category": "tracksuits",
    "price": 260,
    "originalPrice": 295,
    "tagline": "Serialized limited release uniform from Series 01.",
    "description": "Serialized limited release uniform from Series 01. Milled from Tech Interlock & Poly-Cotton Weaves. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Tech Interlock & Poly-Cotton Weaves",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Athletic Modern Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-01",
    "name": "S.S 420 GSM Heavy Sweat Shorts",
    "category": "shorts",
    "price": 90,
    "originalPrice": 125,
    "tagline": "Deep front pockets with thick ribbed waistband and raw hem.",
    "description": "Deep front pockets with thick ribbed waistband and raw hem. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-02",
    "name": "S.S Pleated Tailored Bermuda Shorts",
    "category": "shorts",
    "price": 100,
    "tagline": "Sharp front pleats cut from lightweight virgin wool twill.",
    "description": "Sharp front pleats cut from lightweight virgin wool twill. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 340,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-03",
    "name": "S.S Minimalist Nylon Swim & Walk Shorts",
    "category": "shorts",
    "price": 110,
    "tagline": "Quick-dry Japanese nylon with internal mesh lining.",
    "description": "Quick-dry Japanese nylon with internal mesh lining. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 360,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-04",
    "name": "S.S Cargo Utility Shorts",
    "category": "shorts",
    "price": 120,
    "originalPrice": 155,
    "tagline": "Dual flat-profile cargo pockets with magnetic closures.",
    "description": "Dual flat-profile cargo pockets with magnetic closures. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 380,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-05",
    "name": "S.S Vintage Washed French Terry Shorts",
    "category": "shorts",
    "price": 130,
    "tagline": "Sun-faded pigment wash with soft brushed interior.",
    "description": "Sun-faded pigment wash with soft brushed interior. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-06",
    "name": "S.S 14oz Selvedge Denim Shorts",
    "category": "shorts",
    "price": 90,
    "tagline": "Cutoff hem with authentic red-line selvedge edge.",
    "description": "Cutoff hem with authentic red-line selvedge edge. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 340,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-07",
    "name": "S.S Linen Relaxed Summer Shorts",
    "category": "shorts",
    "price": 100,
    "originalPrice": 135,
    "tagline": "Breathable Belgian linen with elastic drawstring waist.",
    "description": "Breathable Belgian linen with elastic drawstring waist. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 360,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-08",
    "name": "S.S Double-Layer Mesh Athletic Shorts",
    "category": "shorts",
    "price": 110,
    "tagline": "Heavyweight basketball mesh with striped knit rib trim.",
    "description": "Heavyweight basketball mesh with striped knit rib trim. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 380,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-09",
    "name": "S.S Boxy Wide-Leg Studio Shorts",
    "category": "shorts",
    "price": 120,
    "tagline": "Generous leg opening designed for architectural volume.",
    "description": "Generous leg opening designed for architectural volume. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-10",
    "name": "S.S Tech Commuter Zippered Shorts",
    "category": "shorts",
    "price": 130,
    "originalPrice": 165,
    "tagline": "Concealed zip pockets for secure phone and card storage.",
    "description": "Concealed zip pockets for secure phone and card storage. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 340,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-11",
    "name": "S.S Painter Drill Cotton Shorts",
    "category": "shorts",
    "price": 90,
    "tagline": "Heavy cotton drill with utility tool pocket and hammer loop.",
    "description": "Heavy cotton drill with utility tool pocket and hammer loop. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 360,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-12",
    "name": "S.S Split-Hem French Terry Shorts",
    "category": "shorts",
    "price": 100,
    "tagline": "Side vents allowing complete freedom of movement.",
    "description": "Side vents allowing complete freedom of movement. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 380,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-13",
    "name": "S.S Drawstring Chino Shorts",
    "category": "shorts",
    "price": 110,
    "originalPrice": 145,
    "tagline": "Pre-washed stretch cotton twill with welt rear pockets.",
    "description": "Pre-washed stretch cotton twill with welt rear pockets. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-14",
    "name": "S.S Fleece Drop-Crotch Shorts",
    "category": "shorts",
    "price": 120,
    "tagline": "Subtle dropped crotch proportion for laid-back streetwear.",
    "description": "Subtle dropped crotch proportion for laid-back streetwear. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 340,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-15",
    "name": "S.S Tailored Gurkha Shorts",
    "category": "shorts",
    "price": 130,
    "tagline": "Crossover waistband with double side brass buckles.",
    "description": "Crossover waistband with double side brass buckles. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 360,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-shorts-16",
    "name": "S.S Archive Edition Lounge Shorts",
    "category": "shorts",
    "price": 90,
    "originalPrice": 125,
    "tagline": "Tonal S.S logo embroidery on left lower hem.",
    "description": "Tonal S.S logo embroidery on left lower hem. Milled from Heavy Loopback Terry & Cotton Twill. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Loopback Terry & Cotton Twill",
    "weightGsm": 380,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Above-The-Knee Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-01",
    "name": "S.S Peak Lapel Sartorial Tuxedo Jacket",
    "category": "formal-wear",
    "price": 320,
    "originalPrice": 355,
    "tagline": "Duchess satin lapels with hand-padded canvas chest piece.",
    "description": "Duchess satin lapels with hand-padded canvas chest piece. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 280,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-02",
    "name": "S.S Double-Breasted Wool Blazer",
    "category": "formal-wear",
    "price": 330,
    "tagline": "Six-button closure with structured roped shoulders.",
    "description": "Six-button closure with structured roped shoulders. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 300,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "300 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-03",
    "name": "S.S Modern Unstructured Evening Jacket",
    "category": "formal-wear",
    "price": 340,
    "tagline": "Unlined Italian wool allowing fluid drape over t-shirts.",
    "description": "Unlined Italian wool allowing fluid drape over t-shirts. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-04",
    "name": "S.S Tuxedo Trouser with Satin Stripe",
    "category": "formal-wear",
    "price": 350,
    "originalPrice": 385,
    "tagline": "Matching side satin braid with concealed waist clasp.",
    "description": "Matching side satin braid with concealed waist clasp. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 340,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-05",
    "name": "S.S Shawl Collar Velvet Dinner Jacket",
    "category": "formal-wear",
    "price": 360,
    "tagline": "Deep black silk velvet with satin covered buttons.",
    "description": "Deep black silk velvet with satin covered buttons. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 280,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-06",
    "name": "S.S Two-Piece Sartorial Wool Suit",
    "category": "formal-wear",
    "price": 320,
    "tagline": "Complete coordinated tailored jacket and single-pleat pant.",
    "description": "Complete coordinated tailored jacket and single-pleat pant. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 300,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "300 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-07",
    "name": "S.S Three-Piece Classic Tailored Suit",
    "category": "formal-wear",
    "price": 330,
    "originalPrice": 365,
    "tagline": "Includes matching five-button tailored wool waistcoat.",
    "description": "Includes matching five-button tailored wool waistcoat. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-08",
    "name": "S.S Band Collar Formal Evening Shirt",
    "category": "formal-wear",
    "price": 340,
    "tagline": "Hidden fly front designed for onyx tuxedo studs.",
    "description": "Hidden fly front designed for onyx tuxedo studs. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 340,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-09",
    "name": "S.S Silk Lapel Single-Button Blazer",
    "category": "formal-wear",
    "price": 350,
    "tagline": "Minimalist silhouette engineered for red carpet appearances.",
    "description": "Minimalist silhouette engineered for red carpet appearances. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 280,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-10",
    "name": "S.S High-Waisted Formal Cummerbund Trouser",
    "category": "formal-wear",
    "price": 360,
    "originalPrice": 395,
    "tagline": "Integrated pleated cummerbund waistband.",
    "description": "Integrated pleated cummerbund waistband. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 300,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "300 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-11",
    "name": "S.S Double-Breasted Pinstripe Suit",
    "category": "formal-wear",
    "price": 320,
    "tagline": "Subtle charcoal pinstripe woven from Super 150s wool.",
    "description": "Subtle charcoal pinstripe woven from Super 150s wool. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-12",
    "name": "S.S Wool Gabardine Evening Trench",
    "category": "formal-wear",
    "price": 330,
    "tagline": "Tailored specifically to layer smoothly over formal suits.",
    "description": "Tailored specifically to layer smoothly over formal suits. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 340,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-13",
    "name": "S.S Silk Twill Formal Necktie & Pocket Square",
    "category": "formal-wear",
    "price": 340,
    "originalPrice": 375,
    "tagline": "Hand-rolled edges crafted in Como, Italy.",
    "description": "Hand-rolled edges crafted in Como, Italy. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 280,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-14",
    "name": "S.S Concealed Button Tailored Overcoat",
    "category": "formal-wear",
    "price": 350,
    "tagline": "Pure wool evening overcoat with velvet collar accent.",
    "description": "Pure wool evening overcoat with velvet collar accent. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 300,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "300 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-15",
    "name": "S.S Grosgrain Trimmed Evening Suit",
    "category": "formal-wear",
    "price": 360,
    "tagline": "Textured matte grosgrain ribbon detailing on lapels and cuffs.",
    "description": "Textured matte grosgrain ribbon detailing on lapels and cuffs. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 320,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "320 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-formal-wear-16",
    "name": "S.S Archive Bespoke Runway Tuxedo",
    "category": "formal-wear",
    "price": 320,
    "originalPrice": 355,
    "tagline": "Serialized numbered tailoring from our private atelier.",
    "description": "Serialized numbered tailoring from our private atelier. Milled from Super 130s Italian Wool & Silk Satin. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Super 130s Italian Wool & Silk Satin",
    "weightGsm": 340,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Bespoke Sartorial Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-01",
    "name": "S.S Relaxed Linen-Cotton Pullover",
    "category": "casual-wear",
    "price": 115,
    "originalPrice": 150,
    "tagline": "Effortless open-collar silhouette for weekend leisure.",
    "description": "Effortless open-collar silhouette for weekend leisure. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-02",
    "name": "S.S Drawstring Casual Lounge Pant",
    "category": "casual-wear",
    "price": 125,
    "tagline": "Tapered cuff with deep pockets in ultra-soft jersey.",
    "description": "Tapered cuff with deep pockets in ultra-soft jersey. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 240,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-03",
    "name": "S.S Waffle Knit Long-Sleeve Shirt",
    "category": "casual-wear",
    "price": 135,
    "tagline": "Textured thermal weave with flatlock stitching.",
    "description": "Textured thermal weave with flatlock stitching. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-04",
    "name": "S.S Washed Cotton Canvas Slip-On Jacket",
    "category": "casual-wear",
    "price": 145,
    "originalPrice": 180,
    "tagline": "Unlined boxy chore coat for transitional weather.",
    "description": "Unlined boxy chore coat for transitional weather. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 280,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-05",
    "name": "S.S Drop-Crotch Casual Sweatpants",
    "category": "casual-wear",
    "price": 155,
    "tagline": "Relaxed street proportion with concealed drawstrings.",
    "description": "Relaxed street proportion with concealed drawstrings. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-06",
    "name": "S.S Henley Button Neck Cotton Shirt",
    "category": "casual-wear",
    "price": 115,
    "tagline": "Mother-of-pearl four-button placket on ribbed collar.",
    "description": "Mother-of-pearl four-button placket on ribbed collar. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 240,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-07",
    "name": "S.S Lightweight Tech Popover Top",
    "category": "casual-wear",
    "price": 125,
    "originalPrice": 160,
    "tagline": "Crinkle windproof fabric with elasticated cuffs.",
    "description": "Crinkle windproof fabric with elasticated cuffs. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-08",
    "name": "S.S Relaxed Linen Drawstring Shorts",
    "category": "casual-wear",
    "price": 135,
    "tagline": "Pure Belgian linen washed for immediate broken-in comfort.",
    "description": "Pure Belgian linen washed for immediate broken-in comfort. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 280,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-09",
    "name": "S.S Casual Camp Shirt in Cafe au Lait",
    "category": "casual-wear",
    "price": 145,
    "tagline": "Signature brand palette in breezy garment-dyed cotton.",
    "description": "Signature brand palette in breezy garment-dyed cotton. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-10",
    "name": "S.S Slub Jersey Everyday Long-Sleeve",
    "category": "casual-wear",
    "price": 155,
    "originalPrice": 190,
    "tagline": "Breathable organic slub yarn with natural texture.",
    "description": "Breathable organic slub yarn with natural texture. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 240,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-11",
    "name": "S.S Utility Pocket Casual Over-Tee",
    "category": "casual-wear",
    "price": 115,
    "tagline": "Heavyweight t-shirt with functional chest pocket.",
    "description": "Heavyweight t-shirt with functional chest pocket. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-12",
    "name": "S.S Soft Fleece Quarter-Zip Pullover",
    "category": "casual-wear",
    "price": 125,
    "tagline": "Stand collar with easy-glide YKK zipper.",
    "description": "Stand collar with easy-glide YKK zipper. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 280,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-13",
    "name": "S.S Tapered Jogger with Ribbed Ankle",
    "category": "casual-wear",
    "price": 135,
    "originalPrice": 170,
    "tagline": "Tailored leg shape that fits seamlessly into sneakers.",
    "description": "Tailored leg shape that fits seamlessly into sneakers. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-14",
    "name": "S.S Banded Collar Poplin Casual Shirt",
    "category": "casual-wear",
    "price": 145,
    "tagline": "Relaxed hem that looks effortless worn untucked.",
    "description": "Relaxed hem that looks effortless worn untucked. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 240,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-15",
    "name": "S.S Washed Canvas Everyday Chino",
    "category": "casual-wear",
    "price": 155,
    "tagline": "Garment washed to eliminate stiffness and shrinkage.",
    "description": "Garment washed to eliminate stiffness and shrinkage. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-casual-wear-16",
    "name": "S.S Archive Casual Uniform Set",
    "category": "casual-wear",
    "price": 115,
    "originalPrice": 150,
    "tagline": "Curated two-piece matching shirt and pant ensemble.",
    "description": "Curated two-piece matching shirt and pant ensemble. Milled from Organic Cotton, Linen & Lyocell. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Organic Cotton, Linen & Lyocell",
    "weightGsm": 280,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Effortless Casual Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-01",
    "name": "S.S 380 GSM Japanese Twill Overshirt",
    "category": "overshirts",
    "price": 175,
    "originalPrice": 210,
    "tagline": "Concealed front placket with bio-resin matte buttons.",
    "description": "Concealed front placket with bio-resin matte buttons. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 340,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
    "additionalImages": [
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-02",
    "name": "S.S Heavy 8-Wale Corduroy Overshirt",
    "category": "overshirts",
    "price": 185,
    "tagline": "Plush wide-wale corduroy with dual flap chest pockets.",
    "description": "Plush wide-wale corduroy with dual flap chest pockets. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 360,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-03",
    "name": "S.S Melton Wool Blend CPO Shirt",
    "category": "overshirts",
    "price": 195,
    "tagline": "Naval Chief Petty Officer silhouette in 420 GSM wool.",
    "description": "Naval Chief Petty Officer silhouette in 420 GSM wool. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-04",
    "name": "S.S Canvas Workwear Chore Overshirt",
    "category": "overshirts",
    "price": 205,
    "originalPrice": 240,
    "tagline": "Bar-tacked patch pockets with heavy thread topstitching.",
    "description": "Bar-tacked patch pockets with heavy thread topstitching. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 400,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-05",
    "name": "S.S Quilted Liner Insulated Overshirt",
    "category": "overshirts",
    "price": 215,
    "tagline": "Diamond quilted nylon with 80 GSM lightweight thermal fill.",
    "description": "Diamond quilted nylon with 80 GSM lightweight thermal fill. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 340,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
    "additionalImages": [
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-06",
    "name": "S.S Suede-Finish Heavy Flannel Overshirt",
    "category": "overshirts",
    "price": 175,
    "tagline": "Double-brushed cotton flannel in deep charcoal melange.",
    "description": "Double-brushed cotton flannel in deep charcoal melange. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 360,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-07",
    "name": "S.S Technical Ripstop Overshirt",
    "category": "overshirts",
    "price": 185,
    "originalPrice": 220,
    "tagline": "Water-resistant micro-ripstop with concealed zipper pockets.",
    "description": "Water-resistant micro-ripstop with concealed zipper pockets. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-08",
    "name": "S.S Zip-Front Minimalist Overshirt",
    "category": "overshirts",
    "price": 195,
    "tagline": "Full two-way zipper replacing traditional front buttons.",
    "description": "Full two-way zipper replacing traditional front buttons. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 400,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-09",
    "name": "S.S Raw Denim Chore Overshirt",
    "category": "overshirts",
    "price": 205,
    "tagline": "12oz Japanese denim that develops custom fades over time.",
    "description": "12oz Japanese denim that develops custom fades over time. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 340,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
    "additionalImages": [
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-10",
    "name": "S.S Stand Collar Minimalist Overshirt",
    "category": "overshirts",
    "price": 215,
    "originalPrice": 250,
    "tagline": "Mandarin collar with straight hem and split side seams.",
    "description": "Mandarin collar with straight hem and split side seams. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 360,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-11",
    "name": "S.S Wool Flannel Field Overshirt",
    "category": "overshirts",
    "price": 175,
    "tagline": "Warm virgin wool blend tailored for autumn layering.",
    "description": "Warm virgin wool blend tailored for autumn layering. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-12",
    "name": "S.S Herringbone Twill Overshirt",
    "category": "overshirts",
    "price": 185,
    "tagline": "Subtle military chevron weave with tonal black buttons.",
    "description": "Subtle military chevron weave with tonal black buttons. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 400,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-13",
    "name": "S.S Double-Pocket Boxy Overshirt",
    "category": "overshirts",
    "price": 195,
    "originalPrice": 230,
    "tagline": "Oversized chest storage with hidden internal pen slot.",
    "description": "Oversized chest storage with hidden internal pen slot. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 340,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
    "additionalImages": [
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "340 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-14",
    "name": "S.S Snap-Button Technical Overshirt",
    "category": "overshirts",
    "price": 205,
    "tagline": "Matte black metal studs for rapid on-and-off transitions.",
    "description": "Matte black metal studs for rapid on-and-off transitions. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 360,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "360 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-15",
    "name": "S.S Vintage Washed Twill Overshirt",
    "category": "overshirts",
    "price": 215,
    "tagline": "Soft worn-in feel with gentle puckering around the collar.",
    "description": "Soft worn-in feel with gentle puckering around the collar. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-overshirts-16",
    "name": "S.S Archive Runway Serialized Overshirt",
    "category": "overshirts",
    "price": 175,
    "originalPrice": 210,
    "tagline": "Numbered collector edition with custom woven back label.",
    "description": "Numbered collector edition with custom woven back label. Milled from Heavy Cotton Canvas, Corduroy & Melton Wool. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Heavy Cotton Canvas, Corduroy & Melton Wool",
    "weightGsm": 400,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Layering Boxy Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "/src/assets/images/ss_atelier_overshirt_1790669837619.jpg",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-01",
    "name": "S.S Chunky Ribbed Fisherman Sweater",
    "category": "sweaters",
    "price": 200,
    "originalPrice": 235,
    "tagline": "5-gauge heavy knit from 100% British wool.",
    "description": "5-gauge heavy knit from 100% British wool. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-02",
    "name": "S.S Pure Mongolian Cashmere Crewneck",
    "category": "sweaters",
    "price": 210,
    "tagline": "Ultra-soft 12-gauge two-ply yarn with featherlight warmth.",
    "description": "Ultra-soft 12-gauge two-ply yarn with featherlight warmth. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-03",
    "name": "S.S Roll-Neck Heavy Knit Turtleneck",
    "category": "sweaters",
    "price": 220,
    "tagline": "Foldover ribbed collar that holds posture without sagging.",
    "description": "Foldover ribbed collar that holds posture without sagging. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-04",
    "name": "S.S Alpaca Boucle Textured Sweater",
    "category": "sweaters",
    "price": 230,
    "originalPrice": 265,
    "tagline": "Fluffy looped boucle yarn with rich tactile depth.",
    "description": "Fluffy looped boucle yarn with rich tactile depth. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-05",
    "name": "S.S Waffle Stitch Merino Wool Sweater",
    "category": "sweaters",
    "price": 240,
    "tagline": "Breathable honeycomb stitch offering exceptional heat retention.",
    "description": "Breathable honeycomb stitch offering exceptional heat retention. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-06",
    "name": "S.S Distressed Edge Mohair Sweater",
    "category": "sweaters",
    "price": 200,
    "tagline": "Subtle open knit with artisanal distressed hems.",
    "description": "Subtle open knit with artisanal distressed hems. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-07",
    "name": "S.S Drop Shoulder Cardigan Sweater",
    "category": "sweaters",
    "price": 210,
    "originalPrice": 245,
    "tagline": "Oversized four-button cardigan with horn buttons.",
    "description": "Oversized four-button cardigan with horn buttons. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-08",
    "name": "S.S Cable Knit Architectural Sweater",
    "category": "sweaters",
    "price": 220,
    "tagline": "Modernized asymmetrical cable pattern in dense merino.",
    "description": "Modernized asymmetrical cable pattern in dense merino. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-09",
    "name": "S.S Mockneck Merino Wool Pullover",
    "category": "sweaters",
    "price": 230,
    "tagline": "Clean mid-height collar engineered for minimal layering.",
    "description": "Clean mid-height collar engineered for minimal layering. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-10",
    "name": "S.S Gradient Knit Ombre Sweater",
    "category": "sweaters",
    "price": 240,
    "originalPrice": 275,
    "tagline": "Hand-dyed gradual fade from Cafe au Lait to pitch black.",
    "description": "Hand-dyed gradual fade from Cafe au Lait to pitch black. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-11",
    "name": "S.S Seamless Circular Knit Sweater",
    "category": "sweaters",
    "price": 200,
    "tagline": "Zero shoulder or side seams for pure fluid drape.",
    "description": "Zero shoulder or side seams for pure fluid drape. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-12",
    "name": "S.S Ribbed Quarter-Zip Wool Pullover",
    "category": "sweaters",
    "price": 210,
    "tagline": "Heavy silver zipper on substantial stand collar.",
    "description": "Heavy silver zipper on substantial stand collar. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-13",
    "name": "S.S V-Neck Relaxed Cashmere Sweater",
    "category": "sweaters",
    "price": 220,
    "originalPrice": 255,
    "tagline": "Modern shallow V-neck that frames crewneck tees cleanly.",
    "description": "Modern shallow V-neck that frames crewneck tees cleanly. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-14",
    "name": "S.S Heavy Cotton Knit Summer Sweater",
    "category": "sweaters",
    "price": 230,
    "tagline": "Breathable tape yarn engineered for cool summer nights.",
    "description": "Breathable tape yarn engineered for cool summer nights. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-15",
    "name": "S.S Contrast Trim Minimalist Sweater",
    "category": "sweaters",
    "price": 240,
    "tagline": "Off-white tipping on cuff and hem for subtle definition.",
    "description": "Off-white tipping on cuff and hem for subtle definition. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-sweaters-16",
    "name": "S.S Archive Runway Serialized Knit",
    "category": "sweaters",
    "price": 200,
    "originalPrice": 235,
    "tagline": "Hand-finished in Northern Italy in small numbered batches.",
    "description": "Hand-finished in Northern Italy in small numbered batches. Milled from Merino Wool, Cashmere & Alpaca Blends. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Merino Wool, Cashmere & Alpaca Blends",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Relaxed Sculptural Knit",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-01",
    "name": "S.S Mercerized Pima Cotton Knit Polo",
    "category": "polo-shirts",
    "price": 105,
    "originalPrice": 140,
    "tagline": "High-twist yarn with subtle silk sheen and buttonless open placket.",
    "description": "High-twist yarn with subtle silk sheen and buttonless open placket. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-02",
    "name": "S.S Buttonless Johnny Collar Polo",
    "category": "polo-shirts",
    "price": 115,
    "tagline": "Clean V-neck collar inspired by 1960s Italian Riviera style.",
    "description": "Clean V-neck collar inspired by 1960s Italian Riviera style. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 240,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-03",
    "name": "S.S Long Sleeve Heavyweight Polo",
    "category": "polo-shirts",
    "price": 125,
    "tagline": "280 GSM cotton pique with ribbed cuffs and mother-of-pearl buttons.",
    "description": "280 GSM cotton pique with ribbed cuffs and mother-of-pearl buttons. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-04",
    "name": "S.S Textured Waffle Knit Polo",
    "category": "polo-shirts",
    "price": 135,
    "originalPrice": 170,
    "tagline": "Breathable geometric weave with solid rib collar.",
    "description": "Breathable geometric weave with solid rib collar. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 280,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-05",
    "name": "S.S Fine Silk-Cotton Blend Polo",
    "category": "polo-shirts",
    "price": 145,
    "tagline": "Ultra-lightweight drape designed for warm weather sophistication.",
    "description": "Ultra-lightweight drape designed for warm weather sophistication. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-06",
    "name": "S.S Zip-Neck Modernist Polo",
    "category": "polo-shirts",
    "price": 105,
    "tagline": "Concealed metal zipper replacing traditional button placket.",
    "description": "Concealed metal zipper replacing traditional button placket. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 240,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-07",
    "name": "S.S Tonal Monogram Cotton Pique Polo",
    "category": "polo-shirts",
    "price": 115,
    "originalPrice": 150,
    "tagline": "Subtle S.S insignia embroidered on left chest in tonal thread.",
    "description": "Subtle S.S insignia embroidered on left chest in tonal thread. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-08",
    "name": "S.S Oversized Boxy Streetwear Polo",
    "category": "polo-shirts",
    "price": 125,
    "tagline": "Dropped shoulders with elbow-length sleeves.",
    "description": "Dropped shoulders with elbow-length sleeves. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 280,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-09",
    "name": "S.S Retro Striped Rib Knit Polo",
    "category": "polo-shirts",
    "price": 135,
    "tagline": "Subtle chest horizontal stripes in tonal Cafe au Lait and black.",
    "description": "Subtle chest horizontal stripes in tonal Cafe au Lait and black. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-10",
    "name": "S.S Band Collar Minimal Polo",
    "category": "polo-shirts",
    "price": 145,
    "originalPrice": 180,
    "tagline": "Stand-up mandarin neck with hidden snap closure.",
    "description": "Stand-up mandarin neck with hidden snap closure. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 240,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-11",
    "name": "S.S Slub Cotton Relaxed Polo",
    "category": "polo-shirts",
    "price": 105,
    "tagline": "Organic slub texture offering relaxed vacation elegance.",
    "description": "Organic slub texture offering relaxed vacation elegance. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-12",
    "name": "S.S Split-Hem Athletic Golf Polo",
    "category": "polo-shirts",
    "price": 115,
    "tagline": "Moisture-wicking technical pique with four-way stretch.",
    "description": "Moisture-wicking technical pique with four-way stretch. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 280,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-13",
    "name": "S.S Double-Stitch Pocket Polo",
    "category": "polo-shirts",
    "price": 125,
    "originalPrice": 160,
    "tagline": "Clean chest pocket with reinforced bar-tacks.",
    "description": "Clean chest pocket with reinforced bar-tacks. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 220,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "220 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1625910513413-7e47f2db3a09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-14",
    "name": "S.S Contrast Rib Knit Collar Polo",
    "category": "polo-shirts",
    "price": 135,
    "tagline": "Off-white collar contrasting against deep pitch black body.",
    "description": "Off-white collar contrasting against deep pitch black body. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 240,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "240 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-15",
    "name": "S.S Terry Cloth Toweling Beach Polo",
    "category": "polo-shirts",
    "price": 145,
    "tagline": "Ultra-soft cotton terry cloth for effortless poolside drape.",
    "description": "Ultra-soft cotton terry cloth for effortless poolside drape. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 260,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "260 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-polo-shirts-16",
    "name": "S.S Archive Edition Serialized Polo",
    "category": "polo-shirts",
    "price": 105,
    "originalPrice": 140,
    "tagline": "Numbered run crafted from Egyptian Giza 87 cotton.",
    "description": "Numbered run crafted from Egyptian Giza 87 cotton. Milled from Mercerized Pima Cotton & Fine Silk Knits. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Mercerized Pima Cotton & Fine Silk Knits",
    "weightGsm": 280,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Tailored Minimalist Cut",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": false,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "280 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-01",
    "name": "S.S Edition 01 Architectural Parka",
    "category": "new-arrivals",
    "price": 190,
    "originalPrice": 225,
    "tagline": "3-layer technical shell with concealed storm hood.",
    "description": "3-layer technical shell with concealed storm hood. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
    "additionalImages": [
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-02",
    "name": "S.S Monolith Flared Trouser Drop 02",
    "category": "new-arrivals",
    "price": 200,
    "tagline": "Ankle break flare with deep structured knife pleats.",
    "description": "Ankle break flare with deep structured knife pleats. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
    "additionalImages": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": true,
    "isNew": true,
    "isBestSeller": true,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-03",
    "name": "S.S Heavy Terry Raw Cut Hoodie Drop",
    "category": "new-arrivals",
    "price": 210,
    "tagline": "Custom cold dye wash in signature Cafe au Lait.",
    "description": "Custom cold dye wash in signature Cafe au Lait. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
    "additionalImages": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-04",
    "name": "S.S Cropped Tailored Bomber Jacket",
    "category": "new-arrivals",
    "price": 220,
    "originalPrice": 255,
    "tagline": "Sculptural silhouette with heavy two-way metal closure.",
    "description": "Sculptural silhouette with heavy two-way metal closure. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
    "additionalImages": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-05",
    "name": "S.S Kurabo 15oz Wide Selvedge Denim",
    "category": "new-arrivals",
    "price": 230,
    "tagline": "Raw untreated Japanese denim with custom copper rivets.",
    "description": "Raw untreated Japanese denim with custom copper rivets. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
    "additionalImages": [
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-06",
    "name": "S.S Double-Faced Cashmere Cape Coat",
    "category": "new-arrivals",
    "price": 190,
    "tagline": "Hand-finished reversible overcoat in monochrome black.",
    "description": "Hand-finished reversible overcoat in monochrome black. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
    "additionalImages": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-07",
    "name": "S.S Asymmetrical Zip Flight Jacket",
    "category": "new-arrivals",
    "price": 200,
    "originalPrice": 235,
    "tagline": "Diagonal zip closure with modular storm collar.",
    "description": "Diagonal zip closure with modular storm collar. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
    "additionalImages": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 58,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-08",
    "name": "S.S Heavy Gauged Mohair Cardigan",
    "category": "new-arrivals",
    "price": 210,
    "tagline": "Brushed mohair blend in rich earthy tones.",
    "description": "Brushed mohair blend in rich earthy tones. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
    "additionalImages": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 61,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-09",
    "name": "S.S Tailored Leather Bermuda Shorts",
    "category": "new-arrivals",
    "price": 220,
    "tagline": "Supple lambskin leather with tailored front pleat.",
    "description": "Supple lambskin leather with tailored front pleat. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
    "additionalImages": [
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 64,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-10",
    "name": "S.S Structural Stand-Collar Poplin Shirt",
    "category": "new-arrivals",
    "price": 230,
    "originalPrice": 265,
    "tagline": "High sculptural neck with hidden mother-of-pearl placket.",
    "description": "High sculptural neck with hidden mother-of-pearl placket. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
    "additionalImages": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 67,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-11",
    "name": "S.S 500 GSM Monolith Boxy Pullover",
    "category": "new-arrivals",
    "price": 190,
    "tagline": "Ultra-dense Portuguese fleece with minimal chest mark.",
    "description": "Ultra-dense Portuguese fleece with minimal chest mark. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
    "additionalImages": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 40,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-12",
    "name": "S.S Silk Satin Formal Evening Suit",
    "category": "new-arrivals",
    "price": 200,
    "tagline": "Sharp peak lapels with fluid matching trousers.",
    "description": "Sharp peak lapels with fluid matching trousers. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
    "additionalImages": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 43,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-13",
    "name": "S.S Mercerized Mockneck Long Sleeve",
    "category": "new-arrivals",
    "price": 210,
    "originalPrice": 245,
    "tagline": "Silk-like hand feel with high neck for elevated layering.",
    "description": "Silk-like hand feel with high neck for elevated layering. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 380,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2A2A2A",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Bone Off-White",
        "hex": "#EBE7DE",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
    "additionalImages": [
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 46,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "380 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-14",
    "name": "S.S Technical Shell Commuter Cargo",
    "category": "new-arrivals",
    "price": 220,
    "tagline": "Silent magnetic pocket flaps with articulated knee darts.",
    "description": "Silent magnetic pocket flaps with articulated knee darts. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 400,
    "color": "Matte Obsidian",
    "colors": [
      {
        "name": "Matte Obsidian",
        "hex": "#141414",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Dark Slate",
        "hex": "#3C4043",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
    "additionalImages": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 49,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "400 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_architectural_jacket_1790608094780.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-15",
    "name": "S.S Double-Layered Thermal Trench",
    "category": "new-arrivals",
    "price": 230,
    "tagline": "Removable quilted vest liner inside water-repellent shell.",
    "description": "Removable quilted vest liner inside water-repellent shell. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 420,
    "color": "Pitch Black",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#111111",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Warm Cream",
        "hex": "#F3EFE6",
        "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Raw Umber",
        "hex": "#735843",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
    "additionalImages": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 52,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "420 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_heavyweight_black_hoodie_1790608051807.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "ss-new-arrivals-16",
    "name": "S.S Series 01 Campaign Look 01 Set",
    "category": "new-arrivals",
    "price": 190,
    "originalPrice": 225,
    "tagline": "The complete runway look: S.S Hoodie + Tailored Trouser.",
    "description": "The complete runway look: S.S Hoodie + Tailored Trouser. Milled from Series 01 Limited Production Textiles. Engineered for architectural distinction and long-lasting form. Tailored in limited small-batch editions at our European atelier.",
    "fabric": "Series 01 Limited Production Textiles",
    "weightGsm": 440,
    "color": "Deep Black",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0F0F0F",
        "image": "/src/assets/images/ss_hero_male_model_1790763158760.jpg"
      },
      {
        "name": "Stone Grey",
        "hex": "#777571",
        "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Cafe au Lait",
        "hex": "#A67B5B",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "fit": "Runway Architectural Silhouette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
    "additionalImages": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    "stock": 55,
    "featured": false,
    "isNew": true,
    "isBestSeller": false,
    "inStock": true,
    "details": [
      "440 GSM premium architectural fabric",
      "Minimalist S.S chest branding with tonal embroidery",
      "Pre-shrunk cold wash formulation for permanent fit stability",
      "Double-needle reinforced construction throughout",
      "Manufactured in limited serialized quantities in Porto, Portugal"
    ],
    "images": [
      "/src/assets/images/ss_relaxed_tailored_pants_1790608068705.jpg",
      "/src/assets/images/ss_hero_male_model_1790763158760.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export const CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'All Items' },
  { id: 'hoodies', label: 'Hoodies' },
  { id: 't-shirts', label: 'T-Shirts' },
  { id: 'shirts', label: 'Shirts' },
  { id: 'pants', label: 'Pants' },
  { id: 'jeans', label: 'Jeans' },
  { id: 'coats', label: 'Coats' },
  { id: 'jackets', label: 'Jackets' },
  { id: 'sweatshirts', label: 'Sweatshirts' },
  { id: 'tracksuits', label: 'Tracksuits' },
  { id: 'shorts', label: 'Shorts' },
  { id: 'formal-wear', label: 'Formal Wear' },
  { id: 'casual-wear', label: 'Casual Wear' },
  { id: 'overshirts', label: 'Overshirts' },
  { id: 'sweaters', label: 'Sweaters' },
  { id: 'polo-shirts', label: 'Polo Shirts' },
  { id: 'new-arrivals', label: 'New Arrivals' },
];

/**
 * Returns the color-specific image for a product given a selected color name.
 * Falls back to product.image if no matching color image exists.
 */
export function getProductColorImage(product: Product, colorName?: string): string {
  if (!colorName) return product.image;
  const match = product.colors?.find(c => c.name.toLowerCase() === colorName.toLowerCase());
  if (match?.image) return match.image;
  return product.image;
}

