import React, { useReducer } from 'react';
import { DispatchType, StateType } from './types';
import * as constants from './constants';
import { BudgetDispatchContext, BudgetStateContext } from './context';
import { budgetReducer, initialState } from './reducer';

/**
 * @author akash.yadav
 * @name BudgetProvider
 * @description BudgetProvider is a React Provider that provides state and dispatch to the app
 * @param {React.ReactNode} children
 * @returns {React.ReactNode}
 */
export const BudgetProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const addExpense: DispatchType['addExpense'] = (expense) => {
    dispatch({
      type: constants.ADD_EXPENSE,
      payload: expense,
    });
  };

  const deleteExpense: DispatchType['deleteExpense'] = (id: number) => {
    dispatch({
      type: constants.DELETE_EXPENSE,
      payload: id,
    });
  };

  return (
    <BudgetStateContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses as StateType['expenses'],
      }}
    >
      <BudgetDispatchContext.Provider
        value={{
          addExpense,
          deleteExpense,
        }}
      >
        {children}
      </BudgetDispatchContext.Provider>
    </BudgetStateContext.Provider>
  );
};

/**
 * @author akash.yadav
 * @name useConsumeBudget
 * @description useConsumeBudget is a React Hook that consumes state from the BudgetProvider
 * @param {void}
 * @returns {StateType} state
 */
export const useConsumeBudget = () => {
  const context = React.useContext(BudgetStateContext);
  if (context === undefined) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};

/**
 * @author akash.yadav
 * @name useDispatchBudget
 * @description useDispatchBudget is a React Hook that consumes dispatch from the BudgetProvider
 * @param {void}
 * @returns {DispatchType} dispatch
 */
export const useDispatchBudget = () => {
  const context = React.useContext(BudgetDispatchContext);
  if (context === undefined) {
    throw new Error('useBudgetDispatch must be used within a BudgetProvider');
  }
  return context;
};
