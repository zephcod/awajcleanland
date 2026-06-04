import React from 'react'
import styles from "@/app/components/loading/page.module.css"
import { symlink } from 'fs'


const LoadingRouteUI = () => {
  return (
    <div className={styles.container}>
        <div className={styles.loader}>
            <span className='antialiased text-4xl'>🌙</span>
            <span></span>
        </div>
    </div>
  )
}

export default LoadingRouteUI