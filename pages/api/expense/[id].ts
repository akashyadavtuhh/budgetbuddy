import { prisma } from "@/app/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const expenseId = String(req.query.id);

  if (req.method === "DELETE") {
    try {
      await prisma.expense.delete({
        where: { id: expenseId },
      });
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Delete operation failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
