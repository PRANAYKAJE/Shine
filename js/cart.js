document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCart();
});

function renderCart() {
    const cartLayout = document.getElementById('cart-layout');
    
    if (cart.length === 0) {
        cartLayout.innerHTML = `
            <div class="cart-items">
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <a href="products.html" class="btn">Continue Shopping</a>
                </div>
            </div>
        `;
        return;
    }
    
    const subtotal = getCartTotal();
    const shipping = subtotal > 599 ? 0 : 50;
    const total = subtotal + shipping;
    
    let cartItemsHtml = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3><a href="product-detail.html?id=${item.id}">${item.name}</a></h3>
                <div class="cart-item-price">Rs. ${item.price}.00</div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <div class="cart-item-remove">
                <button onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    cartLayout.innerHTML = `
        <div class="cart-items">
            ${cartItemsHtml}
        </div>
        <div class="cart-summary">
            <h2>Order Summary</h2>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>Rs. ${subtotal}.00</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'Free' : 'Rs. ' + shipping + '.00'}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>Rs. ${total}.00</span>
            </div>
            <button class="checkout-btn" onclick="proceedToCheckout()">Proceed to Checkout</button>
            <a href="products.html" class="continue-shopping">Continue Shopping</a>
        </div>
    `;
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
            renderCart();
        }
    }
}

function proceedToCheckout() {
    window.location.href = 'checkout.html';
}
