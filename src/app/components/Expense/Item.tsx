import { Expense } from "@prisma/client";


export default function ExpenseItem({ expense }: { expense: Expense }) {
  return <li key={expense.id}>{expense.title}</li>;
}
