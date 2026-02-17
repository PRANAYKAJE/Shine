document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    loadProductDetail();
});

function loadProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById('product-detail').innerHTML = '<p>Product not found</p>';
        return;
    }
    
    document.title = `${product.name} - Jewelsmars`;
    
    const detailContainer = document.getElementById('product-detail');
    
    let imagesHtml = '';
    if (product.images && product.images.length > 1) {
        imagesHtml = `
            <div class="thumbnail-grid">
                ${product.images.map((img, idx) => `
                    <img src="${img}" alt="${product.name}" class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">
                `).join('')}
            </div>
        `;
    }
    
    let colorOptionsHtml = '';
    if (product.colors && product.colors.length > 0) {
        colorOptionsHtml = `
            <div class="option-group">
                <span class="option-label">Color:</span>
                <div class="option-values" id="color-options">
                    ${product.colors.map((color, idx) => `
                        <span class="option-value ${idx === 0 ? 'selected' : ''}" onclick="selectOption('color', '${color}', this)">${color}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    detailContainer.innerHTML = `
        <div class="product-gallery">
            <img src="${product.image}" alt="${product.name}" class="main-image" id="main-image">
            ${imagesHtml}
        </div>
        
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            
            <div class="product-detail-price">
                <span class="regular-price">Rs. ${product.price}.00</span>
                <span class="sale-price">Rs. ${product.salePrice}.00</span>
            </div>
            
            <p class="product-description">${product.description}</p>
            
            ${colorOptionsHtml}
            
            <div class="quantity-selector">
                <span class="option-label">Quantity:</span>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(-1)">-</button>
                    <input type="number" value="1" min="1" id="quantity-input">
                    <button onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            
            <div class="add-to-cart-section">
                <button class="btn-add-cart" onclick="addToCartFromDetail(${product.id})">Add to Cart</button>
                <button class="btn-buy-now" onclick="buyNow(${product.id})">Buy Now</button>
            </div>
            
            <div class="shipping-info">
                <p><i class="fas fa-truck"></i> Free Shipping on orders above Rs. 599</p>
                <p><i class="fas fa-undo"></i> Easy Return within 7 days</p>
                <p><i class="fas fa-money-bill-wave"></i> COD Available</p>
            </div>
            
            <div class="product-meta">
                <p><strong>Category:</strong> ${product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</p>
            </div>
        </div>
    `;
}

function changeImage(src, thumbnail) {
    document.getElementById('main-image').src = src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function selectOption(type, value, element) {
    const container = document.getElementById(`${type}-options`);
    if (container) {
        container.querySelectorAll('.option-value').forEach(v => v.classList.remove('selected'));
        element.classList.add('selected');
    }
}

function changeQuantity(delta) {
    const input = document.getElementById('quantity-input');
    let value = parseInt(input.value) + delta;
    if (value < 1) value = 1;
    input.value = value;
}

function addToCartFromDetail(productId) {
    const quantity = parseInt(document.getElementById('quantity-input').value);
    addToCart(productId, quantity);
    alert('Added to cart!');
}

function buyNow(productId) {
    addToCartFromDetail(productId);
    window.location.href = 'cart.html';
}
