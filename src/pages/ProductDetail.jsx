import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 md:pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/products" className="btn">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product.id, quantity);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-light pt-[88px] pb-8 lg:pt-4">
      <div className="container mx-auto px-3 md:px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 p-3 md:p-6 lg:p-10">
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-3 md:mb-4">
                <img 
                  src={product.images[selectedImage] || product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {product.hotSelling && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Hot Selling
                  </span>
                )}
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mb-4 md:mb-0">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full aspect-square object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400 text-xl line-through">Rs. {product.price}</span>
                <span className="text-sale text-3xl font-bold">Rs. {product.salePrice}</span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Color:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all ${
                          selectedColor === color 
                            ? 'border-primary bg-primary text-white' 
                            : 'border-gray-200 hover:border-primary'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Quantity:</h3>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Add to Cart Buttons */}
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-primary text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-gray-800 transition-all hover:shadow-lg"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 py-4 bg-accent text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-[#c49660] transition-all hover:shadow-lg"
                >
                  Buy Now
                </button>
              </div>

              {/* Shipping Info */}
              <div className="bg-light rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <i className="fas fa-truck text-accent"></i>
                  <span>Free Shipping on orders above Rs. 599</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <i className="fas fa-undo text-accent"></i>
                  <span>Easy Return within 7 days</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <i className="fas fa-money-bill-wave text-accent"></i>
                  <span>COD Available</span>
                </div>
              </div>

              {/* Category */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-500">
                  <span className="font-semibold">Category:</span>{' '}
                  {product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-8 md:mt-12">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {relatedProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
