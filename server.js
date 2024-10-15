import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/ConnectToMongoDB.js";
import webtoonRoutes from "./routes/webtoon.routes.js";
import cookieParser from "cookie-parser";
import path from "path";
 
const PORT = 5000;

const app = express();

const __dirname = path.resolve(); 

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/webtoon",webtoonRoutes);

app.listen(PORT,() =>{
    connectToMongoDB();

 console.log("server running on port 5000")  });