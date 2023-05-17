import { DataSource } from "typeorm";
import dotenv = require("dotenv");
import {User} from "../entities/User.entity";
dotenv.config();

const dataSource =  new DataSource({
    type: 'postgres',
    host: process.env.DB_POSTGRES_HOST,
    port: parseInt(`${process.env.DB_POSTGRES_PORT}`),
    username: process.env.DB_POSTGRES_USER,
    password: process.env.DB_POSTGRES_PASSWORD,
    database: process.env.DB_POSTGRES_DATABASE,
    entities: ["../entities/*.ts"]
})

const getConnect = async () => {
    if(!dataSource.isInitialized) {
        console.log("Trying to connect to the database");
        await  dataSource.initialize();
    }else console.log("recycled connection");
    console.log("Successfully connected!");
    return dataSource;
}

export default getConnect;
