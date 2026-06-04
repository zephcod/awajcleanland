import React, { FunctionComponent } from 'react'
import styles from '@/app/components/button/button.module.css'
import Link from 'next/link'

interface OutlineProps {
  text?: string;
  url: string;
}

const Outline: FunctionComponent<OutlineProps> = ({text,url}) => {
  return (
    <div className={styles.container}>
    <Link href={url}>
    <button className={styles.outline}>
        {text}
    </button>
    </Link>
    </div>
  )
}

export default Outline