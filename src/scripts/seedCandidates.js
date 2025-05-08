// scripts/seedCandidates.js
import mongoose from "mongoose";
import Candidate from "../models/Candidate.js";
import { connectDB } from "../db.js";

connectDB();

const seedCandidates = async () => {
  const candidates = [
    {
      name: "Juan Pérez",
      role: "President",
      description: "Juan Pérez is running for President.",
      image: "robot1.jpg",
      votes: 0
    },
    {
      name: "María López",
      role: "Vice President",
      description: "María López is running for Vice President.",
      image: "robot2.jpg",
      votes: 0
    },
    {
      name: "Pedro González",
      role: "Treasurer",
      description: "Pedro González is running for Treasurer.",
      image: "robot3.jpg",
      votes: 0
    }
  ];

  try {
    await Candidate.insertMany(candidates); // Inserta los candidatos en la base de datos
    console.log("Candidates seeded successfully");
  } catch (error) {
    console.error("Error seeding candidates:", error);
  }

  mongoose.disconnect();
};

seedCandidates();
