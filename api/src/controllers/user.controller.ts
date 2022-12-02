import express from "express";
import UserModel from "../models/User";
import { AES } from "crypto-js";


const getUsers = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;

  try {
    if (id) {
      const user = await UserModel.findById(id);
      return res.status(200).json(user);
    } else {
      const users = await UserModel.find();
      return res.status(200).json(users);
    }
  } catch (error) {
    return res.status(500).send("No se obtener los usuarios");
  }
};

const deleteUser = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;

  try {
    const userDeleted = await UserModel.findByIdAndDelete(id);

    res.status(200).json(userDeleted);
  } catch (error) {
    res.status(500).send("Algo salio mal al eliminar");
  }
};

const updateUser = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;

  if (req.body.password) {
    req.body.password = AES.encrypt(req.body.password, "salta2578").toString();
  }

  try {
    const userUpdated = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(userUpdated);
  } catch (error) {
    res.status(500).send("Algo salio mal al eliminar");
  }
};

export { getUsers, deleteUser, updateUser };
