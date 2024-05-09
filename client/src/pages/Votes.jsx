import React, { useState } from "react";
import VotesModal from "../components/VotesModal";
import CandidateModal from "../components/CandidateModal";

function Votes() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [modalType, setModalType] = useState(""); // Nuevo estado para controlar el tipo de modal (votación o propuestas)

  const candidates = [
    { name: "Juan Pérez", role: "Presidente", description: "Información sobre Juan Pérez...", image: "robot1.jpg" },
    { name: "María López", role: "Vicepresidente", description: "Información sobre María López...", image: "robot2.jpg" },
    { name: "Pedro González", role: "Tesorero", description: "Información sobre Pedro González...", image: "robot3.jpg" }
  ];

  const openModal = (candidate, type) => {
    setSelectedCandidate(candidate);
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(""); // Reiniciar el tipo de modal al cerrar
  };

  const confirmVote = (candidate) => {
    console.log(`Votaste por ${candidate.name}!`);
    closeModal(); // Cierra el modal después de confirmar el voto
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <header className="bg-white p-10">
        <section className="candidates" id="candidates">
          <div className="contenido text-center">
            <h2 className="text-5xl py-4 font-bold text-gray-800">Votación de Candidatos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {candidates.map((candidate, index) => (
                <div key={index} className="candidate-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-purple-200">
                  <img src={candidate.image} alt={candidate.name} className="mx-auto w-24 h-24 rounded-full mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{candidate.name}</h3>
                  <p className="text-gray-700">{`Candidato a ${candidate.role} del Centro de Estudiantes`}</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => openModal(candidate, "votes")}>
                    Votar
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2 ml-2" onClick={() => openModal(candidate, "proposals")}>
                    Ver Propuestas
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </header>
      {/* Utiliza VotesModal o CandidateModal según el tipo de modal */}
      {showModal && (
        <div className="modal-container">
          {modalType === "votes" ? (
            <VotesModal isOpen={showModal} onClose={closeModal} candidate={selectedCandidate} confirmVote={confirmVote} />
          ) : (
            <CandidateModal isOpen={showModal} onClose={closeModal} candidate={selectedCandidate} />
          )}
        </div>
      )}
    </section>
  );
}

export default Votes;