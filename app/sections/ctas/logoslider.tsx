import React from 'react'
import styles from '@/sections/ctas/logoslider.module.css'
import Image from "next/image";
import Anbessa from '@/public/logo/ethiopian_logos_anebesacham_3D-min.png'
import Babi from '@/public/logo/ethiopian_logos_babisbistro_3D-min.png'
import Capital from '@/public/logo/ethiopian_logos_capitalhotel_3D-min.png'
import Deliver from '@/public/logo/ethiopian_logos_delier addis_3D-min.png'
import Entoto from '@/public/logo/ethiopian_logos_entotopark_3D-min.png'
import EtFitness from '@/public/logo/ethiopian_logos_ethiofitnessadnutriton_3D-min.png'
import Kestedemena from '@/public/logo/ethiopian_logos_kesetedemena_3D-min.png'
import Monarch from '@/public/logo/ethiopian_logos_monarch_3D-min.png'
import Century from '@/public/logo/ethiopian_logos_centurymall_3D-min.png'


const LogoSlider = () => {
  return (
    <div className={styles.containerMain}>
        <div className={styles.logo_slider}>
              <div className={styles.logo_slide}><Image src={Century} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Anbessa} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Kestedemena} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={EtFitness} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Deliver} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Babi} fill style={{objectFit:'contain'}}  alt=''/></div>
              <div className={styles.logo_slide}><Image src={Monarch} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Capital} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Entoto} fill style={{objectFit:'contain'}} alt=''/></div>
        </div>
    </div>
  )
}

export default LogoSlider