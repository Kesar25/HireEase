import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./db/connection.js";
import { errorMiddleware } from "./middlewares/error.js";

const app=express();
config({path:"./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials:true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
dbConnection();

app.use(errorMiddleware);

export default app;