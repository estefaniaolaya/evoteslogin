// models/Candidate.js
import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  votes: { type: Number, default: 0 },  // Asegúrate de tener el campo 'votes'
});

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
