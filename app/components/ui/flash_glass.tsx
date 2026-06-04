import React, { FunctionComponent } from 'react'
import styles from '@/app/components/ui/flash_glass.module.css'

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