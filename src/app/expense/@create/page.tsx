import { prisma } from "@/app/db";
import Link from "next/link";

async function createExpense(data: FormData) {
  "use server";
  try {
    const title = data.get("title") as string;
    const amount = +(data.get("amount")?.valueOf() || 0) as number;
    const description = data.get("description") as string;
    if (!title || !amount) {
      throw new Error("Invalid input");
    }
    await prisma.expense.create({
      data: {
        title,
        amount,
        description,
      },
    });
  } catch (error) {
    console.log(error);
    // send response with error message
    return { error };
  }
}

export default function create() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Create Expense</h1>
      <form action={createExpense} className="space-y-4 m-2">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <Link href=".." className="text-blue-500">
          Back
        </Link>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Expense
        </button>
      </form>
    </>
  );
}
