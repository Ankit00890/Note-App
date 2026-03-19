import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      alert('Registration failed. Email might already exist.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      
      {/* Removed background glow effects for a simpler look */}

      <div className="w-full max-w-md space-y-8 relative z-10 my-8">
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="bg-purple-500/20 p-4 rounded-full mb-4">
              <BookOpen className="text-purple-400 h-8 w-8" />
            </div>
            <h2 className="text-center text-3xl font-extrabold text-white tracking-tight">Create an account</h2>
            <p className="mt-2 text-center text-sm text-gray-400">Start organizing your universe today.</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium" 
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium" 
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  minLength="6"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium" 
                  placeholder="At least 6 characters"
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(147,51,234,0.3)] text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
