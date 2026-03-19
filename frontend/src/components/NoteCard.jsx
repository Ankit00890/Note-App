import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Edit2 } from 'lucide-react';

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-purple-500 transition-colors group relative"
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
        <button onClick={() => onEdit(note)} className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full text-white transition-colors">
          <Edit2 size={16} />
        </button>
        <button onClick={() => onDelete(note._id)} className="p-2 bg-gray-700 hover:bg-red-600 rounded-full text-white transition-colors">
          <Trash2 size={16} />
        </button>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 pr-16">{note.title}</h3>
      <p className="text-gray-300 whitespace-pre-wrap">{note.body}</p>
      <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-500">
        {new Date(note.createdAt).toLocaleDateString()}
      </div>
    </motion.div>
  );
};

export default NoteCard;
