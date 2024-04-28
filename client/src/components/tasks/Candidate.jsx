import React from "react";
import { useTasks } from "../../context/tasksContext";
import { Button, } from "../ui";
import { Card } from 'primereact/card';

export function CandidateCard({ candidate }) {
  const { voteCandidate } = useTasks(); // Suponiendo que tengas una función para votar al candidato

  return (
    <Card title={candidate.name} subTitle={candidate.position} className="md:w-25rem">
      <div className="flex justify-center mb-4">
        <img src={candidate.imageUrl} alt={candidate.name} className="w-32 h-32 rounded-full" />
      </div>
      <p className="text-center font-semibold">{candidate.grade}</p>
      <div className="flex justify-around mt-4">
        <Button onClick={() => voteCandidate(candidate.id)}>Vote</Button>
      </div>
    </Card>
  );
}