import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import NoteCard from '../components/NoteCard';
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
    <div className="pt-24 pb-12 px-6 min-h-screen">
      
      {/* Removed background glow effects for a simpler look */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">My Desk</h1>
            <p className="text-gray-400">All your thoughts, synced securely.</p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-0.5"
          >
            <Plus className="mr-2 h-5 w-5" /> New Note
          </button>
        </div>

        {notes.length === 0 ? (
          <div className="flex flex-col flex-1 items-center justify-center py-32 text-center bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">📝</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">No notes yet</h2>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">Click the magical new note button above to create your first note.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map(note => (
              <NoteCard key={note._id} note={note} onEdit={handleOpenModal} onDelete={handleDelete} />
            ))}
          </div>
        )}

        {/* Glassmorphism Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-lg relative">
              
              <button onClick={handleCloseModal} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full">
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-white mb-8 pr-12">{editingId ? 'Edit Note' : 'Create Note'}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Enter a descriptive title..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
                  <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    rows="6"
                    placeholder="Write something amazing here..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4 pt-4 border-t border-white/10">
                  <button 
                    type="button" 
                    onClick={handleCloseModal}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all"
                  >
                    Save Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
