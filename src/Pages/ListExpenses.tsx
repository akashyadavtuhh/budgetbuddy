import { useMemo, useState } from 'react';
import ExpenseItem from '../components/ExpenseItem/ExpenseItem';
import { useConsumeBudget } from '../hooks/store/provider';
import { formatDate } from '../utils/date';

const ListExpenses = () => {
  const { expenses, budget } = useConsumeBudget();
  const [count, setCount] = useState(0);
  const dayExpenses = new Map();
  let totalExpenses = 0;

  const expensesByDate = useMemo(() => {
    return expenses.reduce(
      (acc, expense) => {
        const date = new Date(expense.timestamp);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const formattedDate = new Date(year, month, day).toISOString();
        if (!acc[formattedDate]) {
          acc[formattedDate] = [];
          dayExpenses.set(formattedDate, 0);
        }
        acc[formattedDate].push(expense);
        totalExpenses += expense.cost;
        dayExpenses.set(formattedDate, dayExpenses.get(formattedDate) + expense.cost);
        return acc;
      },
      {} as { [key: string]: any[] },
    );
  }, [expenses]);

  return (
    <>
      <div className="border-2 border-solid px-2 border-gray-200 rounded-lg bg-gray-200">
        <ExpnsesOverview budget={budget} totalExpenses={totalExpenses} />
        <button
          className="text-2xl fixed bottom-8 scale-125 z-20 right-8 cursor-pointer text-black rounded-full border-2 w-10 h-10 bg-gray-200 border-gray-300 hover:bg-gray-400"
          aria-label="Add Expense"
          role="button"
          type="button"
          onClick={() => {
            console.log('add expense');
            setCount(count + 1);
          }}
        >
          <i className="fas fa-plus"></i>
        </button>
        {expensesByDate &&
          Object.keys(expensesByDate).map((date) => {
            return (
              <div key={date}>
                <h2 className="text-xl flex justify-between mb-2">
                  <p className="w-auto">{formatDate(date)}</p>
                  <p className="grow border-dotted border-b-2 border-gray-400"></p>
                  <span className="w-auto">{dayExpenses.get(date)} €</span>
                </h2>
                {expensesByDate[date].map((expense) => {
                  return <ExpenseItem key={expense.id} expense={expense} />;
                })}
              </div>
            );
          })}
      </div>
    </>
  );
};

function ExpnsesOverview({ budget, totalExpenses }: { budget: number; totalExpenses: number }) {
  return (
    <div className="flex w-[80%] m-auto items-center align-middle justify-between my-2 bg-gray-300 text-black p-4 rounded-md">
      <span className="text-center">
        {budget} €<p>Income</p>
      </span>
      <span className="text-center">
        {totalExpenses} €<p>Expenses</p>
      </span>
      <span className="text-center">
        {budget - totalExpenses} €<p>Balance</p>
      </span>
    </div>
  );
}
export default ListExpenses;
