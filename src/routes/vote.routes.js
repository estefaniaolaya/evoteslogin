import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getVotes, createVote, deleteVote } from "../controllers/vote.controller.js";
import { validateSchema } from '../middlewares/validate.middleware.js';
import { voteSchema } from '../schemas/vote.schemas.js'; // Asegúrate de tener el archivo de esquema de votación correctamente nombrado

const router = Router();

router.get("/votes", authRequired, getVotes);
router.post("/votes", authRequired, validateSchema(voteSchema), createVote);
router.delete("/votes/:id", authRequired, deleteVote);

export default router;