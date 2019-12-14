import { Router } from 'express';
import chatRouter from './chatRoute';

const madBotRouter = Router();
madBotRouter.use('/api/madbot', chatRouter);

export default madBotRouter;
