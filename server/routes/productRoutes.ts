import express from 'express';
import { getProductById, getProducts } from '../controlers/productCrontroler';
const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
