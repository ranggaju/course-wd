import { NextFunction, Request, Response } from "express";
import { login, register } from "../services/auth.service";

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const data = await login(email, password);

    res.json({
      message: "OK",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, name } = req.body;

    const data = await register({ email, password, name });

    res.json({
      message: "OK",
      data,
    });
  } catch (err) {
    next(err);
  }
};
