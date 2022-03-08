"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users = [
    {
        name: 'Matheus Silva',
        email: 'msilvaqs@outlook.com',
        password: bcryptjs_1.default.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jhon Doe',
        email: 'jhon@outlook.com',
        password: bcryptjs_1.default.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@outlook.com',
        password: bcryptjs_1.default.hashSync('123456', 10),
    },
];
exports.default = users;
