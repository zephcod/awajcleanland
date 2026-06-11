import React from 'react'
import { Icons } from '@/app/components/ui/icons'
import styles from '@/app/sections/ctas/cta_headline.module.css'
import '@/styles/hero_animation.css'
import Image from "next/image"
import Content from "@/public/awajai_cloud-min.webp"
import Link from 'next/link'
import { buttonVariants } from '@/app/components/ui/button'
import ScrollLink from '@/app/components/ui/scroll_link'
import AdCalculator from './ad_calculator'

const CtaHeadline = () => {
  return (
    <div className={styles.containerMain}>
          <p className='text-xl md:text-2xl text-muted-foreground py-3'>
            Test <span className='text-primary'>Awaj ET's</span>  Digital Billboard!
          </p>
          {/* <Icons.arrowDown className='text-muted-foreground animate-bounce'/> */}
          <div className="max-w-5xl mx-auto text-center flex flex-col w-full items-center">
            <Image className='cloud' src={Content} width={400} height={400} alt='Awaj ET Digital Billboard'/>
            <br />
            {/* <ScrollLink href={'#quick'}>Ad Sample</ScrollLink> */}
            <AdCalculator/>
            <p className='mt-2 text-base font-light text-muted-foreground'>
              Check your cost and results here.
            </p>
          </div>
    </div>
  )
}

export default CtaHeadline