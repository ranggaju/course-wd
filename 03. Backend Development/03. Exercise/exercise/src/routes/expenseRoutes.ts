import { Router } from "express";
import {
  getExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
  getTotalByDateRange,
  getTotalByCategory,
} from "../controllers/expenseController";

const router = Router();

router.get("/", getExpenses);
router.get("/:id", getExpenseById);
router.post("/", createExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);
router.get("/total/date-range", getTotalByDateRange);
router.get("/total/category", getTotalByCategory);

export default router;
