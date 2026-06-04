import React, { FunctionComponent } from 'react'
import styles from '@/app/components/button/button.module.css'
import Link from 'next/link'

interface ButtonProps {
  children?: any;
  url: string;
}

const IconButton: FunctionComponent<ButtonProps> = ({children,url}) => {
  return (
    <div>
    <Link href={url}>
    <button className={styles.iconbtn}>
        {children}
    </button>
    </Link>
    </div>
  )
}

export default IconButton