import { NextFunction, Response, Request } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticle,
  getArticleById,
  updateArticle,
} from "../services/article.service";

export const getArticleByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    const { id } = req.params;

    const articleId = Number(id);

    const data = await getArticleById(articleId);

    res.json({
      message: "OK",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllArticleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { page, pageSize, title } = req.query;

    const pageParams = page ? Number(page) : 1;
    const pageSizeParams = pageSize ? Number(pageSize) : 10;

    const data = await getAllArticle(pageParams, pageSizeParams, {
      title: title as string,
    });

    res.json({
      message: "OK",
      data,
    });
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
    const { title, description, content, cover_img } = req.body;

    const slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const data = await createArticle({
      title,
      description,
      content,
      cover_img,
      slug,
    });

    res.json({
      message: "OK",
      data,
    });
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
    const { id } = req.params;

    const articleId = Number(id);
    const articleBody = req.body;

    const data = await updateArticle(articleId, articleBody);

    res.json({
      message: "OK",
      data,
    });
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
    const { id } = req.params;

    const articleId = Number(id);

    const data = await deleteArticle(articleId);

    res.json({
      message: "OK",
      data,
    });
  } catch (err) {
    next(err);
  }
};
