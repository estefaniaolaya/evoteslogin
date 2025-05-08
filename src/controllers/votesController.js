import User from "../models/user.model.js";  // Asegúrate de importar desde el archivo correcto
import Candidate from "../models/Candidate.js"; // Now using ES Module import

// Endpoint para verificar si un usuario ya ha votado
export const checkIfUserHasVoted = async (req, res) => {
  const { userId } = req.params;

  try {
    // Verifica si el usuario existe en la base de datos
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Retorna si el usuario ha votado o no
    return res.json({ hasVoted: user.hasVoted });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Endpoint para registrar el voto de un usuario por un candidato
export const voteForCandidate = async (req, res) => {
  const { userId } = req.body; // Recibe el userId desde el body de la solicitud
  const { candidateId } = req.params; // Recibe el candidateId desde los parámetros de la URL

  try {
    // Verificar si el usuario existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Verificar si el usuario ya ha votado
    if (user.hasVoted) {
      return res.status(400).json({ message: "You have already voted!" });
    }

    // Verificar si el candidato existe
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // Registrar el voto (incrementar votos del candidato)
    candidate.votes += 1;
    await candidate.save();

    // Marcar al usuario como que ya votó
    user.hasVoted = true;
    await user.save();

    return res.status(200).json({ message: "Vote registered successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
