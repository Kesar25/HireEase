import expres from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=expres();
config({path:"./config/config.env"});
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials:true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

export default app;