import express from "express";
import jwt from "jsonwebtoken";

const verifyToken = (
  req: any,
  res: express.Response,
  next: express.NextFunction
) => {
  const authToken = req.headers.token;

  if (authToken) {
    jwt.verify(authToken.toString(), "salta2578", (error: any, user: any) => {
      if (error) {
        return res.status(403).send("Token no es valido!!");
      }

      req.user = user;

      next();
      return;
    });
  } else {
    return res.status(401).send("No estas autenticado!!");
  }

  return;
};

export { verifyToken };
