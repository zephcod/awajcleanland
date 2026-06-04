import React, { FunctionComponent } from 'react'
import styles from '@/app/components/button/button.module.css'
import ScrollLinkBlank from '@/app/components/ui/scroll_link_blank';

interface ButtonProps {
  children?: any;
  url: string;
  text: string;
}

const ColorButton: FunctionComponent<ButtonProps> = ({children,url,text}) => {
  return (
      <ScrollLinkBlank href={url}>
        <button className={styles.color_btn}>
          <p className='text-lg'>{text}</p>
          {children}
        </button>
      </ScrollLinkBlank>
  )
}

export default ColorButton