"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const morgan_1 = __importDefault(require("morgan"));
const colors_1 = require("colors");
const db_1 = __importDefault(require("./config/db"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/products', productRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/api/orders', orderRoutes_1.default);
app.use('/api/upload', uploadRoutes_1.default);
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));
const dirname = path_1.default.resolve();
app.use('/uploads', express_1.default.static(path_1.default.join(dirname, '/uploads')));
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(dirname, '/client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(dirname, 'client', 'build', 'index.html'));
    });
}
else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log((0, colors_1.yellow)(`Server running in ${process.env.NODE_ENV} on port ${PORT}`).bold));
