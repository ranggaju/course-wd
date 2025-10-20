// controllers/expenseController.ts
import { Request, Response } from "express";
import { readData, writeData } from "../utils/fileHandler";

export interface IExpense {
  id: string;
  title: string;
  nominal: number;
  category: string;
  date: string; // format ISO string, misal "2025-10-20"
  type: "income" | "expense";
}

// GET all expenses
export const getExpenses = (req: Request, res: Response) => {
  const expenses: IExpense[] = readData();
  res.json(expenses);
};

// GET expense by ID
export const getExpenseById = (req: Request, res: Response) => {
  const expenses: IExpense[] = readData();
  const expense = expenses.find((e) => e.id === req.params.id);
  if (!expense) return res.status(404).json({ message: "Expense not found" });
  res.json(expense);
};

// CREATE new expense
export const createExpense = (req: Request, res: Response) => {
  const expenses: IExpense[] = readData();
  const newExpense: IExpense = {
    id: Date.now().toString(),
    ...req.body,
  };
  expenses.push(newExpense);
  writeData(expenses);
  res.status(201).json(newExpense);
};

// UPDATE expense
export const updateExpense = (req: Request, res: Response) => {
  const expenses: IExpense[] = readData();
  const index = expenses.findIndex((e) => e.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Expense not found" });

  expenses[index] = { ...expenses[index], ...req.body };
  writeData(expenses);
  res.json(expenses[index]);
};

// DELETE expense
export const deleteExpense = (req: Request, res: Response) => {
  const expenses: IExpense[] = readData();
  const index = expenses.findIndex((e) => e.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Expense not found" });

  const deleted = expenses.splice(index, 1);
  writeData(expenses);
  res.json(deleted[0]);
};

// GET total by date range
export const getTotalByDateRange = (req: Request, res: Response) => {
  const start = req.query.start as string | undefined;
  const end = req.query.end as string | undefined;

  if (!start || !end) {
    return res
      .status(400)
      .json({ message: "Start and end query params are required" });
  }

  const expenses: IExpense[] = readData();
  const filtered = expenses.filter((e) => e.date >= start && e.date <= end);
  const total = filtered.reduce((sum, e) => sum + Number(e.nominal), 0);

  res.json({ total });
};

// GET total by category
export const getTotalByCategory = (req: Request, res: Response) => {
  const expenses: IExpense[] = readData();
  const totals: Record<string, number> = {};

  expenses.forEach((e) => {
    if (!totals[e.category]) totals[e.category] = 0;
    totals[e.category] += Number(e.nominal);
  });

  res.json(totals);
};
