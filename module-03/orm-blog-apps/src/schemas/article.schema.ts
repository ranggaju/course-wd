import { z } from "zod";
import { fileSchema } from "./common.schema";

export const articleCreateSchema = z.object({
  body: z.object({
    title: z.string().min(4, "Title must consists of 4 characters"),
    description: z.string().min(1, "Description is required"),
    content: z.string().min(1, "Content is required"),
  }),

  file: fileSchema,
});

export const articleBodyCreateSchema = z.object({
  title: z.string().min(4, "Title must consists of 4 characters"),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
});
