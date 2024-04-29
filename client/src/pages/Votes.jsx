import { useEffect } from "react";

import  VoteCard  from "../components/ui/VoteCard";
import { ImFileEmpty } from "react-icons/im";
import { useVoteContext } from '../context/voteContext';
export function VotesPage() {
  const { votes, getVotes } = useVotes(); // Usa el contexto de votos

  useEffect(() => {
    getVotes();
  }, []);

  return (
    <>
      {votes.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No votes yet, please add a new vote
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {votes.map((vote) => (
          <VoteCard vote={vote} key={vote._id} /> // Renderiza un componente VoteCard para cada voto
        ))}
      </div>
    </>
  );
}