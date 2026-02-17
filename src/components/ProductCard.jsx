import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const isWished = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product.id, 1);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
      style={{ animationDelay: `${index * 0.05}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-gray-100">
        <Link to={`/product/${product.id}`}>
          <div className="relative w-full aspect-square overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
              loading="lazy"
            />
            {product.images && product.images[1] && (
              <img 
                src={product.images[1]} 
                alt={product.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            )}
          </div>
        </Link>
        
        {product.hotSelling && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            Hot
          </span>
        )}
        
        {product.newArrival && (
          <span className="absolute top-2 right-2 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            New
          </span>
        )}
        
        <button 
          onClick={handleWishlist}
          className={`absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 ${isWished ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        >
          <i className={`${isWished ? 'fas' : 'far'} fa-heart text-sm`}></i>
        </button>
      </div>
      
      <div className="p-2 md:p-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs md:text-sm font-medium mb-1 line-clamp-2 hover:text-pink-600 transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 text-xs line-through">₹{product.price}</span>
          <span className="text-pink-600 font-bold text-sm md:text-base">₹{product.salePrice}</span>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="relative w-full py-2 bg-pink-600 text-white text-xs font-medium uppercase rounded-lg overflow-hidden shine-effect hover:bg-pink-700 transition-colors"
        >
          <span className="relative z-10">Add</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
