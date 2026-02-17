import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 9999]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('filter');

  const colors = ["Black", "Pink", "Gold", "Silver", "White", "Red", "Green", "Blue", "Peach", "Purple", "Brown", "Orange"];

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory 
      ? products.filter(p => p.category === selectedCategory)
      : products;

    // Price filter
    filtered = filtered.filter(p => p.salePrice >= priceRange[0] && p.salePrice <= priceRange[1]);

    // Color filter - case insensitive
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => p.color && selectedColors.some(c => c.toLowerCase() === p.color.toLowerCase()));
    }

    // In stock filter
    if (inStockOnly) {
      filtered = filtered.filter(p => p.hotSelling);
    }

    switch(sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.salePrice - b.salePrice);
      case 'price-high':
        return [...filtered].sort((a, b) => b.salePrice - a.salePrice);
      case 'newest':
        return [...filtered].filter(p => p.newArrival);
      case 'a-z':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case 'z-a':
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy, priceRange, selectedColors, inStockOnly]);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    if (slug) {
      setSearchParams({ category: slug });
    } else {
      setSearchParams({});
    }
  };

  const categoryTitle = selectedCategory 
    ? selectedCategory.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'All Products';

  const clearAllFilters = () => {
    setSelectedCategory('');
    setSortBy('featured');
    setPriceRange([0, 9999]);
    setSelectedColors([]);
    setInStockOnly(false);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-12 md:pt-14">
      {/* Back Button - Show when category is selected */}
      {selectedCategory && (
        <div className="bg-white px-4 py-3 border-b">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back</span>
          </button>
        </div>
      )}
      {/* Page Header */}
      <div className="bg-white shadow-sm py-4 px-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">{categoryTitle}</h1>
          <p className="text-sm text-gray-500 mt-1">{filteredProducts.length} products</p>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">New Arrivals</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
        </div>
      </div>

      {/* Mobile Filter & Sort Bar */}
      <div className="lg:hidden bg-white shadow-sm py-2 px-4 flex items-center justify-between gap-2 overflow-x-auto">
        <button 
          onClick={() => { setShowMobileFilters(true); setActiveTab('filter'); }}
          className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm whitespace-nowrap"
        >
          <i className="fas fa-filter"></i>
          Filters
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-2 py-1 border border-gray-200 rounded-lg text-sm focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">New Arrivals</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0 p-4">
          <div className="bg-white rounded-lg p-4 shadow-sm sticky top-24">
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 pb-2 border-b">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleCategoryChange('')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedCategory ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <button
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat.slug ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            <div className="mb-6">
              <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 pb-2 border-b">Availability</h3>
              <label className="flex items-center gap-2 cursor-pointer py-1">
                <input 
                  type="checkbox" 
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 text-gray-900 rounded"
                />
                <span className="text-sm">In Stock Only</span>
              </label>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 pb-2 border-b">Price</h3>
              <div className="space-y-2">
                {[
                  { label: 'All Prices', min: 0, max: 9999 },
                  { label: 'Under ₹300', min: 0, max: 300 },
                  { label: '₹300 - ₹600', min: 300, max: 600 },
                  { label: '₹600 - ₹1000', min: 600, max: 1000 },
                  { label: 'Over ₹1000', min: 1000, max: 9999 }
                ].map((range) => (
                  <label key={range.label} className="flex items-center gap-2 cursor-pointer py-1">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceRange[0] === range.min && priceRange[1] === range.max}
                      onChange={() => setPriceRange([range.min, range.max])}
                      className="w-4 h-4 text-gray-900"
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mb-6">
              <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 pb-2 border-b">Color</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColors(prev => 
                        prev.includes(color) 
                          ? prev.filter(c => c !== color)
                          : [...prev, color]
                      );
                    }}
                    className={`relative w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColors.includes(color) ? 'border-gray-900 scale-110' : 'border-gray-200'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() === 'white' ? '#fff' : color.toLowerCase() }}
                    title={color}
                  >
                    {selectedColors.includes(color) && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        {color.toLowerCase() === 'white' || color.toLowerCase() === 'gold' || color.toLowerCase() === 'silver' ? (
                          <i className="fas fa-check text-gray-900 text-xs"></i>
                        ) : (
                          <i className="fas fa-check text-white text-xs"></i>
                        )}
                      </span>
                    )}
                  </button>
                ))}
              </div>
              {selectedColors.length > 0 && (
                <p className="text-xs text-gray-500 mt-2">Selected: {selectedColors.join(', ')}</p>
              )}
            </div>

            {/* Clear */}
            <button 
              onClick={clearAllFilters}
              className="w-full py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear All
            </button>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg">
              <i className="fas fa-search text-5xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">No products found</p>
              <button 
                onClick={clearAllFilters}
                className="mt-4 text-sm text-gray-900 underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileFilters(false)}
          ></div>
          
          {/* Modal */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab('filter')}
                  className={`px-3 py-1 text-sm font-medium ${activeTab === 'filter' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}
                >
                  Filter
                </button>
                <button 
                  onClick={() => setActiveTab('sort')}
                  className={`px-3 py-1 text-sm font-medium ${activeTab === 'sort' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}
                >
                  Sort
                </button>
              </div>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-4" style={{ maxHeight: 'calc(80vh - 60px)' }}>
              {activeTab === 'filter' ? (
                <div className="space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold text-sm uppercase mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleCategoryChange('')}
                        className={`px-3 py-1.5 rounded-full text-xs ${
                          !selectedCategory ? 'bg-gray-900 text-white' : 'bg-gray-100'
                        }`}
                      >
                        All
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.slug}
                          onClick={() => handleCategoryChange(cat.slug)}
                          className={`px-3 py-1.5 rounded-full text-xs ${
                            selectedCategory === cat.slug ? 'bg-gray-900 text-white' : 'bg-gray-100'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h3 className="font-semibold text-sm uppercase mb-3">Availability</h3>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">In Stock Only</span>
                    </label>
                  </div>

                  {/* Price */}
                  <div>
                    <h3 className="font-semibold text-sm uppercase mb-3">Price</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'All', min: 0, max: 9999 },
                        { label: 'Under 300', min: 0, max: 300 },
                        { label: '300-600', min: 300, max: 600 },
                        { label: '600-1000', min: 600, max: 1000 },
                        { label: 'Over 1000', min: 1000, max: 9999 }
                      ].map((range) => (
                        <button
                          key={range.label}
                          onClick={() => setPriceRange([range.min, range.max])}
                          className={`px-3 py-2 rounded-lg text-xs ${
                            priceRange[0] === range.min && priceRange[1] === range.max 
                              ? 'bg-gray-900 text-white' 
                              : 'bg-gray-100'
                          }`}
                        >
                          ₹{range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color */}
                  <div>
                    <h3 className="font-semibold text-sm uppercase mb-3">Color</h3>
                    <div className="flex flex-wrap gap-2">
                      {colors.map(color => (
                        <button
                          key={color}
                          onClick={() => {
                            setSelectedColors(prev => 
                              prev.includes(color) 
                                ? prev.filter(c => c !== color)
                                : [...prev, color]
                            );
                          }}
                          className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                            selectedColors.includes(color) ? 'border-gray-900 scale-110' : 'border-gray-200'
                          }`}
                          style={{ backgroundColor: color.toLowerCase() === 'white' ? '#fff' : color.toLowerCase() }}
                          title={color}
                        >
                          {selectedColors.includes(color) && (
                            <span className="absolute inset-0 flex items-center justify-center">
                              {color.toLowerCase() === 'white' || color.toLowerCase() === 'gold' || color.toLowerCase() === 'silver' ? (
                                <i className="fas fa-check text-gray-900 text-xs"></i>
                              ) : (
                                <i className="fas fa-check text-white text-xs"></i>
                              )}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' },
                    { value: 'newest', label: 'New Arrivals' },
                    { value: 'a-z', label: 'A to Z' },
                    { value: 'z-a', label: 'Z to A' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => { setSortBy(option.value); setShowMobileFilters(false); }}
                      className={`w-full px-4 py-3 text-left rounded-lg text-sm ${
                        sortBy === option.value ? 'bg-gray-900 text-white' : 'bg-gray-100'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-4 border-t">
              <button 
                onClick={clearAllFilters}
                className="flex-1 py-3 border border-gray-300 rounded-lg text-sm font-medium"
              >
                Clear All
              </button>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
