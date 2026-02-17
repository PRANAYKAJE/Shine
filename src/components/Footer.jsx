import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-6 relative pb-3">
              About Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-accent"></span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shine is the best seller of Korean jewellery in India. We offer trendy and elegant jewelry at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-6 relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link to="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Return Policy</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-6 relative pb-3">
              Customer Service
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Track Order</Link></li>
              <li><Link to="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Returns / Exchange</Link></li>
              <li><Link to="#" className="text-gray-400 text-sm hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-6 relative pb-3">
              Contact Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-accent"></i>
                info@jewelsmars.com
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-accent"></i>
                +91 98765 43210
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#222] pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Shine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
