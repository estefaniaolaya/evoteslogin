import Vote from "../models/vote.model.js";

export const getVotes = async (req, res) => {
    try {
        const votes = await Vote.find({ userId: req.user.id });
        res.json(votes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};

export const createVote = async (req, res) => {
    try {
        const { userId, candidateId } = req.body;
        const newVote = new Vote({ userId, candidateId });
        const savedVote = await newVote.save();
        res.json(savedVote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};

export const deleteVote = async (req, res) => {
    try {
        const vote = await Vote.findByIdAndDelete(req.params.id);
        if (!vote) {
            return res.status(404).json({ msg: "No vote found" });
        }
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};