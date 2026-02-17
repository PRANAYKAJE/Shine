import { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (productId, quantity = 1) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: productId, quantity, price: product.salePrice, name: product.name, image: product.image }];
    });
    setCartDrawerOpen(true);
  };

  const addBundleToCart = (productIds, bundlePrice = 800) => {
    const bundleId = `bundle-${Date.now()}`;
    const bundleProducts = productIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    
    const bundleItem = {
      id: bundleId,
      isBundle: true,
      name: `Bundle Deal - 4 Items`,
      image: bundleProducts[0]?.image,
      price: bundlePrice,
      quantity: 1,
      productIds: productIds,
      originalPrice: bundleProducts.reduce((sum, p) => sum + p.salePrice, 0)
    };

    setCart(prev => [...prev, bundleItem]);
    setCartDrawerOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + change;
          if (newQty < 1) return null;
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const wishlistCount = wishlist.length;

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, addBundleToCart, removeFromCart, updateQuantity, clearCart, 
      cartCount, cartTotal, cartDrawerOpen, setCartDrawerOpen,
      wishlist, toggleWishlist, isInWishlist, wishlistCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};
