import express from 'express';
import { authUser, getUserProfile, registerUser } from '../controlers/userControler';
import { protect } from '../middleware/authMiddleware';
const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
