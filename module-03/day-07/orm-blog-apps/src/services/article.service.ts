import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";
import { createCustomError } from "../utils/customError";

export const getArticleById = async (id: number) => {
  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) throw createCustomError(404, "Article not found");

    return article;
  } catch (err) {
    throw err;
  }
};

export const getAllArticle = async (
  page: number,
  pageSize: number,
  filter: Prisma.ArticleWhereInput
) => {
  try {
    if (filter.title) {
      filter.title = {
        contains: filter.title as string,
        mode: "insensitive",
      };
    }

    const articles = await prisma.article.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return articles;
  } catch (err) {
    throw err;
  }
};

export const createArticle = async (params: Prisma.ArticleCreateInput) => {
  try {
    const article = await prisma.article.create({
      data: params,
    });

    return article;
  } catch (err) {
    throw err;
  }
};

export const updateArticle = async (
  id: number,
  params: Prisma.ArticleUpdateInput
) => {
  try {
    const article = await prisma.article.update({
      where: { id },
      data: { ...params },
    });

    return article;
  } catch (err) {
    throw err;
  }
};

export const deleteArticle = async (id: number) => {
  try {
    const article = await prisma.article.delete({
      where: { id },
    });

    return article;
  } catch (err) {
    throw err;
  }
};
