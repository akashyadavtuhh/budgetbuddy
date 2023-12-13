import * as constants from './constants';

export type StateType = {
  budget: number;
  expenses: {
    id: number;
    name: string;
    cost: number;
    timestamp: string;
    description?: string;
  }[];
};

export type constantsType = typeof constants;

export type ActionType = {
  type: constantsType[keyof constantsType];
  payload: any;
};

export type DispatchType = {
  addExpense: (expense: StateType['expenses'][0]) => void;
  deleteExpense: (expenseId: StateType['expenses'][0]['id']) => void;
};
