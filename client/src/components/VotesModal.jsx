import React from "react";

function VotesModal({ isOpen, onClose, candidate }) {
  if (!isOpen || !candidate) return null;

  const { name, image } = candidate;

  const confirmVote = () => {
    // Aquí puedes implementar la lógica para confirmar el voto
    // Por ejemplo, enviar una solicitud al servidor para registrar el voto
    console.log(`Votaste por ${name}!`);
    onClose(); // Cierra el modal después de confirmar el voto
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
        <div className="p-4">
          <img className="rounded-xl" src={image} alt={name} />
        </div>
        <div className="p-6">
          <h1 className="text-lg text-gray-900 font-bold">{name}</h1>
          <p className="text-gray-700 mb-4">¿Estás seguro de votar por este candidato?</p>
          <div className="flex justify-end space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={confirmVote}>
              Confirmar Voto
            </button>
            <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotesModal;