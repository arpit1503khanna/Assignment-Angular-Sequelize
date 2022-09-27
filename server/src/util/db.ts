import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize('MyDb', 'arpit', 'test123', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
  });


export default sequelize;

