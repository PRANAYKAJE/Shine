import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-10">
      <div className="container mx-auto px-2 md:px-4">
        {/* Header with back button */}
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 mr-3"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold">My Account</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-user text-3xl text-pink-600"></i>
            </div>
            <h2 className="text-lg font-semibold mb-1">Welcome Guest</h2>
            <p className="text-gray-500 text-sm mb-4">guest@example.com</p>
            <button className="px-6 py-2 bg-pink-600 text-white rounded-full text-sm hover:bg-pink-700 transition-colors">
              Login / Register
            </button>
          </div>

          {/* Account Options */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/wishlist" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-heart text-pink-600"></i>
                </div>
                <div>
                  <p className="font-medium">My Wishlist</p>
                  <p className="text-xs text-gray-500">Items you saved</p>
                </div>
              </Link>
              
              <Link to="/cart" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-shopping-bag text-pink-600"></i>
                </div>
                <div>
                  <p className="font-medium">My Cart</p>
                  <p className="text-xs text-gray-500">View your cart</p>
                </div>
              </Link>
              
              <Link to="/orders" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-box text-pink-600"></i>
                </div>
                <div>
                  <p className="font-medium">My Orders</p>
                  <p className="text-xs text-gray-500">Track orders</p>
                </div>
              </Link>
              
              <Link to="/addresses" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-pink-600"></i>
                </div>
                <div>
                  <p className="font-medium">Addresses</p>
                  <p className="text-xs text-gray-500">Manage addresses</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
