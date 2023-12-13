import './styles/index.css';

import { BudgetProvider, useConsumeBudget } from './hooks/store';

const App = () => {
  return (
    <>
      <BudgetProvider>
        <h1 className="text-3xl text-teal-600 bg-slate-200">Hello</h1>
        <SampleComponent />
      </BudgetProvider>
    </>
  );
};

const SampleComponent = () => {
  const { budget, expenses } = useConsumeBudget();
  return (
    <>
      <h1 className="text-3xl text-teal-600 bg-slate-200">Hello</h1>
      {JSON.stringify(budget)}
      {JSON.stringify(expenses)}
    </>
  );
};

export default App;
