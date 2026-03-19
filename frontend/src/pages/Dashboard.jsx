import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import NoteCard from '../components/NoteCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const fetchNotes = async () => {
    try {
      const res = await api.get('/notes');
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleOpenModal = (note = null) => {
    if (note) {
      setEditingId(note._id);
      setTitle(note.title);
      setBody(note.body);
    } else {
      setEditingId(null);
      setTitle('');
      setBody('');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setTitle('');
    setBody('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/notes/${editingId}`, { title, body });
      } else {
        await api.post('/notes', { title, body });
      }
      fetchNotes();
      handleCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await api.delete(`/notes/${id}`);
        fetchNotes();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">My Notes</h1>
          <p className="text-gray-400">Welcome back, {user?.name}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleOpenModal()}
          className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-purple-500/30 transition-all"
        >
          <Plus className="mr-2" /> New Note
        </motion.button>
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No notes found. Create your first note!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {notes.map(note => (
              <NoteCard key={note._id} note={note} onEdit={handleOpenModal} onDelete={handleDelete} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Modal / Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gray-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl relative border border-gray-700"
            >
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X />
              </button>
              <h2 className="text-2xl font-bold mb-6 text-white">{editingId ? 'Edit Note' : 'Create Note'}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 text-xl font-bold"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write your note here..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    rows={6}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-end pt-4">
                  <button type="button" onClick={handleCloseModal} className="px-6 py-2 text-gray-400 hover:text-white mr-4">Cancel</button>
                  <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg shadow-lg">
                    {editingId ? 'Update' : 'Save'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
