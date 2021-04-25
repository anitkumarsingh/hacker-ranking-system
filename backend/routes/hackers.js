import express from 'express';
import { getHacker, getHackers } from '../controllers/hackers.js';

const router = express.Router();

router.route('/').get(getHackers);
router.route('/:id').get(getHacker);

export default router;
