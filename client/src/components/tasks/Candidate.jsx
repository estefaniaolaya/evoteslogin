import React, { useState, useEffect } from "react";
import { Card } from "../ui";
import axios from "axios"; // Importa axios para realizar solicitudes HTTP
import { useVoteContext } from '../context/voteContext';
import { VoteCard } from "../ui/VoteCard"


export function Candidate() {
  const [candidates, setCandidates] = useState([]);
  const { handleVote } = useVoteContext();

  // Carga la lista de candidatos al cargar el componente
  useEffect(() => {
    fetchCandidates();
  }, []);

  // Función para cargar la lista de candidatos desde el backend
  const fetchCandidates = async () => {
    try {
      const response = await axios.get("../../api/vote"); // Ajusta la ruta según tu configuración
      setCandidates(response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  // Función para manejar el voto de un candidato
  const handleCandidateVote = async (candidateId) => {
    try {
      await handleVote(candidateId); // Llama a la función handleVote del contexto de votación
      const updatedCandidates = candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      );
      setCandidates(updatedCandidates);
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {candidates.map((candidate) => (
        <Card key={candidate.id} className="w-72">
          <h2 className="text-xl font-semibold">{candidate.name}</h2>
          <p className="text-gray-600">Votes: {candidate.votes}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={() => handleCandidateVote(candidate.id)}
          >
            Vote
          </button>
        </Card>
      ))}
    </div>
  );
}