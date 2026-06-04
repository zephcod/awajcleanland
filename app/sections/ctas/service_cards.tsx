import { Icons } from '@/components/UI/icons'
import Link from 'next/link'
import React from 'react'

const ServiceCards = () => {
  return (
    <div className="flex-1 flex flex-col p-4 md:p-0 md:flex-row gap-3 text-muted-foreground">
            <div className="flex flex-col gap-3 w-full md:w-1/2">
              <Link href={'/'} className='hover:text-primary transition-colors'>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <Icons.flame className='h-10 w-10 my-4'/>
                <p className="pb-2 text-base font-light">
                  Content Marketing
                </p>
              </div>
              </Link>
              <Link href={'/'} className='hover:text-primary transition-colors'>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <Icons.radio className='h-10 w-10 my-4'/>
                <p className="pb-2 text-base font-light">
                  Social Media Marketing
                </p>
              </div>
              </Link>
              <Link href={'/'} className='hover:text-primary transition-colors'>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <Icons.brain className='h-10 w-10 my-4'/>
                <p className="pb-2 text-base font-light">
                  Marketing Intelligence
                </p>
              </div>
              </Link>
            </div>
            <div className="hidden md:flex flex-col gap-3 w-full md:w-1/2 text-justify">
              <Link href={'/'} className='hover:text-primary transition-colors'>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <Icons.smile className='h-10 w-10 my-4'/>
                <p className="pb-2 text-base font-light">
                  Influencer Marketing
                </p>
              </div>
              </Link>
              <Link href={'/'} className='hover:text-primary transition-colors'>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <Icons.radar className='h-10 w-10 my-4'/>
                <p className="pb-2 text-base font-light">
                  Pay-per-click Advertising
                </p>
              </div>
              </Link>
              <Link href={'/'} className='hover:text-primary transition-colors'>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <Icons.imageplus className='h-10 w-10 my-4'/>
                <p className="pb-2 text-base font-light">
                  Digital Marketing Plus
                </p>
              </div>
              </Link>
            </div>
          </div>
  )
}

export default ServiceCards