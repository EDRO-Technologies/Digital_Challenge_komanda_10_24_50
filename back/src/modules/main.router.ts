import { Router } from 'express';

import userRouter from './user/user.routes';
import authRouter from './auth/auth.routes';
import uploadRouter from './uploads/uploads.routes';
import teamRouter from './team/team.routes';
import testRouter from './testing/testing.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/uploads', uploadRouter);
router.use('/team', teamRouter);
router.use('/test', testRouter);

export default router;