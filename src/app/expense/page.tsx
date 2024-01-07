import Link from "next/link";
import ExpenseItem from "@/components/expense/Item";
import { prisma } from "../db";

function getExpenses() {
  return prisma.expense.findMany();
}

export default async function Expense() {
  const expenses = await getExpenses();
  return (
    <>
      <h1>Expense</h1>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
      <Link href="/expense/create" className="float-right m-2">
        <p className="bg-purple-500 text-white p-2 rounded w-fit">Create</p>
      </Link>
    </>
  );
}
