import React from 'react'

import { useFilter, useTodos } from '../../store/store'

import styles from './Menu.module.scss'

export const Menu = () => {
  const { todos, removeCompletedTodos } = useTodos(state => state)
  const { filter, setFilter } = useFilter(state => state)

  const todosLeft = todos.filter(todo => !todo.completed)

  const handleChangeFilter = (value: string) => {
    setFilter(value)
  }

  return (
    <div className={styles.menu}>
      <p className={styles.activeTodos}>
        {todosLeft.length} задания осталось
      </p>
      <div className={styles.filter}>
        <p onClick={() => handleChangeFilter('all')}>
          Все
        </p>
        <p onClick={() => handleChangeFilter('active')}>
          Активные
        </p>
        <p onClick={() => handleChangeFilter('completed')}>
          Выполненные
        </p>
      </div>
      <p className={styles.removeAll}
          onClick={removeCompletedTodos}
      >
        Удалить вып. задания
      </p>
    </div>
  )
}