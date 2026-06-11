import React from 'react'
import Image from "next/image";
import Funnel from "@/public/funnel_et.webp";
import ROI from "@/public/character/6_hand.png";
import styles from '@/app/sections/ctas/headline1.module.css'
import LogoSlider from './logoslider';
import Embed from './video';
import ScrollLink from '@/app/components/ui/scroll_link'

const Headline1 = () => {
  return (
    <div className={styles.containerMain}>
      <h1 className='text-center text-4xl lg:text-5xl font-bold leading-[1.15] text-muted-foreground mb-6 mx-2'>All-in-one Digital {' '}
      <span className=' underline'>Marketing</span> {' '} & {' '} <span className='underline'>Sales</span> </h1>
        <div className={styles.headline1_canvas}>
          <Image
              src={Funnel}
              alt=""
              height={800}
              className='rounded-md '
              />
          <div className='relative flex flex-col items-center justify-evenly gap-10'>
            <h2 className='text-center text-xl lg:text-3xl font-light leading-[1.15] w-fit'>
               "We help you {' '}
               <span className='font-bold text-primary'>Captivate & Nurture</span> your clients
               <br /> while refining your {' '}
               <span className='font-bold text-primary'>Offer & Sales</span>{' '}strategy"
            </h2>
            <Embed/>
            <div className='mt-6 flex flex-col items-center text-center text-muted-foreground max-w-xl'>
              <h2 className='text-2xl md:text-3xl md:font-bold font-semibold mb-2 '>
                Work with Awaj ET.
              </h2>
              <p>
              Take your digital marketing efforts to the next level with Awaj ET. <br /> Captivate, nurture and organize your prospects, 
              track interactions, automate workflows, generate reports, and more...
              </p>
                <div className='mt-8 relative flex flex-col md:flex-row gap-6 items-center'>
                  <ScrollLink href={'#deals'}>
                  Check package deals
                  </ScrollLink>
                  {/* <ScrollLink href={'#case_sec'}>
                  Check case studies
                  </ScrollLink> */}
                </div>
              </div>
          </div>
      </div>
      <LogoSlider/>
        <div className={styles.headline2_canvas}>
          <div className={styles.headline_col}>
            <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1 text-center">
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col '>
                <h3 className="p-1 font-semibold text-lg">
                  9.2X <br/> Average ROAS 
                </h3>
                <p className="py-2 border-t-2 border-dashed text-md font-light">
                 An average of 9-folds &apos;return on ad spent&apos; across all our campaigns.
                </p>
              </div>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h3 className="p-1 font-semibold text-lg">
                300+ <br/>Templates
                </h3>
                <p className="py-2 border-t-2 border-dashed text-md font-light">
                More than 300 refined templates for all specific campaign schemes.
                </p>
              </div>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h3 className="p-1 font-semibold text-lg">
                12M+ <br/>Online Reach
                </h3>
                <p className="py-2 border-t-2 border-dashed text-md font-light">
                Segmented reach of more than 12 million audience in Ethiopia and UAE.
                </p>
              </div>
            </div>
          </div>
          <div className='relative flex flex-col items-center flex-shrink'>
            <Image
              src={ROI}
              alt=""
              width={500}
              height={400}
              className='rounded-2xl'
              />
          </div>
          <div className={styles.headline_col}>
            <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1  text-center">
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h3 className="p-1 font-semibold text-lg ">
                  70+<br/>Pro AI Models
                </h3>
                <p className="py-2 border-t-2 border-dashed text-md font-light">
                Professionall AI models customized for marketing & sales tasks.
                </p>
              </div>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h3 className="p-1 font-semibold text-lg">
                15K+ <br/>Digital Resources
                </h3>
                <p className="py-2 border-t-2 border-dashed text-md font-light">
                Variety of essential digital assets for impressions & engagement.
                </p>
              </div>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h3 className="p-1 font-semibold text-lg">
                100+ <br/> Partners
                </h3>
                <p className="py-2 border-t-2 border-dashed text-md font-light">
                Get exclusive access to more than 100 partner channels and platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Headline1