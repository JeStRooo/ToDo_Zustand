import React, { FC } from 'react'

import { Form } from '../../components/Form'
import { Menu } from '../../components/Menu'
import { TodoList } from '../../components/TodoList'

import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Form />
      <Menu />
      <TodoList />
    </div>
  )
}