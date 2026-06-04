import React from 'react'
import styles from '@/app/components/ui/bubble_bg.module.css'
import Image from "next/image";
import FB from '@/public/social/svg/Facebook_icon.svg'
import Insta from '@/public/social/svg/Instagramicon.svg'
import Youtube from '@/public/social/svg/Youtube_icon.svg'
import Tictok from '@/public/social/svg/Tictok_icon.svg'



const BubbleBg = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bubbles}>
        <span></span>
        <span></span>
        <span></span>
        <span><Image src={FB} width={400} height={400}  alt='Content Marketing Awaj Ad'/></span>
        <span></span>
        <span></span>
        <span></span>
        <span><Image src={Tictok} width={400} height={400}  alt='Content Marketing Awaj Ad'/></span>
        <span></span>
        <span></span>
        <span></span>
        <span><Image src={Insta} width={400} height={400}  alt='Content Marketing Awaj Ad'/></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><Image src={Youtube} width={400} height={400}  alt='Content Marketing Awaj Ad'/></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default BubbleBg