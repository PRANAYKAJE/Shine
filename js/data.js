const products = [
  {
    id: 1,
    name: "Moondust Sparkle Hand Jewellery",
    price: 899,
    salePrice: 1999,
    category: "hand-jewellery",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-05-26at1.18.13PM_2.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-05-26at1.18.13PM_2.jpg",
      "https://jewelsmars.com/cdn/shop/files/29D5D6C5-79AC-4E4E-B3A2-4008B3A7CD94.jpg"
    ],
    hotSelling: true,
    description: "Beautiful hand jewellery with sparkling moondust design"
  },
  {
    id: 2,
    name: "Arabian Princess Hand Chain",
    price: 499,
    salePrice: 999,
    category: "hand-jewellery",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-07-14at12.57.55PM.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-07-14at12.57.55PM.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-07-14at12.57.55PM_1.jpg"
    ],
    hotSelling: true,
    description: "Elegant Arabian princess style hand chain"
  },
  {
    id: 3,
    name: "Midnight Spark Rhinestone Hand Jewellery",
    price: 899,
    salePrice: 1899,
    category: "hand-jewellery",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2026-02-06at6.38.57PM_2.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2026-02-06at6.38.57PM_2.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2026-02-06at6.38.57PM.jpg"
    ],
    hotSelling: true,
    description: "Stunning midnight spark rhinestone hand jewellery"
  },
  {
    id: 4,
    name: "Crystal Glass Earrings",
    price: 199,
    salePrice: 350,
    category: "earrings",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2024-07-21at1.48.23PM.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2024-07-21at1.48.23PM.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2024-07-21at1.48.24PM.jpg"
    ],
    hotSelling: true,
    description: "Beautiful crystal glass earrings"
  },
  {
    id: 5,
    name: "Flash n Flare Rhinestone Earrings",
    price: 386,
    salePrice: 1299,
    category: "earrings",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-09-17at2.32.59PM_1.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-09-17at2.32.59PM_1.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-09-17at2.32.59PM_2.jpg"
    ],
    hotSelling: true,
    description: "Flash n flare rhinestone earrings"
  },
  {
    id: 6,
    name: "Viral Stackable Bracelet",
    price: 190,
    salePrice: 499,
    category: "bracelets",
    image: "https://jewelsmars.com/cdn/shop/files/0FE87005-10BC-427F-AB4F-B351D4012B1E.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/0FE87005-10BC-427F-AB4F-B351D4012B1E.jpg",
      "https://jewelsmars.com/cdn/shop/files/9F167771-E691-4C85-9E84-010296CC0C68.jpg"
    ],
    hotSelling: true,
    colors: ["Soft white", "brown", "transparent", "Orange", "Black", "Maroon"],
    description: "Trendy viral stackable bracelet"
  },
  {
    id: 7,
    name: "Golden Getter Statement Necklace",
    price: 499,
    salePrice: 999,
    category: "necklace",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-07-17at2.11.02PM.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-07-17at2.11.02PM.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-07-17at2.11.02PM_1.jpg"
    ],
    hotSelling: true,
    description: "Golden getter statement necklace"
  },
  {
    id: 8,
    name: "Drama Queen Earrings",
    price: 249,
    salePrice: 799,
    category: "earrings",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-04-27at1.34.17AM_1.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-04-27at1.34.17AM_1.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-04-27at1.34.17AM.jpg"
    ],
    hotSelling: true,
    description: "Drama queen earrings"
  },
  {
    id: 9,
    name: "Danglers in Scarlet Earrings",
    price: 249,
    salePrice: 599,
    category: "earrings",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-03at11.44.09AM.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-03at11.44.09AM.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-03at11.44.08AM_1.jpg"
    ],
    hotSelling: true,
    description: "Beautiful danglers in scarlet earrings"
  },
  {
    id: 10,
    name: "Fae Bloom Dangling Ring",
    price: 279,
    salePrice: 599,
    category: "rings",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-06at1.10.22PM_2.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-06at1.10.22PM_2.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-06at1.10.22PM_1.jpg"
    ],
    hotSelling: true,
    description: "Fae bloom dangling ring"
  },
  {
    id: 11,
    name: "Florist in Pink Ring",
    price: 199,
    salePrice: 499,
    category: "rings",
    image: "https://jewelsmars.com/cdn/shop/files/B7D08CA6-AA05-4575-A08B-74C728BE0E8E.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/B7D08CA6-AA05-4575-A08B-74C728BE0E8E.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-02at6.17.12PM_1.jpg"
    ],
    hotSelling: true,
    description: "Florist in pink ring"
  },
  {
    id: 12,
    name: "Gabriela Cross Necklace",
    price: 399,
    salePrice: 999,
    category: "necklace",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-24at11.03.11AM.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-24at11.03.11AM.jpg"
    ],
    hotSelling: true,
    description: "Gabriela cross necklace"
  },
  {
    id: 13,
    name: "Checkered Daisies Hair Clips",
    price: 120,
    salePrice: 399,
    category: "hair-accessories",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-18at4.15.34PM.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-18at4.15.34PM.jpg"
    ],
    hotSelling: true,
    description: "Checkered daisies hair clips"
  },
  {
    id: 14,
    name: "Y2k spotted Claw Clip",
    price: 99,
    salePrice: 249,
    category: "hair-accessories",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-27at11.27.38AM.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-27at11.27.38AM.jpg",
      "https://jewelsmars.com/cdn/shop/files/96ED8631-E5B4-4897-A726-B5AEF329479F.jpg"
    ],
    hotSelling: true,
    description: "Y2k spotted claw clip"
  },
  {
    id: 15,
    name: "Classic Satin Scrunchie",
    price: 77,
    salePrice: 199,
    category: "hair-accessories",
    image: "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-30at11.22.16AM_3.jpg",
    images: [
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-30at11.22.16AM_3.jpg",
      "https://jewelsmars.com/cdn/shop/files/WhatsAppImage2025-12-30at11.22.16AM_1.jpg"
    ],
    hotSelling: true,
    colors: ["Red", "Black", "Mustard", "Off white", "peachy pink"],
    description: "Classic satin scrunchie"
  }
];

const categories = [
  { name: "Earrings", slug: "earrings", image: "https://jewelsmars.com/cdn/shop/files/WhatsApp_Image_2025-02-26_at_11.27.50.jpg" },
  { name: "Rings", slug: "rings", image: "https://jewelsmars.com/cdn/shop/files/WhatsApp_Image_2025-04-24_at_14.15.02.jpg" },
  { name: "Necklace", slug: "necklace", image: "https://jewelsmars.com/cdn/shop/files/WhatsApp_Image_2025-02-26_at_11.27.49.jpg" },
  { name: "Hair Accessories", slug: "hair-accessories", image: "https://jewelsmars.com/cdn/shop/files/WhatsApp_Image_2025-02-26_at_11.27.50_1.jpg" },
  { name: "Bracelets", slug: "bracelets", image: "https://jewelsmars.com/cdn/shop/files/WhatsApp_Image_2025-02-26_at_11.27.49_2.jpg" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity, price: product.salePrice, name: product.name, image: product.image });
  }
  saveCart();
  updateCartCount();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  if (typeof renderCart === 'function') renderCart();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
