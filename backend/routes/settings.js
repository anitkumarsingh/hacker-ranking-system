import express from 'express';
import { settings, updateSettings } from '../controllers/settings.js';
import { isAdmin, auth } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(settings);
router.route('/:id').put(auth, updateSettings);

export default router;
