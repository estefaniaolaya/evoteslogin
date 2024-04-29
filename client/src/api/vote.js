import axios from "./axios";

// Obtener todos los votos
export const getVotesRequest = async () => {
  try {
    const response = await axios.get("/votes");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los votos:", error);
    throw error;
  }
};

// Crear un voto
export const createVoteRequest = async (voteData) => {
  try {
    const response = await axios.post("/votes", voteData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el voto:", error);
    throw error;
  }
};

// Actualizar un voto
export const updateVoteRequest = async (voteId, updatedVoteData) => {
  try {
    const response = await axios.put(`/votes/${voteId}`, updatedVoteData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el voto:", error);
    throw error;
  }
};

// Eliminar un voto
export const deleteVoteRequest = async (voteId) => {
  try {
    const response = await axios.delete(`/votes/${voteId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el voto:", error);
    throw error;
  }
};

// Obtener un voto por ID
export const getVoteRequest = async (voteId) => {
  try {
    const response = await axios.get(`/votes/${voteId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el voto:", error);
    throw error;
  }
};