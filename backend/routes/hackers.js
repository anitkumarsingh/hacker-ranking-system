import express from 'express';
import { getHacker, getHackers, getTop3Hackers } from '../controllers/hackers.js';

const router = express.Router();

router.route('/').get(getHackers);
router.route('/:id').get(getHacker);
router.route('/top/3').get(getTop3Hackers);

export default router;
