import React, { useState, useEffect } from "react";
import VotesModal from "../components/VotesModal";
import CandidateModal from "../components/CandidateModal";
import icono from "../img/icono.png"; // Imagen de ejemplo
import axios from "axios";

function Votes() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [modalType, setModalType] = useState(""); // Controla el tipo de modal (votos o propuestas)
  const [candidates, setCandidates] = useState([]); // Lista de candidatos
  const [voted, setVoted] = useState(false); // Verifica si el usuario ya votó
  const [userId, setUserId] = useState(null); // Almacena el ID del usuario

  // Obtener candidatos y verificar si hay un ID de usuario en el almacenamiento local
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/candidates");
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();

    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const openModal = (candidate, type) => {
    setSelectedCandidate(candidate);
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  // Función para confirmar y registrar el voto
  const confirmVote = async (candidate) => {
    if (voted) {
      alert("You have already voted!");
      return;
    }
    if (!userId) {
      alert("You need to be logged in to vote!");
      return;
    }

    try {
      // Verificar si el usuario ya votó
      const userVoteCheck = await axios.get(`http://localhost:3000/api/votes/checkVote/${userId}`);
      if (userVoteCheck.data.hasVoted) {
        alert("You have already voted!");
        return;
      }

      // Registrar el voto
      const response = await axios.post(
        `http://localhost:3000/api/votes/${candidate._id}/vote`,
        { userId }
      );
      
      if (response.status === 200) {
        setVoted(true); // Marcar como votado
        alert("Vote registered successfully!");
        closeModal();

        // Actualizar la lista de candidatos con los votos actualizados
        const updatedCandidates = await axios.get("http://localhost:3000/api/candidates");
        setCandidates(updatedCandidates.data);
      }
    } catch (error) {
      console.error("Error while voting:", error);
      alert("There was an error while voting!");
    }
  };

  const handleBlankVote = () => {
    if (voted) {
      alert("You have already voted!");
      return;
    }
    if (!userId) {
      alert("You need to be logged in to vote!");
      return;
    }

    setVoted(true);
    alert("You voted blank!");
    closeModal();
  };

  // Nuevo botón de votación directa
  const directVote = (candidate) => {
    confirmVote(candidate); // Llamar a confirmVote con el candidato seleccionado
  };

  return (
    <section className="bg-gradient-to-r from-blue-900 to-purple-600 p-10">
      <header className="bg-white p-10">
        <h2 className="text-5xl py-4 font-bold text-gray-800 text-center">
          Vote for Candidates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className="candidate-box border border-gray-700 bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <img
                src={icono}
                alt={candidate.name}
                className="mx-auto w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{candidate.name}</h3>
              <p className="text-gray-700 mb-4">{`Candidate for ${candidate.role} of the Student Center`}</p>
              <div className="flex justify-center space-x-2">
                {/* Botón para votar */}
                <button
                  className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  onClick={() => openModal(candidate, "votes")}
                  disabled={voted} // Deshabilitar si ya votó
                >
                  Vote
                </button>
                {/* Nuevo botón para votar directamente */}
                <button
  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
  onClick={() => handleVote(candidate._id)} // Usar directamente `handleVote`
  disabled={voted} // Deshabilitar si ya votó
>
  Direct Vote
</button>
                <button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => openModal(candidate, "proposals")}
                >
                  Proposals
                </button>
              </div>
              <p className="mt-4 text-gray-600">{`Votes: ${candidate.votes}`}</p>
            </div>
          ))}

          <div className="candidate-box border border-gray-700 bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Vote in Blank</h3>
            <p className="text-gray-700 mb-4">Choose this option if you prefer to abstain.</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBlankVote}
              disabled={voted} // Deshabilitar si ya votó
            >
              Vote in Blank
            </button>
          </div>
        </div>
      </header>

      {/* Modals */}
      {showModal && modalType === "votes" && (
        <VotesModal
          isOpen={showModal}
          onClose={closeModal}
          candidate={selectedCandidate}
          confirmVote={confirmVote}
        />
      )}
      {showModal && modalType === "proposals" && (
        <CandidateModal
          isOpen={showModal}
          onClose={closeModal}
          candidate={selectedCandidate}
        />
      )}
    </section>
  );
}

export default Votes;
