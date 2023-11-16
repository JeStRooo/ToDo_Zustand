import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid';

import { ITodo } from '../types'

interface ITodos {
  todos: ITodo[],
  addTodo: (title: string) => void
  removeTodo: (filteredTodos: ITodo[]) => void
  completeTodo: (updatedTodos: ITodo[]) => void
  removeCompletedTodos: () => void
}

interface IFilters {
  filter: string
  setFilter: (value: string) => void
}

export const useTodos = create<ITodos>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (title: string) => set((state) => {
          const newTodo = { id: uuidv4(), title, completed: false }

          return { todos: [...state.todos, newTodo] }
        }),
        removeTodo: (filteredTodos: ITodo[]) => set(() => {
          return { todos: filteredTodos }
        }),
        completeTodo: (updatedTodos: ITodo[]) => set(() => {
          return { todos: updatedTodos }
        }),
        removeCompletedTodos: () => set((state) => {
          return { todos: state.todos.filter((todo) => !todo.completed) }
        })
      }),
      { name: 'useTodos' },
    ),
  ),
)

export const useFilter = create<IFilters>()(devtools((set) => ({
  filter: 'all',
  setFilter: (value: string) => set({ filter: value })
})))