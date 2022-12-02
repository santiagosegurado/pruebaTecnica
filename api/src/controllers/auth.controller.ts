import UserModel from "../models/User";
import express from "express";
import CyptoJS from "crypto-js";
import jwt from "jsonwebtoken";

// Register
const register = async (req: express.Request, res: express.Response) => {
  try {
    const passwordEncript = CyptoJS.AES.encrypt(
      req.body.password,
      "salta2578"
    ).toString();
    const newUser = new UserModel({ ...req.body, password: passwordEncript });
    const accessToken = jwt.sign({
      id: newUser._id,
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
    }, 'salta2578', {
      expiresIn: '3d'
    })
    
    await newUser.save();


    res.json({...newUser ,accessToken});
  } catch (error) {
    res.status(500).send("Algo salio mal al crear el usuario");
  }
};

// Login
const login = async (req: express.Request, res: express.Response) => {
  try {
    const userFinded = await UserModel.findOne({
      email: req.body.email,
    });

    if (!userFinded) {
      return res.status(401).json({msg: "Contraseña o Email incorrectos"});
    }
 
    const passwordDecrypt = CyptoJS.AES.decrypt(
      userFinded.password ,
      "salta2578"
    ).toString(CyptoJS.enc.Utf8);

    if (passwordDecrypt === req.body.password) {

      const accessToken = jwt.sign({
        id: userFinded._id,
        name: userFinded.name,
        username: userFinded.username,
        email: userFinded.email,
      }, 'salta2578', {
        expiresIn: '3d'
      })

      return res.status(200).json({
        _id: userFinded._id,
        name: userFinded.name,
        username: userFinded.username,
        email: userFinded.email,
        accessToken
      });
    } else {
      return res.status(401).json({msg: "Contraseña o Email incorrectos"});
    }
  } catch (error) {
    return res.status(500).send("Algo salio mal al logearse");
  }
};

export { register, login };
