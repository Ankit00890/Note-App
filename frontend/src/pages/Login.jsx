import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      alert('Login failed. Please check credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      
      {/* Removed background glow effects for a simpler look */}

      <div className="w-full max-w-md space-y-8 relative z-10">
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="bg-indigo-500/20 p-4 rounded-full mb-4">
              <BookOpen className="text-indigo-400 h-8 w-8" />
            </div>
            <h2 className="text-center text-3xl font-extrabold text-white tracking-tight">Welcome back</h2>
            <p className="mt-2 text-center text-sm text-gray-400">Please enter your details to sign in.</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" 
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
