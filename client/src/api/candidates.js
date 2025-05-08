// routes/candidate.routes.js
import express from "express";
import { getAllCandidates, getCandidateById, createCandidate, updateCandidate, deleteCandidate } from "../controllers/candidate.controller.js";

const router = express.Router();

// Obtener todos los candidatos
router.get("/", getAllCandidates);

// Obtener un candidato por ID
router.get("/:id", getCandidateById);

router.post("/", createCandidate);  // Esta ruta está configurada para el POST en /api/candidates
// Actualizar un candidato por ID
router.put("/:id", updateCandidate);

// Eliminar un candidato por ID
router.delete("/:id", deleteCandidate);

export default router;
