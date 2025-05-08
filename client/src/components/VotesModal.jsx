import React, { useState } from 'react';
import icono from '../img/icono.png'; // Imagen genérica o del candidato

function VotesModal({ isOpen, onClose, candidate, confirmVote }) {
  const [showCongrats, setShowCongrats] = useState(false);

  if (!isOpen || !candidate) return null;

  const { name, image } = candidate; // Desestructurar datos del candidato

  const handleConfirmVote = () => {
    confirmVote(candidate); // Confirmar el voto
    setShowCongrats(true); // Mostrar felicitaciones
    setTimeout(() => {
      setShowCongrats(false); // Ocultar felicitaciones después de 2 segundos
      onClose(); // Cerrar el modal
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo oscuro tras modal */}
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
      
      {/* Contenido del modal */}
      <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500">
        {/* Botón para cerrar */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {showCongrats ? (
          // Mensaje de felicitación tras votar
          <div className="p-6 text-center">
            <h1 className="text-xl font-bold text-green-600">¡Felicitaciones!</h1>
            <p className="text-gray-700">Has votado con éxito por {name}.</p>
          </div>
        ) : (
          <>
            {/* Imagen del candidato */}
            <div className="p-4 flex justify-center">
              {image && (
                <img className="rounded-xl w-24 h-24 object-cover" src={image || icono} alt={`Foto de ${name}`} />
              )}
            </div>
            {/* Contenido del modal */}
            <div className="p-6 text-center">
              <h1 className="text-lg text-gray-900 font-bold">{name}</h1>
              <p className="text-gray-700 mb-4">¿Estás seguro de que deseas votar por este candidato?</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                  onClick={handleConfirmVote}
                >
                  Confirmar Voto
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                  onClick={onClose}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default VotesModal;
