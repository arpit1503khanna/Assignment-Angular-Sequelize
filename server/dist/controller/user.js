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
exports.updateUser = exports.createUser = exports.deleteUser = exports.getUserData = void 0;
const role_1 = __importDefault(require("../models/role"));
const user_1 = __importDefault(require("../models/user"));
const getUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_1.default.findAll({ include: ['role', 'customer'] });
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUserData = getUserData;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield user_1.default.destroy({
            where: { id: id }
        });
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUser = deleteUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const role = req.body.rid;
    const cid = req.body.cid;
    try {
        const rid = yield role_1.default.findOne({
            where: { name: role }
        });
        const data = yield user_1.default.create({
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            address: address,
            rid: rid === null || rid === void 0 ? void 0 : rid.toJSON().id,
            cid: cid
        });
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    try {
        const data = yield user_1.default.update({
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            address: address
        }, {
            where: { id: id }
        });
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateUser = updateUser;
