import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";
import { createCustomError } from "../utils/customError";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../configs/env.config";

const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  } catch (err) {
    throw err;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const user = await getUserByEmail(email);

    if (!user) throw createCustomError(401, "Invalid email or password");

    const isValidPassword = compareSync(password, user.password);

    if (!isValidPassword)
      throw createCustomError(401, "Invalid email or password");

    const payload = {
      email: user.email,
      name: user.name,
      role: user.role,
    };

    const token = sign(payload, SECRET_KEY, { expiresIn: "1h" });

    return {
      user: payload,
      token,
    };
  } catch (err) {
    throw err;
  }
};

export const register = async (params: Prisma.UserCreateInput) => {
  try {
    const isExist = await getUserByEmail(params.email);

    if (isExist) throw createCustomError(401, "Email already exists");

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(params.password, salt);

    const user = await prisma.user.create({
      select: {
        email: true,
      },
      data: {
        email: params.email,
        password: hashedPassword,
      },
    });

    return user;
  } catch (err) {
    throw err;
  }
};
