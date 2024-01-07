import { prisma } from "@/app/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllExpenses(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log(req.method, "method");
    const expenses = await prisma.expense.findMany();
    if (expenses) {
      return res.status(200).json(expenses);
    }
    console.log(expenses, "expenses");
  } else {
    throw new Error("method not allowed");
  }
}
