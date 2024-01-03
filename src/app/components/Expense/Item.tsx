"use client";

import { Expense } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ExpenseItem({
  id,
  amount,
  created_at,
  description,
  include_analytics,
  timestamp,
  title,
  updated_at,
}: Expense) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/expense/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        router.refresh();
      }
    } catch (error) {
      // TODO: Handle error
    } finally {
      setLoading(false);
    }
  };
  return (
    <li
      className="py-2 px-3 bg-teal-300 flex justify-start items-center"
      key={id}
    >
      <span className="flex space-x-2 flex-col">
        <h2 className="font-bold">{title}</h2>
        <p className="bg-teal-100 w-fit px-2 rounded">{amount}</p>
      </span>
      <button
        className="bg-red-500 rounded p-2 text-white ml-auto mr-0"
        onClick={handleDelete}
        disabled={loading}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  );
}
