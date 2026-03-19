import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      
      {/* Subtle top glare */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-3 pr-8 leading-tight">{note.title}</h3>
        <p className="text-gray-400 text-sm whitespace-pre-wrap leading-relaxed">{note.body}</p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
        <span className="text-xs text-indigo-300 font-medium tracking-wider uppercase">
          {new Date(note.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        
        <div className="flex items-center space-x-2 shrink-0">
          <button 
            onClick={(e) => { e.stopPropagation(); onEdit(note); }} 
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            <Edit2 size={14} />
            <span>Edit</span>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(note._id); }} 
            className="p-1.5 text-gray-400 hover:text-red-400 bg-white/5 hover:bg-red-500/10 border border-white/10 rounded-lg transition-all"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
