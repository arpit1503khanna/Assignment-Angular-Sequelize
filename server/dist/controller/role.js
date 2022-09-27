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
exports.getRoleData = exports.addRole = void 0;
const role_1 = __importDefault(require("../models/role"));
const addRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const key = req.body.key;
    const description = req.body.description;
    try {
        const data = yield role_1.default.create({ name: name, key: key, description: description });
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.addRole = addRole;
const getRoleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield role_1.default.findAll();
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getRoleData = getRoleData;
