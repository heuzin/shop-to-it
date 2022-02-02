import express from 'express';
import { addOrderItems, getOrderById } from '../controlers/orderControler';
import { protect } from '../middleware/authMiddleware';
const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);

export default router;
