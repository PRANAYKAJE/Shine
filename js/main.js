// ===========================================
// DATA
// ===========================================
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

// ===========================================
// APP STATE
// ===========================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ===========================================
// CORE FUNCTIONS
// ===========================================

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
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
    showToast(`Added <b>${product.name}</b> to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    if (typeof renderCart === 'function') renderCart();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    // Remove from DOM after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ===========================================
// UI RENDERING
// ===========================================

function createProductCard(product, index = 0) {
    // Calculate discount percentage
    const discount = Math.round(((product.salePrice - product.price) / product.salePrice) * 100);
    
    return `
        <div class="product-card" style="animation-delay: ${index * 0.05}s">
            <div class="product-image">
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </a>
                ${product.hotSelling ? `<span class="product-badge">${discount}% OFF</span>` : ''}
                <button class="wishlist-btn" onclick="toggleWishlist(this)">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                <div class="product-price">
                    <span class="regular-price">Rs. ${product.salePrice}.00</span>
                    <span class="sale-price">Rs. ${product.price}.00</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

function loadCategories() {
    const categoryGrid = document.getElementById('category-grid');
    if (!categoryGrid) return;
    
    categoryGrid.innerHTML = categories.map((cat, index) => `
        <div class="category-card reveal" style="transition-delay: ${index * 0.1}s">
            <a href="products.html?category=${cat.slug}">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy">
                <span>${cat.name}</span>
            </a>
        </div>
    `).join('');
}

function loadProducts() {
    const handJewelleryProducts = document.getElementById('hand-jewellery-products');
    const viralProducts = document.getElementById('viral-products');
    const newArrivalsProducts = document.getElementById('new-arrivals-products');
    const braceletProducts = document.getElementById('bracelet-products');
    
    if (handJewelleryProducts) {
        const handProducts = products.filter(p => p.category === 'hand-jewellery');
        handJewelleryProducts.innerHTML = handProducts.map((p, i) => createProductCard(p, i)).join('');
    }
    
    if (viralProducts) {
        const viral = products.slice(0, 8);
        viralProducts.innerHTML = viral.map((p, i) => createProductCard(p, i)).join('');
    }
    
    if (newArrivalsProducts) {
        const earrings = products.filter(p => p.category === 'earrings');
        newArrivalsProducts.innerHTML = earrings.map((p, i) => createProductCard(p, i)).join('');
    }
    
    if (braceletProducts) {
        const bracelets = products.filter(p => p.category === 'bracelets');
        braceletProducts.innerHTML = bracelets.map((p, i) => createProductCard(p, i)).join('');
    }
}

// ===========================================
// INTERACTIONS & EVENTS
// ===========================================

function toggleWishlist(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#e74c3c';
        showToast("Added to Wishlist");
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '';
        showToast("Removed from Wishlist");
    }
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productsContainer = document.getElementById('new-arrivals-products');
    
    if (!tabBtns.length || !productsContainer) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            const filteredProducts = products.filter(p => p.category === category);
            
            // Add simple fade out/in effect
            productsContainer.style.opacity = '0';
            setTimeout(() => {
                productsContainer.innerHTML = filteredProducts.map((p, i) => createProductCard(p, i)).join('');
                productsContainer.style.opacity = '1';
            }, 200);
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(section => {
        observer.observe(section);
    });
}

function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('main-nav');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    if(toggleBtn && nav) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
            const icon = toggleBtn.querySelector('i');
            if(nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Handle mobile dropdowns
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if(window.innerWidth <= 768) {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle('active-dropdown');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !toggleBtn.contains(e.target)) {
            nav.classList.remove('active');
            toggleBtn.querySelector('i').classList.remove('fa-times');
            toggleBtn.querySelector('i').classList.add('fa-bars');
        }
    });
}

function initHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===========================================
// INITIALIZATION
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    loadCategories();
    loadProducts();
    setupTabs();
    initScrollAnimations();
    initMobileMenu();
    initHeaderScroll();
});