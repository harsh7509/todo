// recoil/todoState.ts
import { atom } from 'recoil';

export interface Todo {
    task: string;
    description: string;
    date: string;
    priority: string;
    completed: boolean;
}

export const todoListState = atom<Todo[]>({
    key: 'todoListState',
    default: [],
});
