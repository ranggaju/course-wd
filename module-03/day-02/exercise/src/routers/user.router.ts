import { Router, Request, Response, NextFunction } from "express";

// data users
const users = [
  {
    id: 1,
    name: "budi",
    email: "budi@email.com",
    password: "budi123",
  },
  {
    id: 2,
    name: "siti",
    email: "siti@email.com",
    password: "siti123",
  },
];

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      message: "OK",
      data: users,
    });
  } catch (err) {
    next(err);
  }
});

userRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = users.filter((user) => user.id === Number(id))[0];

    res.json({
      message: "OK",
      data: user,
    });
  } catch (err) {
    next(err);
  }
});

export default userRouter;
