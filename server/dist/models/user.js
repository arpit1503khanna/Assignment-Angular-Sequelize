"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_1 = __importDefault(require("../util/db"));
const User = db_1.default.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    middle_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone_number: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cid: {
        type: Sequelize.UUID,
        allowNull: false
    },
    rid: {
        type: Sequelize.UUID,
        allowNull: false
    }
});
// module.exports = User;
exports.default = User;
