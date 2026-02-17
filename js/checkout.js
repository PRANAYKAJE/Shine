document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCheckout();
});

function renderCheckout() {
    const checkoutLayout = document.getElementById('checkout-layout');
    
    if (cart.length === 0) {
        checkoutLayout.innerHTML = `
            <div class="checkout-form">
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <h2>Your cart is empty</h2>
                    <p>Add some products to your cart to checkout.</p>
                    <a href="products.html" class="btn">Continue Shopping</a>
                </div>
            </div>
        `;
        return;
    }
    
    const subtotal = getCartTotal();
    const shipping = subtotal > 599 ? 0 : 50;
    const total = subtotal + shipping;
    
    let orderItemsHtml = cart.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <span>Qty: ${item.quantity} x Rs. ${item.price}</span>
            </div>
            <div class="order-item-price">Rs. ${item.price * item.quantity}</div>
        </div>
    `).join('');
    
    checkoutLayout.innerHTML = `
        <div class="checkout-form">
            <h2>Billing Details</h2>
            
            <form id="checkout-form" onsubmit="placeOrder(event)">
                <div class="form-row">
                    <div class="form-group">
                        <label>First Name *</label>
                        <input type="text" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label>Last Name *</label>
                        <input type="text" name="lastName" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" required>
                </div>
                
                <div class="form-group">
                    <label>Address *</label>
                    <textarea name="address" rows="3" required></textarea>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label>City *</label>
                        <input type="text" name="city" required>
                    </div>
                    <div class="form-group">
                        <label>Pincode *</label>
                        <input type="text" name="pincode" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>State *</label>
                    <select name="state" required>
                        <option value="">Select State</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="pune">Pune</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <h2>Payment Method</h2>
                
                <div class="payment-options">
                    <label class="payment-option">
                        <input type="radio" name="payment" value="cod" checked>
                        <span>Cash on Delivery (COD)</span>
                    </label>
                    <label class="payment-option">
                        <input type="radio" name="payment" value="online">
                        <span>Online Payment (Card/UPI)</span>
                    </label>
                </div>
                
                <button type="submit" class="place-order-btn">Place Order</button>
                <div class="secure-checkout">
                    <i class="fas fa-lock"></i>
                    <span>Secure Checkout</span>
                </div>
            </form>
        </div>
        
        <div class="order-summary">
            <h2>Order Summary</h2>
            ${orderItemsHtml}
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
        </div>
    `;
}

function placeOrder(event) {
    event.preventDefault();
    
    const form = document.getElementById('checkout-form');
    const formData = new FormData(form);
    
    const orderData = {
        customer: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            city: formData.get('city'),
            pincode: formData.get('pincode'),
            state: formData.get('state')
        },
        payment: formData.get('payment'),
        items: cart,
        subtotal: getCartTotal(),
        shipping: getCartTotal() > 599 ? 0 : 50,
        total: getCartTotal() + (getCartTotal() > 599 ? 0 : 50)
    };
    
    console.log('Order placed:', orderData);
    
    cart = [];
    saveCart();
    updateCartCount();
    
    alert('Order placed successfully! Thank you for shopping with Jewelsmars.');
    window.location.href = 'index.html';
}
