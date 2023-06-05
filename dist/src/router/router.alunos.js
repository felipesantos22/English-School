"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerAlunos = express_1.default.Router();
routerAlunos.get('/', () => {
    console.log("Cadastro de alunos!");
});
exports.default = routerAlunos;
