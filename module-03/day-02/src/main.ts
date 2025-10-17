import express, { Request, Response } from "express";
import cors from "cors";

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

// users (collective)
app.get("/api/users", (req: Request, res: Response) => {
  const { title, type, category } = req.query;

  res.json({
    message: "OK",
    data: "Semua data users",
    query: req.query,
  });
});

// user (singleton)
app.get("/api/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "OK",
    data: `Satu data user dengan id ${req.params.id}`,
  });
});

app.post("/api/users", (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.json({
    message: "OK Boss",
    data: {
      email,
      password,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
