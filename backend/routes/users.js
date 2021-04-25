import express from 'express';
import { authUser, userProfile } from '../controllers/users.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, userProfile);

export default router;
