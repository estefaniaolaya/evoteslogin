import { createContext, useContext, useState } from "react";
import { createVoteRequest, deleteVoteRequest, getVotesRequest, getVoteRequest, updateVoteRequest } from "../api/vote";

export const VoteContext = createContext();

export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (!context) throw new Error("useVoteContext must be used within a VoteProvider");
  return context;
};

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState([]);

  const getVotes = async () => {
    try {
      const res = await getVotesRequest();
      setVotes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVote = async (id) => {
    try {
      const res = await deleteVoteRequest(id);
      if (res.status === 204) setVotes(votes.filter((vote) => vote._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createVote = async (voteData) => {
    try {
      const res = await createVoteRequest(voteData);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getVote = async (id) => {
    try {
      const res = await getVoteRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateVote = async (id, updatedVoteData) => {
    try {
      await updateVoteRequest(id, updatedVoteData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VoteContext.Provider value={{ votes, getVotes, deleteVote, createVote, getVote, updateVote }}>
      {children}
    </VoteContext.Provider>
  );
};