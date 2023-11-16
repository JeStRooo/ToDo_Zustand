import React, { FC, useMemo } from 'react'

import { Todo } from '../Todo'

import { useFilter, useTodos } from '../../store/store'

import styles from './TodoList.module.scss'

export const TodoList: FC = () => {
  const todos = useTodos(state => state.todos)
  const filter = useFilter(state => state.filter)

  const handleFilteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed)
      case 'active':
        return todos.filter((todo) => !todo.completed)
      default:
        return todos
    }
  }, [todos, filter])

  return (
    <div className={styles.todoList}>
      {!!handleFilteredTodos.length ? (
        <>
          {handleFilteredTodos.map(({ id, title, completed }) => (
            <Todo id={id} title={title} completed={completed} />
          ))}
        </>
      ) : (
        <h1>Задачи отсутствуют</h1>
      )}
    </div>
  )
}