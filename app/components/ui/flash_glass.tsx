import React, { FunctionComponent } from 'react'
import styles from '@/components/UI/flash_glass.module.css'

interface ButtonProps {
    children?: any;
  }
  
  const GlassFlash: FunctionComponent<ButtonProps> = ({children}) => {

  return (
    <div className={styles.glass}>
        {children}
    </div>
  )
}

export default GlassFlash