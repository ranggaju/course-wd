console.log(">>> article.controller.ts loaded");

import { Request, Response } from "express";
import { readJson } from "../utils";
import { IArticle } from "../interface";

export const getArticleList = (req: Request, res: Response) => {
  try {
    const data = readJson<{ articles: IArticle[] }>();
    res.json({
      message: "OK",
      data: data.articles,
    });
  } catch (err) {}
};
