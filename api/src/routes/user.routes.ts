import { Router } from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verifyToken";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", verifyToken, getUsers);
userRouter.delete("/:id", verifyToken, deleteUser);
userRouter.put("/:id", verifyToken, updateUser);

export default userRouter;
