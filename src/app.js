import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// app.use tab use krnge jab koi middleware ya configurations setting krni h

const app = express();

// defining cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import

import userRouter from "../routes/user.routes.js"; // we can only give any import name here only if the method have .. export default method

app.use("/api/v1/users", userRouter);

// sp the url will looks like http://localhost:8000/api/v1/users/register in frontend

export default app;
