import React from 'react'
import Image from 'next/image'
import Content from "@/public/third-party.png";

const ThirdParty = () => {
  return (
    <div className='relative flex flex-col items-center text-center text-muted-foreground max-w-3xl'>
      <div className="opacity-60 rounded-lg ring-1 ring-border w-full">
      <Image src={Content} alt='' width={700}/>
      </div>
      <h2 className='text-2xl md:text-3xl md:font-bold font-semibold mt-6 mb-4'>
        Don&apos;t pay extra for third party services.
      </h2>
      <p className='mb-4'>
      You don't have to worry about any hidden costs or extra charges. 
      We take care of the subscriptions to plenty of the most popular and reliable services in the industry, 
      so you can save time and money. Listed above are some of the subscriptions we provide for you as part of our bundle.
      </p>
    </div>
  )
}

export default ThirdParty