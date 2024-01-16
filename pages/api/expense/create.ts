import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/app/db";

export default async function addExpense(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user || !session.user.email) {
    throw new Error("not authenticated");
  }
  if (req.method === "POST") {
    console.log(req.body);
    await prisma.$transaction([
      prisma.expense.create({ data: JSON.parse(req.body.expenses) }),
    ]);
    res.status(200).json({ success: true });
    // const expense = await prisma.expense.create({
    //   data: {
    //     title,
    //     amount,
    //     description,
    //     user: {
    //       connect: {
    //         email: session.user.email!,
    //       },
    //     },
    //   },
    // });
  } else {
    throw new Error("method not allowed");
  }
}
