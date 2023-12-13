import * as constants from './constants';
import { ActionType, StateType } from './types';

/**
 * @author akash.yadav
 * @type {StateType}
 * @property {number} budget - The budget
 * @property {object[]} expenses - The expenses
 * @property {number} expenses[].id - The expense id
 * @property {string} expenses[].name - The expense name
 * @property {number} expenses[].cost - The expense cost
 * @default
 *  @example
 * {
 *  budget: 2000,
 * expenses: [
 * { id: 12, name: "shopping", cost: 40 },
 * { id: 13, name: "holiday", cost: 400 },
 * { id: 14, name: "car service", cost: 50 },
 * ],
 * }
 */
export const initialState: StateType = {
  budget: 2000,
  expenses: Array.from({ length: 10 }, (_, index) => ({
    id: index + 12,
    name: `${index} expense `,
    cost: Math.floor(Math.random() * 1000),
    description: "Some description",
    timestamp:
      index % 3 === 0
        ? new Date(Date.now() - 86400000).toISOString()
        : index % 2 === 0
          ? new Date(Date.now()).toISOString()
          : new Date(Date.now() + 86400000).toISOString(),
  })) as StateType['expenses'],
};

/**
 * @author akash.yadav
 * @function budgetReducer
 * @param {StateType} state - The state
 * @param {ActionType} action - The action
 * @returns {StateType} - The new state
 */
export const budgetReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case constants.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case constants.DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    default:
      return state;
  }
};
