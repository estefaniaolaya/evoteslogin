import { z } from 'zod';

export const voteSchema = z.object({
  userId: z.string({
    required_error: 'User ID is required.'
  }),
  candidateId: z.string({
    required_error: 'Candidate ID is required.'
  }),
});