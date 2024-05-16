import React from "react";

function VotesModal({ isOpen, onClose, candidate }) {
  if (!isOpen || !candidate) return null;

  const { name, image } = candidate;

  const confirmVote = () => {
    // Implementa aquí la lógica para confirmar el voto
    console.log(`You voted for ${name}!`);
    onClose(); // Cierra el modal después de confirmar el voto
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
        {/* Botón de cancelar en la esquina superior derecha */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4">
          <img className="rounded-xl" src={image} alt={name} />
        </div>
        <div className="p-6">
          <h1 className="text-lg text-gray-900 font-bold">{name}</h1>
          <p className="text-gray-700 mb-4">Are you sure you want to vote for this candidate?</p>
          <div className="flex justify-end space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={confirmVote}>
              Confirm Vote
            </button>
            <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotesModal;