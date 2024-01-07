"use client";
import Link from "next/link";
import ExpenseItem from "@/components/expense/Item";
import { prisma } from "../../db";
import { useQuery } from "@tanstack/react-query";
import { Expense } from "@prisma/client";

function getExpenses() {
  return prisma.expense.findMany();
}

export default function Expense() {
  const {
    data: expenses,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["expense"],
    queryFn: async () => {
      const data = (await fetch("/api/expense/getAll").then((data) =>
        data.json()
      )) as Expense[];
      return data;
    },
    staleTime: Infinity,
  });
  console.log(expenses);
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <h1>Expense</h1>
      <ul>
        {expenses?.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
      <Link href="/expense/create" className="float-right m-2">
        <p className="bg-purple-500 text-white p-2 rounded w-fit">Create</p>
      </Link>
    </>
  );
}
