import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [activeTab, setActiveTab] = useState('earrings');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(p => p.category === activeTab);
    setFilteredProducts(filtered);
  }, [activeTab]);

  const handJewellery = products.filter(p => p.category === 'hand-jewellery');
  const bracelets = products.filter(p => p.category === 'bracelets');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero mb-4 md:mb-8 overflow-hidden">
        <Link to="/products">
          <img 
            src="https://jewelsmars.com/cdn/shop/files/valentines_day_banner.png?v=1770135680" 
            alt="Valentine's Day Sale" 
            className="w-full max-w-[1400px] mx-auto h-auto object-contain"
          />
        </Link>
      </section>

      {/* Bundle Section */}
      <section className="container mx-auto px-2 md:px-4 mb-6 md:mb-10">
        <Link to="/bundle" className="block overflow-hidden rounded-none md:rounded-xl shadow-md group">
          <img 
            src="https://jewelsmars.com/cdn/shop/files/Buy_4_800_banner.png?v=1760640008" 
            alt="Buy 4 at 800" 
            className="w-full max-w-[1400px] mx-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </section>

      {/* Categories - Mobile Horizontal Scroll */}
      <section className="bg-white py-4 md:py-8">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="hidden md:block section-title text-xl md:text-2xl">Shop by Category</h2>
          
          {/* Mobile: Horizontal scroll */}
          <div className="flex md:grid md:grid-cols-5 gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0">
            {categories.map((cat, idx) => (
              <Link 
                key={idx}
                to={`/products?category=${cat.slug}`}
                className="flex-shrink-0 w-20 md:w-auto text-center"
              >
                <div className="relative overflow-hidden rounded-lg mb-1 md:mb-2">
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="w-20 h-20 md:w-full md:h-auto aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <span className="text-[10px] md:text-sm font-medium">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Viral Hand Jewellery */}
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="text-lg md:text-2xl font-bold text-center uppercase tracking-wider mb-1 md:mb-2">VIRAL HAND JEWELERY</h2>
          <p className="text-center text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6">Hot Selling</p>
          
          <div className="flex md:grid md:grid-cols-4 gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0 snap-x">
            {handJewellery.map((product, idx) => (
              <div key={product.id} className="flex-shrink-0 w-[140px] md:w-auto snap-start">
                <ProductCard product={product} index={idx} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4 md:mt-8">
            <Link to="/products?category=hand-jewellery" className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gray-900 text-white text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-pink-600 transition-colors">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Viral Finds */}
      <section className="py-4 md:py-8 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="text-lg md:text-2xl font-bold text-center uppercase tracking-wider mb-4 md:mb-6">INSTAGRAM VIRAL FINDS</h2>
          
          <div className="flex md:grid md:grid-cols-4 gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0 snap-x">
            {products.slice(0, 8).map((product, idx) => (
              <div key={product.id} className="flex-shrink-0 w-[140px] md:w-auto snap-start">
                <ProductCard product={product} index={idx} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4 md:mt-8">
            <Link to="/products" className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gray-900 text-white text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-pink-600 transition-colors">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals with Tabs */}
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="text-lg md:text-2xl font-bold text-center uppercase tracking-wider mb-4 md:mb-6">New Arrivals</h2>
          
          {/* Tabs - Horizontal Scroll on Mobile */}
          <div className="flex md:justify-center gap-1 md:gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
            {['earrings', 'rings', 'necklace', 'hair-accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex-shrink-0 px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium uppercase transition-all whitespace-nowrap ${
                  activeTab === cat 
                    ? 'bg-gray-900 text-white shadow-lg' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
          
          <div className="flex md:grid md:grid-cols-4 gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0 snap-x">
            {filteredProducts.slice(0, 4).map((product, idx) => (
              <div key={product.id} className="flex-shrink-0 w-[140px] md:w-auto snap-start">
                <ProductCard product={product} index={idx} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4 md:mt-8">
            <Link to="/products" className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gray-900 text-white text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-pink-600 transition-colors">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Bracelets */}
      <section className="py-4 md:py-8 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="text-lg md:text-2xl font-bold text-center uppercase tracking-wider mb-4 md:mb-6">Viral Hand Stacks</h2>
          
          <div className="flex md:grid md:grid-cols-4 gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0 snap-x">
            {bracelets.map((product, idx) => (
              <div key={product.id} className="flex-shrink-0 w-[140px] md:w-auto snap-start">
                <ProductCard product={product} index={idx} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4 md:mt-8">
            <Link to="/products?category=bracelets" className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gray-900 text-white text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-pink-600 transition-colors">
              View All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
