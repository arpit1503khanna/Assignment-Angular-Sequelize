import express = require('express');
import cors = require('cors');
import sequelize from './util/db';
require('dotenv').config();

import userRouter from "./routes/user";
import roleRouter from './routes/role';
import customerRouter from './routes/customer';

import User from './models/user';
import Customer from './models/customer';
import Role from './models/role';

const app = express();

app.use(express.json({limit: "30mb"}));
app.use(cors());

app.use('/user',userRouter);
app.use('/role',roleRouter);
app.use('/customer',customerRouter);

User.belongsTo(Customer, {
        foreignKey: 'cid'
      });
User.belongsTo(Role, {
        foreignKey: 'rid'
      });

sequelize
    .sync()
    .then(()=>{
        console.log('successful Connection');
        app.listen(9010);
    })
    .catch(err =>{
        console.log('error :',err);
    })