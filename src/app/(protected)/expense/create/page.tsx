"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
} from "@nextui-org/react";
import { Expense } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

export default function Create({
  throughModel = false,
}: {
  throughModel?: boolean;
}) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [expenses, setExpenses] = React.useState<
    Pick<Expense, "title" | "amount" | "description">[]
  >([]);
  const [expense, setExpense] = React.useState<
    Pick<Expense, "title" | "amount" | "description">
  >({
    title: "Expense1",
    amount: 10,
    description: "dsad",
  });
  const { mutate: createExpense } = useMutation({
    mutationKey: ["createExpense"],
    mutationFn: async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault();
      try {
        const payload = throughModel ? [expense] : expenses;
        console.log(payload, "payload");
        const response = await fetch("/api/expense/create", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        console.log(response, "response");
        return response.status;
      } catch (err) {
        console.log(err);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddToExpenses = () => {
    if (expense.title && expense.amount) {
      setExpenses((prev) => [...prev, expense]);
      setExpense({
        title: "",
        amount: 0,
        description: "",
      });
    }
  };

  return (
    <>
      <Card className="flex justify-center items-center h-full">
        <CardHeader className="block">
          {!throughModel && (
            <p className="float-left">
              You spent <span className="text-primary m-2"> $0 </span> today
            </p>
          )}
          <span className="space-x-2 float-right">
            {throughModel && (
              <Button
                color="primary"
                isIconOnly
                variant="bordered"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  location.assign("/expense/create");
                }}
              >
                <i className="fas fa-expand"></i>
              </Button>
            )}
            <Button
              color="primary"
              isIconOnly
              variant="bordered"
              size="sm"
              className="rounded-full"
              onClick={() => router.back()}
            >
              <i className="fas fa-arrow-left"></i>
            </Button>
          </span>
        </CardHeader>
        <CardBody className="flex justify-center items-center space-y-2">
          <Input
            type="text"
            fullWidth
            label="What did you spend on?"
            variant="bordered"
            name="title"
            value={expense.title}
            onChange={handleChange}
            errorMessage=""
            className="max-w-xs"
          />
          <Input
            type="number"
            fullWidth
            label="How much did you spend?"
            variant="bordered"
            name="amount"
            value={String(expense.amount || "")}
            onChange={handleChange}
            errorMessage=""
            className="max-w-xs"
          />
          <Textarea
            name="description"
            label="Please describe your expense"
            value={expense.description!}
            onChange={handleChange}
            className="max-w-xs"
          />
          {!throughModel && (
            <Button className="float-right" onClick={handleAddToExpenses}>
              <i className="fas fa-plus"></i> Add Expense
            </Button>
          )}
        </CardBody>
        <CardFooter className="block">
          <Button onClick={createExpense} className="float-right">
            <i className="fas fa-save"></i> Save
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
