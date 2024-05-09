import React from "react";

function CandidateModal({ isOpen, onClose, candidate }) {
  if (!isOpen || !candidate) return null;

  const { name, image, avatar, likes, comments, description } = candidate;

  const handleLike = () => {
    // Implementa la lógica para manejar los likes aquí si es necesario
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4">
          <img className="rounded-xl" src={image} alt={name} />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <img className="h-12 w-12 rounded-full" src={avatar} alt="" />
            <div>
              <h1 className="text-lg text-gray-900 font-bold">{name}</h1>
              {/* Añade la descripción del candidato aquí si es necesario */}
              {/* <p className="text-sm text-gray-600">{`Candidato a ${candidate.role} del Centro de Estudiantes`}</p> */}
            </div>
          </div>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <button onClick={handleLike}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${likes > 0 ? 'text-red-500' : 'text-gray-400'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </button>
              <span className={`text-sm font-semibold ${likes > 0 ? 'text-red-500' : 'text-gray-400'}`}>{likes}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600 hover:text-red-500 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateModal;