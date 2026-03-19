import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BookOpen, LogOut, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        <BookOpen className="text-purple-400" />
        <span>NotesApp</span>
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/story" className="text-gray-300 hover:text-white transition-colors">Our Story</Link>
        
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-300">
              <User className="mr-2 h-5 w-5" /> {user.name}
            </span>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors shadow-lg"
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </motion.button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
            <Link to="/register" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition-colors shadow-lg shadow-purple-500/30">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
