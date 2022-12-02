import express from "express";
import dbConection from "./db";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import cors from 'cors';

const app = express();
const PORT = 4000;

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Conectado al Sever ${PORT}`);
  dbConection();
});
