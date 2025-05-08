import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate", required: true },
});

export default mongoose.model("Vote", voteSchema);
