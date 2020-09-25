import React, { FC } from 'react'
import styles from './AppLibrary.module.scss'
import { AppIcon } from '../AppIcon'

interface Props {}

export const AppLibrary: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <AppIcon
        href={'/crossbreed'}
        image={require('../../icons/crossbreed512.png')}
        title="Crossbreed Tool"
      />
    </div>
  )
}
