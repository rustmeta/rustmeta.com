import React, { FC } from 'react'
import styles from './Layout.module.scss'
import { AppLibrary } from '../AppLibrary'

interface Props {}

export const Layout: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Rust Meta</h1>
      </header>
      <main className={styles.main}>
        <AppLibrary />
      </main>
    </div>
  )
}
