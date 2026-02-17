import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Header = () => {
  const navigate = useNavigate();
  const { cartCount, cart, removeFromCart, updateQuantity, cartTotal, cartDrawerOpen, setCartDrawerOpen, wishlistCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const lastScrollY = useRef(0);
  const categoryRef = useRef(null);
  const searchRef = useRef(null);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6);
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoryOpen(false);
  }, []);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (cartDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [cartDrawerOpen]);

  return (
    <header className={`bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-center py-2 text-xs overflow-hidden">
        <p className="whitespace-nowrap animate-pulse">
          VALENTINE'S DAY SALE IS LIVE UPTO 70% &nbsp;|&nbsp; FREE SHIPPING ABOVE INR 599 &nbsp;|&nbsp; FREE GIFT ON ORDER ABOVE INR 699 &nbsp;|&nbsp; COD AVAILABLE &nbsp;|&nbsp; EASY RETURN
        </p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-3 py-2">
        <div className="flex items-center justify-between gap-2">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-pink-600">Shine</h1>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative" ref={searchRef}>
            <div className="flex w-full">
              <input 
                type="text" 
                placeholder="Search Our Site" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowSearchResults(true)}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-l-full focus:outline-none focus:border-pink-500 text-sm"
              />
              <button className="px-5 bg-pink-600 text-white rounded-r-full hover:bg-pink-700 transition-colors">
                <i className="fas fa-search"></i>
              </button>
            </div>
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-50 max-h-80 overflow-y-auto">
                {searchResults.map((product) => (
                  <Link 
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={() => { setSearchQuery(''); setShowSearchResults(false); }}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b"
                  >
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-1">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.category}</p>
                    </div>
                    <span className="text-pink-600 font-bold text-sm">₹{product.salePrice}</span>
                  </Link>
                ))}
                <Link 
                  to={`/products?search=${searchQuery}`}
                  onClick={() => { setSearchQuery(''); setShowSearchResults(false); }}
                  className="block p-3 text-center text-sm text-pink-600 hover:bg-gray-50 border-t"
                >
                  View All Results
                </Link>
              </div>
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <Link to="/profile" className="hidden md:block text-lg hover:text-pink-600 transition-colors">
              <i className="fas fa-user"></i>
            </Link>
            <Link to="/wishlist" className="relative hidden md:block text-lg hover:text-pink-600 transition-colors">
              <i className="fas fa-heart"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setCartDrawerOpen(true)}
              className="relative text-lg hover:text-pink-600 transition-colors"
            >
              <i className="fas fa-shopping-bag"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-2 relative" ref={searchRef}>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowSearchResults(true)}
              className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-l-lg focus:outline-none focus:border-pink-500 text-sm"
            />
            <button className="px-4 bg-pink-600 text-white rounded-r-lg">
              <i className="fas fa-search"></i>
            </button>
          </div>
          
          {/* Mobile Search Results */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-50 max-h-80 overflow-y-auto">
              {searchResults.map((product) => (
                <Link 
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={() => { setSearchQuery(''); setShowSearchResults(false); }}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b"
                >
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-1">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.category}</p>
                  </div>
                  <span className="text-pink-600 font-bold text-sm">₹{product.salePrice}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation - Mobile */}
      <nav className={`bg-white border-t border-gray-100 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="py-2">
          {/* Categories with collapsible */}
          <li className="relative" ref={categoryRef}>
            <button 
              className="w-full px-4 py-2 text-left text-sm font-semibold uppercase flex items-center justify-between"
              onClick={(e) => { e.stopPropagation(); setCategoryOpen(!categoryOpen); }}
            >
              <span>Categories</span>
              <i className={`fas fa-chevron-down text-xs transition-transform ${categoryOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {/* Category Dropdown - Opens below button, not always visible */}
            <div className={`bg-gray-50 overflow-hidden transition-all duration-200 ${categoryOpen ? 'max-h-60' : 'max-h-0'}`}>
              <ul className="py-1">
                <li><Link to="/products?category=earrings" className="block px-6 py-2 text-sm hover:bg-gray-100">Earrings</Link></li>
                <li><Link to="/products?category=necklace" className="block px-6 py-2 text-sm hover:bg-gray-100">Necklace</Link></li>
                <li><Link to="/products?category=rings" className="block px-6 py-2 text-sm hover:bg-gray-100">Rings</Link></li>
                <li><Link to="/products?category=bracelets" className="block px-6 py-2 text-sm hover:bg-gray-100">Bracelets</Link></li>
                <li><Link to="/products?category=hair-accessories" className="block px-6 py-2 text-sm hover:bg-gray-100">Hair Accessories</Link></li>
                <li><Link to="/products?category=korean-jewelry" className="block px-6 py-2 text-sm hover:bg-gray-100">Korean Jewelry</Link></li>
                <li><Link to="/products?category=hand-jewellery" className="block px-6 py-2 text-sm hover:bg-gray-100">Hand Jewellery</Link></li>
              </ul>
            </div>
          </li>
          
          <li><Link to="/products?sale=true" className="block px-4 py-2 text-sm font-semibold uppercase text-sale">Hot Deals</Link></li>
          <li><Link to="/products?new=true" className="block px-4 py-2 text-sm font-semibold uppercase">New Arrivals</Link></li>
          <li><Link to="/bundle" className="block px-4 py-2 text-sm font-bold uppercase text-pink-600">Buy 4 at ₹800</Link></li>
          <li><Link to="/wishlist" className="block px-4 py-2 text-sm font-semibold uppercase">Wishlist</Link></li>
        </ul>
      </nav>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block bg-light border-t border-gray-200">
        <ul className="container mx-auto flex justify-center space-x-1 py-2">
          <li className="relative group">
            <Link to="#" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-accent transition-colors flex items-center gap-1">
              Categories
              <i className="fas fa-chevron-down text-xs"></i>
            </Link>
            {/* Desktop Dropdown */}
            <ul className="absolute top-full left-0 bg-white shadow-lg min-w-48 rounded-b-lg py-2 hidden group-hover:block z-10">
              <li><Link to="/products?category=earrings" className="block px-4 py-2 hover:bg-light hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/products?category=necklace" className="block px-4 py-2 hover:bg-light hover:text-accent transition-colors">Necklace</Link></li>
              <li><Link to="/products?category=rings" className="block px-4 py-2 hover:bg-light hover:text-accent transition-colors">Rings</Link></li>
              <li><Link to="/products?category=bracelets" className="block px-4 py-2 hover:bg-light hover:text-accent transition-colors">Bracelets</Link></li>
              <li><Link to="/products?category=hair-accessories" className="block px-4 py-2 hover:bg-light hover:text-accent transition-colors">Hair Accessories</Link></li>
              <li><Link to="/products?category=korean-jewelry" className="block px-4 py-2 hover:bg-light hover:text-accent transition-colors">Korean Jewelry</Link></li>
              <li><Link to="/products?category=hand-jewellery" className="block px-4 py-2 hover:bg-light hover:text-accent transition-colors">Hand Jewellery</Link></li>
            </ul>
          </li>
          <li><NavLink to="/products?sale=true" className="block px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-accent transition-colors text-sale">Hot Deals</NavLink></li>
          <li><NavLink to="/products?new=true" className="block px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:text-accent transition-colors">New Arrivals</NavLink></li>
          <li><NavLink to="/bundle" className="block px-4 py-2 text-sm font-bold uppercase tracking-wide hover:text-accent transition-colors text-pink-600">Buy 4 at ₹800</NavLink></li>
        </ul>
      </nav>

      {/* Cart Drawer - Slides in from right */}
      <div className={`fixed inset-0 z-[9999] ${cartDrawerOpen ? 'block' : 'hidden'}`} style={{ isolation: 'isolate' }}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setCartDrawerOpen(false)}
        ></div>
        
        {/* Drawer */}
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 flex flex-col z-[10000]" style={{ height: '100vh' }}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart ({cartCount})</h2>
            <button 
              onClick={() => setCartDrawerOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <i className="fas fa-shopping-bag text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Your cart is empty</p>
                <button 
                  onClick={() => setCartDrawerOpen(false)}
                  className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium line-clamp-2">{item.name}</h3>
                      {item.isBundle && (
                        <p className="text-xs text-gray-500">{item.productIds?.length} items included</p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-pink-600 font-bold">₹{item.price}</span>
                        {!item.isBundle && (
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 bg-white border rounded-full flex items-center justify-center hover:bg-gray-100"
                            >
                              <i className="fas fa-minus text-xs"></i>
                            </button>
                            <span className="text-sm w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 bg-white border rounded-full flex items-center justify-center hover:bg-gray-100"
                            >
                              <i className="fas fa-plus text-xs"></i>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-xl font-bold">₹{cartTotal}</span>
              </div>
              <p className="text-xs text-gray-500">Shipping & taxes calculated at checkout</p>
              <Link 
                to="/checkout"
                onClick={() => setCartDrawerOpen(false)}
                className="block w-full py-3 bg-gray-900 text-white text-center font-semibold rounded-full hover:bg-pink-600 transition-colors"
              >
                CHECKOUT
              </Link>
              <Link 
                to="/cart"
                onClick={() => setCartDrawerOpen(false)}
                className="block w-full py-3 border-2 border-gray-900 text-gray-900 text-center font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-colors"
              >
                VIEW CART
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
