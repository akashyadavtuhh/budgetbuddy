import { createContext } from 'react';
import { initialState } from './reducer';
import { DispatchType, StateType } from './types';

const initialDispatch: DispatchType = {
  addExpense: (_action) => {},
  deleteExpense: (_action) => {},
};

export const BudgetStateContext = createContext<StateType | undefined>(initialState);
export const BudgetDispatchContext = createContext<DispatchType | undefined>(initialDispatch);
