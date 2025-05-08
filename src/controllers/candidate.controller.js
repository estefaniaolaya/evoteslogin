import Candidate from "../models/Candidate.js"; // Modelo del candidato

// Obtener todos los candidatos
export const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidates", error: error.message });
  }
};

// Obtener un candidato por ID
export const getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidate", error: error.message });
  }
};

// Crear un nuevo candidato
export const createCandidate = async (req, res) => {
  try {
    const { name, role, description, image } = req.body;
    const newCandidate = new Candidate({ name, role, description, image });
    await newCandidate.save();
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ message: "Error creating candidate", error: error.message });
  }
};

// Actualizar un candidato por ID
export const updateCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ message: "Error updating candidate", error: error.message });
  }
};

// Eliminar un candidato por ID
export const deleteCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndDelete(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(200).json({ message: "Candidate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting candidate", error: error.message });
  }
};

// Función para votar por un candidato
export const voteCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    candidate.votes = (candidate.votes || 0) + 1; // Incrementar el número de votos
    await candidate.save(); // Guardar los cambios en la base de datos

    res.status(200).json({ message: "Vote counted successfully", votes: candidate.votes });
  } catch (error) {
    res.status(500).json({ message: "Error processing vote", error: error.message });
  }
};
