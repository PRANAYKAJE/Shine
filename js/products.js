document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    loadProductsPage();
});

function loadProductsPage() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    
    const productsGrid = document.getElementById('products-grid');
    const pageTitle = document.getElementById('page-title');
    const productCount = document.getElementById('product-count');
    
    let filteredProducts = products;
    let title = 'All Products';
    
    if (category) {
        filteredProducts = products.filter(p => p.category === category);
        title = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    
    pageTitle.textContent = title;
    productCount.textContent = `Showing ${filteredProducts.length} products`;
    
    productsGrid.innerHTML = filteredProducts.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                ${product.hotSelling ? '<span class="product-badge">Hot Selling</span>' : ''}
                <button class="wishlist-btn" onclick="addToWishlist(${product.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                <div class="product-price">
                    <span class="regular-price">Rs. ${product.price}.00</span>
                    <span class="sale-price">Rs. ${product.salePrice}.00</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

function addToWishlist(productId) {
    alert('Added to wishlist!');
}
