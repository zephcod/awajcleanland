'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel-react'
import DealsCarousel from './deals-carousel'
import '@/app/components/carousels/box.css'
import { deals } from './deal-index'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const DealsCTA = () => {
  return (
    <section className="sandbox__carousel">
      <DealsCarousel slides={SLIDES} options={OPTIONS} values={deals[0].values} />
    </section>
  )
}

export default DealsCTA