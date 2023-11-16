import React, { FC } from 'react'

import { useTodos } from '../../store/store'

import { ITodo } from '../../types'

import styles from './Todo.module.scss'

import complete from '../../assets/images/complete-icon.svg'
import remove from '../../assets/images/trash-icon.svg'

export const Todo: FC<ITodo> = ({ title, completed, id }) => {
  const { todos, removeTodo, completeTodo } = useTodos(state => state)

  const completedStyledText = completed ? { textDecoration: 'line-through', color: 'gray' } : {}

  const handleRemoveTodo = () => {
    const newTodoList = todos.filter((todo) => todo.id !== id)

    removeTodo(newTodoList)
  }

  const handleCompleteTodo = () => {
    const missionCompleted = todos.map(todo => todo.id !== id ? todo : { ...todo, completed: !completed })

    completeTodo(missionCompleted)
  }

  return (
    <div className={styles.todoItem}>
      <img src={complete}
           style={{ filter: `grayscale(${+!completed})` }}
           onClick={handleCompleteTodo}
           alt='Выполнено'
      />
      <input className={styles.inputText}
             value={title}
             readOnly={true}
             style={completedStyledText}
      />
      <div className={styles.actions}>
        <img src={remove}
             alt='Удалить'
             className={styles.todoItem__actions__removeTodo}
             onClick={handleRemoveTodo}
        />
      </div>
    </div>
  )
}