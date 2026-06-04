import React, { FunctionComponent } from 'react'
import styles from '@/app/components/button/button.module.css'
import Link from 'next/link'

interface ButtonProps {
  children?: any;
  url: string;
  text: string;
}

const RoundButton: FunctionComponent<ButtonProps> = ({children,url,text}) => {
  return (
    <div>
      <Link href={url} target='_blank'>
      <button className={styles.round}>
      <p className='text-lg'>{text}</p>
          {children}
      </button>
      </Link>
    </div>
  )
}

export default RoundButton