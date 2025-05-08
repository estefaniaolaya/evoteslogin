import express from "express";
import mongoose from "mongoose";
import Candidate from "../models/Candidate.js";  // Use import for ES modules

const router = express.Router();

// Ruta para votar por un candidato
router.put("/candidates/vote/:id", async (req, res) => {
  const candidateId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(candidateId)) {
    return res.status(400).json({ message: "Invalid candidate ID format" });
  }

  try {
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    candidate.votes += 1;
    await candidate.save();

    res.status(200).json({ message: "Vote counted", votes: candidate.votes });
  } catch (error) {
    console.error("Error while voting:", error);
    res.status(500).json({ message: "Error while voting" });
  }
});

export default router;  // Export the router as default
