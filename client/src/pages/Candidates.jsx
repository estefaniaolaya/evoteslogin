import React, { useState, useEffect } from "react";
import axios from "axios";
import icono from "../img/icono.png";

function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    role: "",
    description: "",
    image: null,
  });
  const [editCandidate, setEditCandidate] = useState(null); // Estado para manejar ediciones

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
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (editCandidate) {
      setEditCandidate((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewCandidate((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (editCandidate) {
        setEditCandidate((prev) => ({ ...prev, image: reader.result }));
      } else {
        setNewCandidate((prev) => ({ ...prev, image: reader.result }));
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddOrEditCandidate = async () => {
    if (!editCandidate) {
      // Agregar nuevo candidato
      if (newCandidate.name && newCandidate.role) {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/candidates",
            newCandidate,
            { headers: { "Content-Type": "application/json" } }
          );
          setCandidates((prev) => [...prev, response.data]);
          setNewCandidate({ name: "", role: "", description: "", image: null });
        } catch (error) {
          console.error("Error adding candidate:", error);
        }
      } else {
        alert("Please fill in all required fields.");
      }
    } else {
      // Editar candidato existente
      try {
        const response = await axios.put(
          `http://localhost:3000/api/candidates/${editCandidate._id}`,
          editCandidate,
          { headers: { "Content-Type": "application/json" } }
        );
        setCandidates((prev) =>
          prev.map((candidate) =>
            candidate._id === editCandidate._id ? response.data : candidate
          )
        );
        setEditCandidate(null);
      } catch (error) {
        console.error("Error editing candidate:", error);
      }
    }
  };

  const handleVote = async (candidateId) => {
    if (hasVoted) {
      alert("You have already voted for a candidate.");
      return;
    }

    try {
      await axios.put(`http://localhost:3000/api/candidates/vote/${candidateId}`);
      setHasVoted(true);
      setCandidates((prevCandidates) =>
        prevCandidates.map((candidate) =>
          candidate._id === candidateId
            ? { ...candidate, votes: (candidate.votes || 0) + 1 }
            : candidate
        )
      );
      alert("Your vote has been counted!");
    } catch (error) {
      console.error("Error voting for candidate:", error);
    }
  };

  const handleDeleteCandidate = async (candidateId) => {
    try {
      await axios.delete(`http://localhost:3000/api/candidates/${candidateId}`);
      setCandidates((prevCandidates) =>
        prevCandidates.filter((candidate) => candidate._id !== candidateId)
      );
    } catch (error) {
      console.error("Error deleting candidate:", error);
    }
  };

  const handleEditClick = (candidate) => {
    setEditCandidate(candidate);
  };

  return (
    <section className="bg-gradient-to-r from-blue-900 to-purple-600 p-10 min-h-screen">
      <header className="bg-white p-6 rounded-xl shadow-md max-w-5xl mx-auto mb-8">
        <h2 className="text-5xl py-4 font-bold text-center text-gray-800">Meet the Candidates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {candidates.length > 0 ? (
            candidates.map((candidate) => (
              <div
                key={candidate._id}
                className="candidate-box bg-white p-6 rounded-lg shadow-lg text-center border border-gray-500"
              >
                <img
                  src={candidate.image || icono}
                  alt={candidate.name}
                  className="mx-auto w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800">{candidate.name}</h3>
                <p className="text-gray-600">{`Candidate for ${candidate.role}`}</p>
                <p className="text-gray-500">{`Votes: ${candidate.votes || 0}`}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleVote(candidate._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mr-2"
                    disabled={hasVoted}
                  >
                    {hasVoted ? "Voted" : "Vote"}
                  </button>
                  <button
                    onClick={() => handleEditClick(candidate)}
                    className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-lg mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCandidate(candidate._id)}
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                  >
                    Delete
                  </button>
                  
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white text-xl col-span-3">
              No candidates yet. Add a new candidate below!
            </p>
          )}
          {/* Formulario */}
          <div className="candidate-box bg-white p-6 rounded-lg text-center border border-gray-500">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {editCandidate ? "Edit Candidate" : "Add New Candidate"}
            </h3>
            <input
              type="text"
              name="name"
              value={editCandidate ? editCandidate.name : newCandidate.name}
              onChange={handleInputChange}
              placeholder="Candidate Name"
              className="border p-2 rounded mb-2 w-full text-black"
            />
            <input
              type="text"
              name="role"
              value={editCandidate ? editCandidate.role : newCandidate.role}
              onChange={handleInputChange}
              placeholder="Role"
              className="border p-2 rounded mb-2 w-full text-black"
            />
            <textarea
              name="description"
              value={
                editCandidate ? editCandidate.description : newCandidate.description
              }
              onChange={handleInputChange}
              placeholder="Description"
              className="border p-2 rounded mb-2 w-full text-black"
            />
            <label className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer inline-block mt-2">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <button
              className="bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg mt-4"
              onClick={handleAddOrEditCandidate}
            >
              {editCandidate ? "Save Changes" : "Add Candidate"}
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Candidates;
