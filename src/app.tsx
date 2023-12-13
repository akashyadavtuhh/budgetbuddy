import './styles/index.css';
import { BudgetProvider } from './hooks/store';
import Overview from './Pages/ListExpenses';
import { Layout } from './Pages/Layout';

const App = () => {
  return (
    <>
      <BudgetProvider>
        <Layout>
          <Overview />
        </Layout>
      </BudgetProvider>
    </>
  );
};

export default App;
