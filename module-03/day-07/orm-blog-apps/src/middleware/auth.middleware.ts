import { NextFunction, Request, Response } from "express";
import { createCustomError } from "../utils/customError";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../configs/env.config";

export interface Token {
  email: string;
  name: string;
  role: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: Token;
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer "))
      throw createCustomError(401, "Unauthorized");

    const token = authHeader.split(" ")[1];
    const decode = verify(token, SECRET_KEY) as Token;

    req.user = decode;

    next();
  } catch (err) {
    next(err);
  }
};

export const roleGuard = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!user) throw createCustomError(401, "Invalid token");

      if (!allowedRoles.includes(user?.role))
        throw createCustomError(401, "Insufficient permissions");

      next();
    } catch (err) {
      next(err);
    }
  };
};
