"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./data/users"));
const products_1 = __importDefault(require("./data/products"));
const userModel_1 = __importDefault(require("./models/userModel"));
const productModel_1 = __importDefault(require("./models/productModel"));
const orderModel_1 = __importDefault(require("./models/orderModel"));
const db_1 = __importDefault(require("./config/db"));
const colors_1 = require("colors");
dotenv_1.default.config();
(0, db_1.default)();
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield orderModel_1.default.deleteMany();
        yield productModel_1.default.deleteMany();
        yield userModel_1.default.deleteMany();
        const createdUsers = yield userModel_1.default.insertMany(users_1.default);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products_1.default.map((product) => {
            return Object.assign(Object.assign({}, product), { user: adminUser });
        });
        yield productModel_1.default.insertMany(sampleProducts);
        console.log((0, colors_1.green)('Data Imported!').inverse);
        process.exit();
    }
    catch (error) {
        console.error((0, colors_1.red)(`${error}`).inverse);
        process.exit(1);
    }
});
const destroytData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield orderModel_1.default.deleteMany();
        yield productModel_1.default.deleteMany();
        yield userModel_1.default.deleteMany();
        console.log((0, colors_1.red)('Data Destroyed!').inverse);
        process.exit();
    }
    catch (error) {
        console.error((0, colors_1.red)(`${error}`).inverse);
        process.exit(1);
    }
});
if (process.argv[2] === '-d') {
    destroytData();
}
else {
    importData();
}
