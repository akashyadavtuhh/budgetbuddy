-- AlterTable
ALTER TABLE "Expense" ADD COLUMN "default_currency" TEXT DEFAULT 'EUR';

-- AlterTable
ALTER TABLE "User" ADD COLUMN "default_currency" TEXT DEFAULT 'EUR';
