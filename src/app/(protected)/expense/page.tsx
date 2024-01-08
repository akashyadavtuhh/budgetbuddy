"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Expense } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { prisma } from "../../db";

function getExpenses() {
  return prisma.expense.findMany();
}

export default function Expense() {
  const queryClient = useQueryClient();
  const {
    data: expenses,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const data = (await fetch("/api/expense/getAll").then((data) =>
        data.json()
      )) as Expense[];
      return data;
    },
    staleTime: Infinity,
  });
  const { mutate, isPending: isDeletePending } = useMutation({
    mutationKey: ["deleteExpense"],
    mutationFn: async (id: string | number) => {
      const response = await fetch(`/api/expense/${id}`, {
        method: "DELETE",
      });
      return response.status;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  if (isLoading) return <>Loading...</>;
  return (
    <span>
      <h1 className="text-2xl flex justify-between items-center">
        Spent
        <Link href="/expense/create" className="float-right m-2">
          <Button isIconOnly color="primary" size="md" className="rounded-full">
            <i className="fas fa-plus"></i>
          </Button>
        </Link>
      </h1>
      <ul className="flex flex-col space-y-2">
        {expenses?.map((expense) => (
          <li key={expense?.id}>
            <Card
              classNames={{
                base: "flex flex-row max-h-20",
              }}
            >
              <div className="flex-grow">
                <Card
                  classNames={{
                    base: "flex flex-row h-full p-2 items-center",
                  }}
                >
                  {/*TODO: Random icon */}
                  <i
                    className="fas fa-utensils text-center min-w-8 min-h-8 rounded-full bg-teal-200 justify-center items-center"
                    style={{ display: "flex" }}
                  ></i>
                  <CardHeader className="text-lg flex flex-col justify-start items-start">
                    {expense?.title}
                    <p className="text-sm opacity-75"> Home Supplies</p>
                  </CardHeader>
                  <CardBody className="max-h-20">
                    <p></p>
                  </CardBody>
                </Card>
              </div>
              <CardFooter className="max-w-fit flex flex-col space-y-2">
                <Button
                  size="sm"
                  isIconOnly
                  color="primary"
                  isDisabled
                  className="w-fit min-w-fit"
                >
                  <i className="fas fa-edit p-2"></i>
                </Button>
                <Button
                  size="sm"
                  isIconOnly
                  color="danger"
                  className="w-fit min-w-fit"
                  onPress={() => mutate(expense?.id)}
                >
                  <i className="fas fa-trash p-2"></i>
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </span>
  );
}
