import { Router } from 'express';
import MadBot from '../controllers/MadBot';

const chatRouter = Router();

chatRouter.post('/incoming', MadBot.getSenator);

export default chatRouter;