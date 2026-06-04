import UnderConstruction from '@/app/components/under_construction'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Awaj ET Campaign Builder',
  description: 'Assorted digital marketing and sales campaign builder from Awaj ET, the agency, and related platforms',
}


const Build_Campaign = () => {
  return (
    <UnderConstruction title={'Build a Campaign'} date={'9:00am GMT 3/12/23'}/>
  )
}

export default Build_Campaign