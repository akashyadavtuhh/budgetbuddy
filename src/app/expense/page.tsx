import ExpenseItem from "../components/Expense/Item";
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
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </>
  );
}
