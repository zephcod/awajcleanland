import React, { FunctionComponent } from 'react'
import styles from '@/app/components/button/button.module.css'
import Link from 'next/link'

interface ButtonProps {
  text?: string;
  url: string;
}

const Button: FunctionComponent<ButtonProps> = ({text,url}) => {
  return (
    <div>
    <Link href={url}>
    <button className={styles.button}>
        {text}
    </button>
    </Link>
    </div>
  )
}

export default Button