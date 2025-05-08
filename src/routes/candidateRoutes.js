import express from "express";
import {
  getAllCandidates,
  getCandidateById,
  createCandidate,
  updateCandidate,
  deleteCandidate,
  voteCandidate, // Importa la función de votación
} from "../controllers/candidate.controller.js";

const router = express.Router();

// Rutas para manejar candidatos
router.get("/", getAllCandidates);
router.get("/:id", getCandidateById);
router.post("/", createCandidate);
router.put("/:id", updateCandidate);
router.delete("/:id", deleteCandidate);

// Ruta para votar por un candidato
router.put("/vote/:id", voteCandidate); // Ruta específica para votar

export default router;


