"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productCrontroler_1 = require("../controlers/productCrontroler");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.route('/').get(productCrontroler_1.getProducts).post(authMiddleware_1.protect, authMiddleware_1.admin, productCrontroler_1.createProduct);
router.route('/:id/reviews').post(authMiddleware_1.protect, productCrontroler_1.createProductReview);
router.get('/top', productCrontroler_1.getTopProducts);
router.route('/:id').get(productCrontroler_1.getProductById).delete(authMiddleware_1.protect, authMiddleware_1.admin, productCrontroler_1.deleteProduct).put(authMiddleware_1.protect, authMiddleware_1.admin, productCrontroler_1.updateProduct);
exports.default = router;
