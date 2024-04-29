import React from "react";

function VoteCard({ vote }) {
  return (
    <div className="vote-card">
      <h3>{vote.title}</h3>
      <p>{vote.description}</p>
      <p>Date: {vote.date}</p>
      <p>Votes: {vote.votes}</p>
      {/* Otros detalles del voto */}
    </div>
  );
}

export default VoteCard;