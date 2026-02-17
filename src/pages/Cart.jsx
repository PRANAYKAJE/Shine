import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();
  
  const shipping = cartTotal > 599 ? 0 : 50;
  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-light pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <i className="fas fa-shopping-bag text-6xl text-gray-300 mb-6"></i>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products" className="btn">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  const getProductDetails = (productId) => {
    return products.find(p => p.id === productId);
  };

  return (
    <div className="min-h-screen bg-light pt-20 md:pt-24 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className={`bg-white rounded-xl p-4 shadow-sm ${item.isBundle ? 'border-2 border-pink-500' : ''}`}>
                {item.isBundle ? (
                  /* Bundle Item Display */
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                        BUNDLE DEAL
                      </span>
                      <span className="font-bold text-lg">4 Items for ₹800</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {item.productIds?.map((pid, idx) => {
                        const product = getProductDetails(pid);
                        return product ? (
                          <div key={pid} className="text-center">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full aspect-square object-cover rounded-lg mb-1"
                            />
                            <p className="text-xs line-clamp-2">{product.name}</p>
                          </div>
                        ) : null;
                      })}
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">₹{item.originalPrice}</span>
                        <span className="text-pink-500 font-bold text-xl">₹{item.price}</span>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-sale transition-colors"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Regular Item Display */
                  <div className="flex gap-4">
                    <Link to={`/product/${item.id}`}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`} className="font-semibold hover:text-accent transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-sale font-bold mt-1">Rs. {item.price}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary transition-colors"
                          >
                            <i className="fas fa-minus text-xs"></i>
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary transition-colors"
                          >
                            <i className="fas fa-plus text-xs"></i>
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-sale transition-colors"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">Rs. {item.price * item.quantity}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold mb-6 pb-4 border-b">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">Rs. {cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-3 border-t font-bold text-lg">
                  <span>Total</span>
                  <span className="text-sale">Rs. {total}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-primary text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-gray-800 transition-all hover:shadow-lg mb-3"
              >
                Proceed to Checkout
              </button>
              <Link to="/products" className="block text-center text-gray-500 hover:text-accent transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
