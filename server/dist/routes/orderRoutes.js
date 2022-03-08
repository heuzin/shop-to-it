"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderControler_1 = require("../controlers/orderControler");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.route('/').post(authMiddleware_1.protect, orderControler_1.addOrderItems).get(authMiddleware_1.protect, authMiddleware_1.admin, orderControler_1.getOrders);
router.route('/myorders').get(authMiddleware_1.protect, orderControler_1.getMyOrders);
router.route('/:id').get(authMiddleware_1.protect, orderControler_1.getOrderById);
router.route('/:id/pay').put(authMiddleware_1.protect, orderControler_1.updateOrderToPaid);
router.route('/:id/deliver').put(authMiddleware_1.protect, authMiddleware_1.admin, orderControler_1.updateOrderToDelivered);
exports.default = router;
