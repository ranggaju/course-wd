import fs from "fs";
import path from "path";

export interface IExpense {
  id: string;
  title: string;
  nominal: number;
  type: "income" | "expense";
  category: string;
  date: string;
}

const filePath = path.join(__dirname, "../../data/expense.json");

export const readData = (): IExpense[] => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as IExpense[];
};

export const writeData = (data: IExpense[]) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
