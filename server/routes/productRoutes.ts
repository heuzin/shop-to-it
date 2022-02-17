import express from 'express';
import {
    createProduct,
    createProductReview,
    deleteProduct,
    getProductById,
    getProducts,
    getTopProducts,
    updateProduct,
} from '../controlers/productCrontroler';
import { admin, protect } from '../middleware/authMiddleware';
const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct);

export default router;
