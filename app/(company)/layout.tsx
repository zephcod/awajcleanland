import Footer from '@/app/components/Footer'
import React, { ReactNode } from 'react'

const CompanyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full'>
        <div>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default CompanyLayout