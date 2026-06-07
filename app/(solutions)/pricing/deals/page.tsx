import React from 'react'
import styles from '@/app/components/pricing/page.module.css'
import PaymentOptions from '@/app/sections/payment_options'
import Image from 'next/image'
import Content from "@/public/character/1971.png"
import Avatar from "@/public/profile/avatar2.png"
import Link from 'next/link'
import { buttonVariants } from '@/app/components/ui/button'
import { BuildCampaign } from '@/app/components/pricing/campaign'
import ThirdParty from '@/app/sections/third_party'
import ScrollLink from '@/app/components/ui/scroll_link'
import type { Metadata } from 'next'
import { Icons } from '@/app/components/ui/icons'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/components/ui/tooltip'
import DealsCTA from '@/app/components/carousels/deals-cta'

export const metadata: Metadata = {
  title: 'Awaj ET Deals',
  description: 'Awaj ET Digital Marketing and Advertising Agency',
}

interface ToolTipProps {
  title:string; tip:string; 
}
function ToolTip (props:ToolTipProps){
  return(
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger >
        <div className="block cursor-pointer">{props.title}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{props.tip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

const Deals = () => {
  return (
    <div className='w-full'>
      <div className={styles.container}>
        <h1 className="py-4 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
          Digital Marketing Simplified!
        </h1>
        <div className={'flex flex-col md:flex-row mb-6 max-w-4xl items-center'}>
          <div className={styles.headline1_canvas}>
          <div className='text-base text-muted-foreground text-start'>
            <em className='text-lg font-semibold'>
            Save up to{' '}<span className='underline'>30%</span>{' '}with bundled deals. 
            </em><br/> 
            <div className='h-3 border-border border-dashed border-b-2 mb-6'></div>
              <div className='font-semibold pb-2'>Save time and money on your digital marketing efforts! </div>
            <p>Awaj&apos;s digital marketing bundled deals are carefully tailored to meet specific marketing campaign schemes.</p>
            <br />
            <p>The offers include everything needed to create and manage a successful online campaign with guaranteed results. </p>
          </div>
          </div>
          <Image src={Content} alt='awaj ET bundled deals' placeholder='blur' width={400}/>
        </div>
        <DealsCTA/>
        <div className='h-8'></div>
        <div className={styles.headline1_canvas}>
          <h3 className='text-center text-2xl font-semibold text-muted-foreground leading-[1.15] lg:text-3xl'>
            Why choose bundles?
          </h3>
          <div className='flex flex-col md:flex-row gap-4 text-muted-foreground items-center'>
            <div className='flex-grow flex-col flex w-64 md:w-96 text-start gap-4'>
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <p>
                Our bundles are based on tested and refined strategies 
                that have shown continuous success across specific goals and budgets. 
                </p>
              </div>
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <p>Get regular reports and feedback on your campaign performance and ROAS {' '}
                <span><ToolTip title={"🛈"} tip={"ROAS: Return on advertisment spent."}/></span></p>
              </div>
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <p>Pay a fraction of the cost of hiring separate agencies or freelancers while getting ten folds the result.</p>
              </div>
            </div>
            <div className="hidden md:flex border-border border-l-2 h-56 w-2"></div>
            <div className="flex md:hidden border-border border-b-2 h-6 w-56"></div>
            <div className='flex w-64 md:w-96 flex-col rounded-lg bg-card shadow-md  items-center gap-4 justify-evenly'>
            <Image src={Avatar} alt='' width={100} placeholder='blur' className=' mt-4 rounded-full'/>
              <p className='px-4 md:px-8 mb-2'>
              Additionally, a dedicated account manager will guide you through the campaign and answer any questions you might have along the campaign. 
              </p>
            </div>
          </div>
          <ThirdParty/>
        </div>
        <PaymentOptions/>
        <div className='mt-8 flex flex-col items-center text-center text-muted-foreground'>
          <div className="border-border border-t-2 border-dashed h-10 w-full"></div>
          <h2 className='text-2xl md:text-3xl md:font-bold font-semibold mb-2'>
            Don&apos;t miss this opportunity
          </h2>
          <p>
          Take your business to the next level with Awaj ET&apos;s bundled deals. 
          </p>
            <div className='mt-8 relative flex flex-col md:flex-row gap-10 items-center'>
              <ScrollLink href={'#quick'}>
              Get a quick review
              </ScrollLink>
              <Link href="/resources/how_it_works">
                  <div
                  className={buttonVariants({
                      variant:'outline',
                      size: "default",
                  })}
                  >
                  See how it works 🡥
                  <span className="sr-only">See how it works</span>
                  </div>
              </Link>
            </div>
          <div className="h-14 w-full"></div>
        </div>
      </div>
      <section id='quick'>
      <BuildCampaign/>
      </section>
    </div>
  )
}

export default Deals