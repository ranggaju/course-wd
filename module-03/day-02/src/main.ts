import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import router from "./routers";
import { error } from "console";

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

// // users (collective)
// app.get("/api/users", (req: Request, res: Response) => {
//   const { title, type, category } = req.query;

//   res.json({
//     message: "OK",
//     data: "Semua data users",
//     query: req.query,
//   });
// });

// // user (singleton)
// app.get("/api/users/:id", (req: Request, res: Response) => {
//   const { id } = req.params;

//   res.json({
//     message: "OK",
//     data: `Satu data user dengan id ${req.params.id}`,
//   });
// });

// app.post(
//   "/api/users",
//   ValidationMiddleware,
//   (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { email, password } = req.body;

//       if (email !== "Budi") throw new Error("Indvalid email");

//       res.json({
//         message: "OK",
//         data: {
//           email,
//           password,
//         },
//       });
//     } catch (err) {
//       next(err);
//     }
//   }
// );

// function ValidationMiddleware(req: Request, res: Response, next: NextFunction) {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       message: "Email and Password are required",
//     });
//   }

//   next();
// }

app.use("/api", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    message: "NG (Not Good)",
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
