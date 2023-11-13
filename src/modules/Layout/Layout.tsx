import React, { FC } from 'react'

import { Form } from '../../components/Form'

import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Form />
    </div>
  )
}