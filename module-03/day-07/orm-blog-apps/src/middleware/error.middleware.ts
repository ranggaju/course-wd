import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/customError";

const errorMiddleware = (
  err: CustomError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = "statusCode" in err ? err.statusCode : 500;
  const message = err.message || "Internal server error";

  res.status(status).json({
    message: "NG",
    error: message,
  });
};

export default errorMiddleware;
