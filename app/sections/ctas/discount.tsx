import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Content from "@/public/casestudy/3k_only.webp"
import { Icons } from '@/components/UI/icons'

const Discount = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='h-10'></div>
        <div className='text-muted-foreground items-center text-center flex flex-col-reverse md:flex-row mx-auto max-w-4xl py-4'>
            <div className='md:px-8 sm:px-4'>
                    <Link href="https://forms.gle/tt7k8PgowWGHV9GM9" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                        <div className='flex flex-row text-muted-foreground items-center justify-center text-center gap-2 w-fit p-4 m-auto'>
                            <h3 className='text-2xl lg:text-3xl font-bold leading-[1.15]'>ቅምሻ በ3ሺ ብር ብቻ!</h3>
                            <Icons.awajlogocircle className='h-8 w-8 '/>
                        </div>
                    </Link>
                <p className='px-4 mb-4'>
                Take advantage of this limited-time offer and accelerate your business growth with expert digital marketing.
                </p>
                <Link 
                        href="https://forms.gle/tt7k8PgowWGHV9GM9" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className=' font-semibold hover:underline'>
                        <div className='flex flex-row items-center justify-center gap-1 text-primary'>
                            <p>Claim offer | ቅምሻውን ይሞክሩ</p>
                            <Icons.arrowExternalLink className='h-4 w-4'/>
                        </div>
                </Link>
            </div>
            <div className=''>
                <Image src={Content} width={300} height={300} alt='Awaj ET Contact Us Icon'/>
            </div>
        </div>
    </div>
  )
}

export default Discount