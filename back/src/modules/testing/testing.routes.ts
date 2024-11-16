import { isAuthenticated } from '@/middleware/auth.middleware';
import { Router } from 'express';
import * as testController from './testing.controller';

const router = Router();

router.get('/skill-pool', isAuthenticated, testController.getSkills);

router.post('/generate', isAuthenticated, testController.createTest);

export default router;