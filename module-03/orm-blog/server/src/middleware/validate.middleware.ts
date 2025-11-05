import { Request, Response, NextFunction } from "express";
import { z, ZodError, ZodSchema } from "zod";

export const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        file: req.file,
      });

      next();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const zodError = err as ZodError;
        return res.status(400).json({
          message: "NG",
          error: "Falidation failed",
          details: zodError.issues.map((error: any) => ({
            field: error.path.join("."),
            message: error.message,
          })),
        });
      }
    }
  };
};

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);

      next();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const zodError = err as ZodError;
        return res.status(400).json({
          message: "NG",
          error: "Falidation failed",
          details: zodError.issues.map((error: any) => ({
            field: error.path.join("."),
            message: error.message,
          })),
        });
      }
    }
  };
};
