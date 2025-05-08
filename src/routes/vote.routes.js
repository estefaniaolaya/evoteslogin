// src/routes/vote.routes.js
import express from 'express';
import { voteForCandidate } from '../controllers/voteController.js';

const router = express.Router();

// Ruta para votar por un candidato
router.post('/:candidateId/vote', voteForCandidate);

export default router;