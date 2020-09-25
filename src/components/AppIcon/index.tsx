import React, { FC } from 'react'
import styles from './AppIcon.module.scss'

interface Props {
  image: string
  title: string
  href: string
}

export const AppIcon: FC<Props> = ({ image, title, href }) => {
  return (
    <a href={href} className={styles.container}>
      <div className={styles.icon}>
        <img alt={title} src={image} />
      </div>
      <div className={styles.title}>{title}</div>
    </a>
  )
}
