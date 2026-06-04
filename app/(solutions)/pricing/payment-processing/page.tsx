import React from 'react'
import Image from 'next/image'
import Content from "@/public/4payment.png"
import type { Metadata } from 'next'
import Link from 'next/link'
import Discount from '@/app/sections/ctas/discount'

export const metadata: Metadata = {
  title: 'Online Payment Processing | Awaj ET',
  description: 'Online payment processing methods and instructions for Awaj ET, the agency, and related platforms',
}

const PaymentProcessing = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col'>
        <h1 className="pt-4 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
          Your payments will be processed in seconds.
        </h1>
        <div className='flex flex-col md:flex-row mb-6 max-w-4xl m-auto items-center'>
        <p className='text-base text-muted-foreground p-4'>
        We follow simple steps as a digital company to process online payments securely 
        and efficiently, while providing a smooth and convenient experience for our customers.
          <br/>
          <br/>
        <em>
        No fees for payment processing.
        </em>
        </p>
        <Image src={Content} alt='' width={400}/>
        </div>
      <div className='flex flex-col text-muted-foreground m-auto max-w-2xl'>
        <h2 className='text-center text-3xl font-semibold'>
          Four Easy Steps
        </h2>
        <br/>
        <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1 ">
          <div className='flex flex-row gap-4 mb-2 items-center'>
            <div className='bg-primary opacity-70 rounded-full shadow-lg'><p className='bg-card m-2 rounded-full p-2 text-3xl shadow-md'>1</p></div>
            <div>
              <h3 className="font-semibold text-xl text-amber-700">
              Authorization
              </h3>
              <p className="pb-4">
              Authorization is the step where we verify the validity of the payment method, and checks if sufficient funds available.
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-4 mb-2 items-center'>
            <div className='bg-primary opacity-70 rounded-full shadow-lg'><p className='bg-card m-2 rounded-full p-2 text-3xl shadow-md'>2</p></div>
            <div>
              <h3 className="font-semibold text-lg text-amber-700">
              Capture
              </h3>
              <p className="pb-4">
              Capture is the step where we confirm the amount of the payment and deducts it from the our payer&apos;s account. 
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-4 mb-2 items-center'>
            <div className='bg-primary opacity-70 rounded-full shadow-lg'><p className='bg-card m-2 rounded-full p-2 text-3xl shadow-md'>3</p></div>
            <div>
              <h3 className="font-semibold text-lg text-amber-700">
              Settlement
              </h3>
              <p className="pb-4">
              Settlement is the step where we transfers the funds to our own account, usually through a third-party service provider. 
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-4 mb-2 items-center'>
            <div className='bg-primary opacity-70 rounded-full shadow-lg'><p className='bg-card m-2 rounded-full p-2 text-3xl shadow-md'>4</p></div>
            <div>
              <h3 className="font-semibold text-lg text-amber-700">
              Funding
              </h3>
              <p className="pb-4">
              Funding is the final step where we deposit the funds to our payer&apos;s account, and authorize access to our services. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Discount/>
    <div className='h-24'></div>
    </div>
  )
}

export default PaymentProcessing