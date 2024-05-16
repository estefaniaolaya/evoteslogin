import React, { useState } from "react";
import CandidateModal from "../components/CandidateModal";

function Candidates() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidateImages, setCandidateImages] = useState({}); // Estado para almacenar las imágenes seleccionadas por candidato

  const candidates = [
    { id: 1, name: "Juan Pérez", role: "President", description: "Information about Juan Pérez...", image: candidateImages[1] || null },
    { id: 2, name: "María López", role: "Vice President", description: "Information about María López...", image: candidateImages[2] || null },
    { id: 3, name: "Pedro González", role: "Treasurer", description: "Information about Pedro González...", image: candidateImages[3] || null }
  ];

  const openModal = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageUpload = (event, candidateId) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCandidateImages({
        ...candidateImages,
        [candidateId]: reader.result // Almacena la imagen como Base64 en el estado
      });
    };

    if (file) {
      reader.readAsDataURL(file); // Lee el archivo como Base64
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <header className="bg-white p-10">
        <section className="candidates" id="candidates">
          <div className="contenido text-center">
            <h2 className="text-5xl py-4 font-bold text-gray-800">Meet the Candidates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="candidate-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-purple-200">
                  <img src={candidate.image || candidate.image} alt={candidate.name} className="mx-auto w-24 h-24 rounded-full mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{candidate.name}</h3>
                  <p className="text-gray-700">{`Candidate for ${candidate.role} of the Student Center`}</p>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, candidate.id)} />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => openModal(candidate)}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </header>
      <CandidateModal isOpen={showModal} onClose={closeModal} candidate={selectedCandidate} />
    </section>
  );
}

export default Candidates;