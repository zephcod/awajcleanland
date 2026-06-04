import React, { FunctionComponent } from 'react'
import styles from '@/app/components/button/button.module.css'
import Link from 'next/link'

interface ButtonProps {
  children?: any;
  url: string;
  text: string;
}

const InRoundButton: FunctionComponent<ButtonProps> = ({children,url,text}) => {
  return (
    <div>
    <Link href={url} target='_blank'>
    <button className={styles.in_round}>
        {children}
    <p className='pb-1'>{text}</p>
    </button>
    </Link>
    </div>
  )
}

export default InRoundButton