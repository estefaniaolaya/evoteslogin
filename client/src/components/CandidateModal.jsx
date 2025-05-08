import React from "react";

function CandidateModal({ isOpen, onClose, candidate }) {
  if (!isOpen || !candidate) return null;

  const { name, description, proposals, likes } = candidate;

  const handleLike = () => {
    // Aquí puedes implementar la lógica de incrementar likes.
    console.log(`Like registrado para: ${name}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo gris semitransparente */}
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
      
      {/* Contenedor del modal */}
      <div className="relative max-w-md bg-white rounded-lg p-6 shadow-lg">
        {/* Botón de cierre */}
        <button className="absolute top-2 right-2" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 hover:text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido del modal */}
        <div className="text-center">
          {/* Nombre del candidato */}
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

          {/* Descripción corta */}
          {description && (
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          )}

          {/* Propuestas */}
          <h3 className="text-md font-semibold text-gray-700 mt-4">Proposals:</h3>
          <ul className="text-left text-gray-600 mt-2">
            {proposals && proposals.length > 0 ? (
              proposals.map((proposal, index) => (
                <li key={index} className="mb-2">- {proposal}</li>
              ))
            ) : (
              <p className="text-gray-500">No proposals available.</p>
            )}
          </ul>

          {/* Sección de likes */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${likes > 0 ? 'text-red-500' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span className={`text-sm font-semibold ${likes > 0 ? 'text-red-500' : 'text-gray-400'}`}>{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateModal;
