import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans selection:bg-purple-500 selection:text-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 text-center pb-2">
          The Developer's Journey: 0 se Z tak ka Safar 🚀
        </h1>

        <div className="space-y-12 relative border-l-4 border-purple-500 pl-8 ml-4">
          
          {/* Step 1: Idea & Setup */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 relative"
          >
            <div className="absolute -left-12 top-6 bg-purple-500 h-6 w-6 rounded-full border-4 border-gray-900"></div>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">1. The Beginning: Project Setup 🛠️</h2>
            <p className="text-gray-300 leading-relaxed">
              Sabse pehle humne socha, ek simple lekin dhamakedar Notes App banate hain. Maine Git initialize kiya, aur do folders banaye: <code>backend</code> aur <code>frontend</code>. 
              Backend ke liye Node.js aur Express set kiya, aur Frontend ke liye Vite + React ka use kiya kyunki Vite bohot fast hai!
            </p>
          </motion.div>

          {/* Step 2: Database Connection */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 relative"
          >
            <div className="absolute -left-12 top-6 bg-purple-500 h-6 w-6 rounded-full border-4 border-gray-900"></div>
            <h2 className="text-2xl font-bold text-pink-300 mb-3">2. Database Architecture (MongoDB) 🗄️</h2>
            <p className="text-gray-300 leading-relaxed">
              Local database ka zamana gaya! Humne MongoDB Atlas (Cloud) use kiya. <code>mongoose</code> npm package install karke do schemas banaye: 
              Ek <strong>User</strong> (name, email, hashed password) aur ek <strong>Note</strong> (title, body, user id). Data ekdum secure and live!
            </p>
          </motion.div>

          {/* Step 3: Backend & Authentication */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 relative"
          >
            <div className="absolute -left-12 top-6 bg-purple-500 h-6 w-6 rounded-full border-4 border-gray-900"></div>
            <h2 className="text-2xl font-bold text-blue-300 mb-3">3. Backend & Security (JWT) 🔒</h2>
            <p className="text-gray-300 leading-relaxed">
              Security ke bina app kaisa? Humne RESTful API banayi. User jab login karta hai, toh hum <code>bcryptjs</code> se password check karte hain aur usko ek <strong>JWT (JSON Web Token)</strong> dete hain. 
              Koi bhi user dusre ke notes nahi dekh sakta. Har CRUD operation (Create, Read, Update, Delete) JWT middleware ke through verify hota hai.
            </p>
          </motion.div>

          {/* Step 4: Frontend UI */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 relative"
          >
            <div className="absolute -left-12 top-6 bg-purple-500 h-6 w-6 rounded-full border-4 border-gray-900"></div>
            <h2 className="text-2xl font-bold text-green-300 mb-3">4. Frontend UI/UX Magic 🎨</h2>
            <p className="text-gray-300 leading-relaxed">
              Ab baari aati hai looks ki! React aur Tailwind CSS ka combination use karke humne ek "Glassmorphism" effect wala dark theme dashboard banaya. 
              <code>framer-motion</code> se humne page transitions aur hover effects add kiye taaki user jab button pe hover kare ya note delete kare, toh wo ekdum smooth animate ho!
            </p>
          </motion.div>

          {/* Step 5: Connecting the Dots */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 relative"
          >
            <div className="absolute -left-12 top-6 bg-purple-500 h-6 w-6 rounded-full border-4 border-gray-900"></div>
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">5. The API Integration 🔌</h2>
            <p className="text-gray-300 leading-relaxed">
              Frontend ready, backend ready. Ab dono ko connect karna tha. Humne <code>axios</code> use kiya calls marne ke liye. 
              Login successful hone pe JWT token ko <code>localStorage</code> save kiya aur har request par "Authorization" header mein bhej diya. Boom! App zinda ho gaya.
            </p>
          </motion.div>

          {/* Step 6: Full Deployment */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 relative"
          >
            <div className="absolute -left-12 top-6 bg-purple-500 h-6 w-6 rounded-full border-4 border-gray-900"></div>
            <h2 className="text-2xl font-bold text-red-300 mb-3">6. Deploying to the World 🌍</h2>
            <p className="text-gray-300 leading-relaxed">
              Aakhir mein is masterpiece ko public karna tha. Environment variables (<code>.env</code>) ko secure platforms par add kiya.
              Backend ko utha ke <strong>Railway</strong> par host kar diya aur Frontend application ka build banake <strong>Netlify</strong> par deploy kar diya. Ab koi bhi URL hit karke apna account bana sakta hai!
            </p>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-400 italic">"And that's how we turned nothing into a fully working, beautiful production app! 💻🔥"</p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Story;
