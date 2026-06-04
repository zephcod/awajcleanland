'use client'
import styles from './page.module.css'
import {Tilt} from 'react-tilt'
import Image from 'next/image'
import Card from '@/public/credit-card-02-min.png'


const Payment_Card = () => {
  return (
    <Tilt options={{ max: 35, speed: 10000, transition: true, easing:"cubic-bezier(.03,.98,.52,.99)", }}>
    <div className={styles.container}>
    <div className={styles.glass}>
          <Image
          alt={'page under construction'}
          width={400}
          height={150}
          src={Card.src}
        />
    </div>
    </div>
    </Tilt>
  )
}

export default Payment_Card