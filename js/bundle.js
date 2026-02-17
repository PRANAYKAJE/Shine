document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    loadBundleProducts();
});

const bundleProducts = products.slice(0, 8);

function loadBundleProducts() {
    const container = document.getElementById('bundle-products');
    
    container.innerHTML = bundleProducts.map((product, index) => `
        <div class="bundle-product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <div class="bundle-product-info">
                <h3>${product.name}</h3>
                <span class="bundle-price-tag">₹${product.salePrice}</span>
            </div>
        </div>
    `).join('');
}

function addBundleToCart() {
    bundleProducts.forEach(product => {
        addToCart(product.id, 1);
    });
    alert('Bundle added to cart! 4 products for ₹800');
    window.location.href = 'cart.html';
}
