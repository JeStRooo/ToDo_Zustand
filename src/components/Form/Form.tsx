import React, { ChangeEvent, FC, useState } from 'react'

import styles from './Form.module.scss'

import addIcon from "../../assets/images/plus-icon.svg";
import { useTodos } from '../../store/store'

export const Form: FC = () => {
  const [title, setTitle] = useState('')

  const addTodo = useTodos(state => state.addTodo)

  const addNewTodo = () => {
    addTodo(title)
    setTitle('')
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <input className={styles.newTodo}
               id="input"
               type="text"
               placeholder="Какое у вас задание на сегодня?"
               value={title}
               onChange={handleChangeTitle}
        />
        <button className={styles.buttonAdd}
                disabled={!title.length}
                onClick={addNewTodo}
        >
          Добавить
          <img className={styles.addIcon}
               src={addIcon}
               alt="plus-icon"
          />
        </button>
      </div>
    </div>
  )
}