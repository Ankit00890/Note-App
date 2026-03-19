import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-white/10 px-5 sm:px-8 py-4 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="flex items-center text-2xl font-bold text-white tracking-wide">
        <span>Note App</span>
      </Link>

      <div className="flex items-center space-x-6">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 font-medium hidden sm:block">Welcome, <span className="text-white">{user.name}</span></span>
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-white/10 hover:bg-red-500/20 text-gray-300 hover:text-red-400 border border-white/5 hover:border-red-500/50 px-4 py-2 rounded-xl transition-all duration-300"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Log In</Link>
            <Link to="/register" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
