"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const db_1 = __importDefault(require("./util/db"));
require('dotenv').config();
const user_1 = __importDefault(require("./routes/user"));
const role_1 = __importDefault(require("./routes/role"));
const customer_1 = __importDefault(require("./routes/customer"));
const user_2 = __importDefault(require("./models/user"));
const customer_2 = __importDefault(require("./models/customer"));
const role_2 = __importDefault(require("./models/role"));
const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(cors());
app.use('/user', user_1.default);
app.use('/role', role_1.default);
app.use('/customer', customer_1.default);
user_2.default.belongsTo(customer_2.default, {
    foreignKey: 'cid'
});
user_2.default.belongsTo(role_2.default, {
    foreignKey: 'rid'
});
db_1.default
    .sync()
    .then(() => {
    console.log('successful Connection');
    app.listen(9010);
})
    .catch(err => {
    console.log('error :', err);
});
