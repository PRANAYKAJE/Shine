import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Bundle = () => {
  const navigate = useNavigate();
  const { addBundleToCart } = useCart();
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  const allProducts = products;
  const BUNDLE_PRICE = 800;
  const REQUIRED_PRODUCTS = 4;

  const toggleProduct = (productId) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < REQUIRED_PRODUCTS) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const handleAddToCart = () => {
    if (selectedProducts.length !== REQUIRED_PRODUCTS) return;
    
    addBundleToCart(selectedProducts, BUNDLE_PRICE);
    navigate('/cart');
  };

  const selectedItems = selectedProducts.map(id => products.find(p => p.id === id)).filter(Boolean);
  const originalPrice = selectedItems.reduce((sum, p) => sum + p.salePrice, 0);
  const savings = originalPrice - BUNDLE_PRICE;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-24 md:pb-28">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-6 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-1">
            BUY 4 AT ₹800
          </h1>
          <p className="text-sm md:text-lg opacity-95">Select Any 4 Products for Just ₹800!</p>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-4 py-4">
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {allProducts.map((product, idx) => {
            const isSelected = selectedProducts.includes(product.id);
            const isDisabled = !isSelected && selectedProducts.length >= REQUIRED_PRODUCTS;
            
            return (
              <div 
                key={product.id}
                className={`relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'ring-2 ring-pink-500 shadow-md' 
                    : isDisabled 
                      ? 'opacity-50' 
                      : 'hover:shadow-md'
                }`}
                onClick={() => !isDisabled && toggleProduct(product.id)}
              >
                {isSelected && (
                  <div className="absolute top-2 left-2 z-10 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    {selectedProducts.indexOf(product.id) + 1}
                  </div>
                )}
                
                <div className="relative overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-[10px] md:text-xs font-medium mb-1 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-[10px] line-through">₹{product.price}</span>
                    <span className="text-pink-600 font-bold text-xs md:text-sm">₹{product.salePrice}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] border-t border-gray-100 z-50">
        {/* Selected Products Preview - Scrollable */}
        {selectedProducts.length > 0 && (
          <div className="flex items-center gap-2 px-3 py-2 overflow-x-auto bg-gray-50 border-b border-gray-100 scrollbar-hide">
            {selectedItems.map((product, idx) => (
              <div key={product.id} className="flex-shrink-0 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-12 h-12 object-cover rounded border border-gray-200"
                />
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleProduct(product.id); }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            ))}
            {[...Array(REQUIRED_PRODUCTS - selectedProducts.length)].map((_, idx) => (
              <div key={`empty-${idx}`} className="flex-shrink-0 w-12 h-12 border-2 border-dashed border-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-300 text-xs">+</span>
              </div>
            ))}
          </div>
        )}

        {/* Price and Button */}
        <div className="flex items-center justify-between px-4 py-3 bg-white">
          <div className="flex items-center gap-3">
            {selectedProducts.length === REQUIRED_PRODUCTS ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm line-through">₹{originalPrice}</span>
                  <span className="text-2xl font-extrabold text-pink-600">₹{BUNDLE_PRICE}</span>
                </div>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                  Save ₹{savings}
                </span>
              </>
            ) : (
              <div>
                <span className="text-gray-500 text-sm">
                  {selectedProducts.length}/{REQUIRED_PRODUCTS} selected
                </span>
                <span className="text-gray-400 text-xs ml-2">
                  Add {REQUIRED_PRODUCTS - selectedProducts.length} more
                </span>
              </div>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={selectedProducts.length !== REQUIRED_PRODUCTS}
            className={`px-6 md:px-8 py-2.5 md:py-3 font-bold uppercase tracking-wider rounded-full text-sm transition-all duration-300 ${
              selectedProducts.length === REQUIRED_PRODUCTS
                ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {selectedProducts.length === REQUIRED_PRODUCTS 
              ? 'Add to Cart' 
              : 'Select Products'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
