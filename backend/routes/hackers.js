import express from 'express';
import {
	getHacker,
	getHackers,
	getTop3Hackers,
	updateHackerDetails
} from '../controllers/hackers.js';
import { auth, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getHackers);
router.route('/:id').get(getHacker).put(auth, updateHackerDetails);
router.route('/top/3').get(getTop3Hackers);
// router.route('/rank').get(getTop3Hackers);

export default router;
