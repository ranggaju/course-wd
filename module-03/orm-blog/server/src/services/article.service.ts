import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

import { getUserByEmail } from "./auth.service";
import { createCustomError } from "../utils/customError";
import { cloudinaryUpload, cloudinaryRemove } from "../utils/cloudinary";

export const getArticleById = async (id: number) => {
  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) throw createCustomError(421, "Article not found");

    return article;
  } catch (err) {
    throw err;
  }
};

export const getAllArticle = async (
  page: number = 1,
  pageSize: number = 10,
  filter: Prisma.ArticleWhereInput
) => {
  try {
    if (filter.title)
      filter.title = {
        contains: filter.title as string,
        mode: "insensitive",
      };

    const articles = await prisma.article.findMany({
      select: {
        title: true,
        content: true,
        slug: true,
        cover_img: true,
        description: true,
        user: {
          select: {
            email: true,
            name: true,
          },
        },
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: filter,
    });

    return articles;
  } catch (err) {
    throw err;
  }
};

export const createArticle = async (
  email: string,
  file_img: Express.Multer.File, // UNTUK CLOUDINARY UPLOAD

  params: {
    title: string;
    description: string;
    content: string;
    cover_img: string;
    slug: string;
  }
) => {
  const { secure_url } = await cloudinaryUpload(file_img);
  try {
    const user = await getUserByEmail(email);

    if (!user) throw createCustomError(401, "Invalid user");

    const article = await prisma.article.create({
      data: {
        ...params,
        cover_img: secure_url,
        user_id: user.id,
      },
    });

    return article;
  } catch (err) {
    cloudinaryRemove(secure_url);
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

export async function deleteArticle(id: number) {
  try {
    const article = await prisma.article.delete({
      where: { id },
    });

    return article;
  } catch (err) {
    throw err;
  }
}
