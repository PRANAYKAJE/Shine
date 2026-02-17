import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    payment: 'cod'
  });

  const shipping = cartTotal > 599 ? 0 : 50;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', { ...formData, items: cart, total });
    clearCart();
    alert('Order placed successfully! Thank you for shopping with Shine.');
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-light pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <i className="fas fa-shopping-bag text-6xl text-gray-300 mb-6"></i>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Add some products to your cart to checkout.</p>
            <Link to="/products" className="btn">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light pt-20 md:pt-24 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-6 pb-4 border-b">Billing Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">State *</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent"
                >
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

              <h2 className="text-xl font-bold mb-6 pb-4 border-b">Payment Method</h2>
              
              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-light transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.payment === 'cod'}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="font-semibold">Cash on Delivery (COD)</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-light transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={formData.payment === 'online'}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="font-semibold">Online Payment (Card/UPI)</span>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-gray-800 transition-all hover:shadow-lg"
              >
                Place Order
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
                <i className="fas fa-lock"></i>
                <span>Secure Checkout</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold mb-6 pb-4 border-b">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-gray-500 text-sm">Qty: {item.quantity} x Rs. {item.price}</p>
                    </div>
                    <p className="font-semibold ml-auto">Rs. {item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">Rs. {cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-3 border-t font-bold text-xl">
                  <span>Total</span>
                  <span className="text-sale">Rs. {total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
