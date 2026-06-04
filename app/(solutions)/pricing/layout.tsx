import Faqs from '@/app/components/faq/faqs'
import React, { ReactNode } from 'react'

const PriceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full'>
        <div>
        {children}
        </div>
        <Faqs/>
    </div>
  )
}

export default PriceLayout