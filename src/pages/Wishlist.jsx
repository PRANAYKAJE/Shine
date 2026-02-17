import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, addToCart } = useCart();
  
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  const handleAddToCart = (productId) => {
    addToCart(productId, 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-10">
      <div className="container mx-auto px-2 md:px-4">
        {/* Header with back button */}
        <div className="flex items-center mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 mr-3"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold">My Wishlist</h1>
        </div>
        <p className="text-center text-gray-500 mb-6 md:mb-8">{wishlist.length} items</p>
        
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-12">
            <i className="fas fa-heart text-6xl text-gray-200 mb-4"></i>
            <p className="text-gray-500 mb-4">Your wishlist is empty</p>
            <Link 
              to="/products" 
              className="inline-block px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-square object-cover"
                    />
                  </Link>
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-red-500"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
                <div className="p-3">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm font-medium mb-1 line-clamp-2 hover:text-pink-600">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-400 text-xs line-through">₹{product.price}</span>
                      <span className="text-pink-600 font-bold ml-2">₹{product.salePrice}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(product.id)}
                    className="w-full py-2 bg-gray-900 text-white text-xs font-medium uppercase rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
