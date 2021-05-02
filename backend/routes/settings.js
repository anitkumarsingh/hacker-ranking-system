import express from 'express';
import { settings } from '../controllers/settings.js';

const router = express.Router();

router.route('/').get(settings);

export default router;
