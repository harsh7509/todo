import { atom } from 'recoil';

interface Todo {
  task: string;
  description: string;
  date: string;
  priority: string;
  completed: boolean;
}

// Define the todoListState atom with proper typing
export const todoListState = atom<Todo[]>({
  key: 'todoListState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (initial state)
});
