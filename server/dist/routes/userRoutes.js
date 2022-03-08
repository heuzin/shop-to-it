"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControler_1 = require("../controlers/userControler");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.route('/').post(userControler_1.registerUser).get(authMiddleware_1.protect, authMiddleware_1.admin, userControler_1.getUsers);
router.post('/login', userControler_1.authUser);
router.route('/profile').get(authMiddleware_1.protect, userControler_1.getUserProfile).put(authMiddleware_1.protect, userControler_1.updateUserProfile);
router
    .route('/:id')
    .delete(authMiddleware_1.protect, authMiddleware_1.admin, userControler_1.deleteUser)
    .get(authMiddleware_1.protect, authMiddleware_1.admin, userControler_1.getUserById)
    .put(authMiddleware_1.protect, authMiddleware_1.admin, userControler_1.updateUser);
exports.default = router;
