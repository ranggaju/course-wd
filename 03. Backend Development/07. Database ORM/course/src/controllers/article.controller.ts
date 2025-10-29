import { NextFunction, Request, Response } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticle,
  getArticleById,
  updateArticle,
} from "../services/article.services";

export const getAllArticleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    getAllArticle;
  } catch (err) {
    next(err);
  }
};

export const getArticleByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    getArticleById;
  } catch (err) {
    next(err);
  }
};

export const createArticleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    createArticle;
  } catch (err) {
    next(err);
  }
};

export const updateArticleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    updateArticle;
  } catch (err) {
    next(err);
  }
};

export const deleteArticleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    deleteArticle;
  } catch (err) {
    next(err);
  }
};
