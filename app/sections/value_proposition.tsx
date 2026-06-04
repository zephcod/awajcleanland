import React from 'react'
import Image from "next/image";
import Content from "@/public/character/4101.png";
import { Icons } from '@/app/components/ui/icons';
import Link from 'next/link';

const ValueProp = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-4xl mx-auto my-10 gap-6 items-center'>
        <div className='flex-1'>
          <Image className='rounded-2xl' src={Content} width={500} height={300} style={{objectFit:'cover'}}  alt='Content Marketing Awaj Ad'/>
        </div>
        <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1">
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                  Data-driven strategy
                </h3>
              </div>
              <p className="pb-4 text-muted-foreground">
              Awaj ET heavily relies on data-driven insights and analytics to measure and 
              optimize your digital marketing performance and ROAS.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <Link href={'/team'} className='font-semibold text-lg text-muted-foreground border-dashed border-b-2 hover:text-accent-foreground'>
                  <div className='flex flex-row items-center justify-center gap-1'>
                    <p>Experienced team</p>
                    <Icons.arrowUpRight className='h-4 w-4'/>
                  </div>
                </Link>
              </div>
              <p className="pb-4 text-muted-foreground">
              We are a team of experienced digital marketers who excel at all aspects of online marketing, 
              from SEO and PPC to social media and email marketing.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                  Effective execution
                </h3>
              </div>
              <p className="pb-4 text-muted-foreground">
              We help you create and execute effective digital marketing strategies that align with your business goals, 
              allocated budget and campaign timelines. 
              </p>
            </div>
            {/* <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <Link href={'/pricing'} className='font-semibold text-lg text-muted-foreground border-dashed border-b-2 hover:text-secondary'>
                  Customizable packages  🡥
                </Link>
              </div>
              <p className="pb-4 text-muted-foreground">
              We offer flexible and customized packages tailored to your specific needs, 
              while committing to deliver high-quality results beyond expectations.
              </p>
            </div> */}
          </div>
    </div>
  )
}

export default ValueProp