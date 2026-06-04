import React, { useState, useEffect, useCallback } from 'react'
import '@/app/components/carousels/emlba.css'
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType
} from 'embla-carousel-react'
import {
  DotButton,
  PrevButton,
  NextButton
} from './embla-carousel-arrows'
import styles from '@/app/sections/deals/deals.module.css'
import imageByIndex from './deal-index'
import { deals, dealByIndex } from './deal-index'
import Image from "next/image"
import { Icons } from '@/app/components/ui/icons'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/components/ui/tooltip'
import Link from 'next/link'


interface ToolTipProps {
  title:string; tip:string; 
}
function ToolTip (props:ToolTipProps){
  return(
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="ring-1 ring-border rounded-sm w-6 cursor-pointer">{props.title}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{props.tip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

function RadarValue(val:number){
  return(
    <div className="flex flex-row gap-2 ">
      <div className={val>0?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>1?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>2?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>3?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>4?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>5?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>6?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>7?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>8?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>9?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      
    </div>
  )
}


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  values: number[]
}

const DealsCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className='md:max-w-5xl max-w-sm mx-auto'>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container my-4">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className={styles.modal}>
                  <div className='flex flex-col md:flex-row bg-accent rounded-lg p-2 gap-4 items-center'>
                    <div className="flex-1">
                      <Image src={dealByIndex(index).img} width={800} height={800} className="items-end" alt='Content Marketing Awaj Ad'/>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className='text-center text-lg font-semibold rounded-md mb-4 w-fit p-2 ring-1 ring-border'>
                          <p>{dealByIndex(index).title} - Bundle</p>  
                      </div> 
                      <div className="flex flex-row gap-2 text-muted-foreground items-center">
                        <div className="flex flex-col items-start text-sm gap-1">
                          <ToolTip title={"S"} tip={"Here goes nothing"}/>
                          <ToolTip title={"L"} tip={"Here goes nothing"}/>
                          <ToolTip title={"C"} tip={"Here goes nothing"}/>
                          <ToolTip title={"T"} tip={"Here goes nothing"}/>
                          <ToolTip title={"F"} tip={"Here goes nothing"}/>
                          <ToolTip title={"A"} tip={"Here goes nothing"}/>
                          <ToolTip title={"V"} tip={"Here goes nothing"}/>
                          <ToolTip title={"B"} tip={"Here goes nothing"}/>
                        </div>
                        <div className="flex flex-col items-start text-sm gap-1">
                          <div>Sales</div>
                          <div>Leads</div>
                          <div>Costs</div>
                          <div>Time</div>
                          <div>Followers</div>
                          <div>Aesthetic</div>
                          <div>Viability</div>
                          <div>Brand</div>
                        </div>
                        <div className="flex flex-col items-start text-sm gap-4 md:gap-3">
                          {RadarValue(props.values[0])}
                          {RadarValue(props.values[1])}
                          {RadarValue(props.values[2])}
                          {RadarValue(props.values[3])}
                          {RadarValue(props.values[4])}
                          {RadarValue(props.values[5])}
                          {RadarValue(props.values[6])}
                          {RadarValue(props.values[7])}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <div className='flex flex-col items-center w-full m-auto'>
                      <Image src={imageByIndex(index)} width={100} height={100} className="items-center" alt={dealByIndex(index).desc}/>
                      <p className="hidden md:flex text-base mt-2 text-muted-foreground">{dealByIndex(index).desc}</p>
                    </div>
                      <p className="mt-6 font-semibold underline">Bundled services:</p>
                      <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                          <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                          <Icons.chevronRight className='bg-card rounded-full p-1 shadow-sm'/> 
                          </div>
                          <p className="text-start">{dealByIndex(index).list1}</p>
                      </div>
                      <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                          <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                          <Icons.chevronRight className='bg-card rounded-full p-1 shadow-sm'/> 
                          </div>
                          <p className="text-start">{dealByIndex(index).list2}</p>
                      </div>
                      <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                          <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                          <Icons.chevronRight className='bg-card rounded-full p-1 shadow-sm'/> 
                          </div>
                          <p className="text-start">{dealByIndex(index).list3}</p>
                      </div>
                      <div className='flex flex-row gap-2 items-end justify-evenly mt-6 w-full'>
                        <div className='text-center text-lg font-semibold rounded-md py-2 px-4 ring-1 ring-border'>
                            <p>{dealByIndex(index).price}</p>  
                        </div>
                        <Link href={`/pricing/deals/${dealByIndex(index).link}-pack`} target='_blank'>
                            <div className='text-sm flex flex-row items-center justify-center gap-1 '>
                                <p className='text-sm'>Learm more</p>
                                <Icons.arrowUpRight className='h-4 w-4'/>
                            </div>
                        </Link>
                      </div>
                  </div>
                </div>
                    </div>
                  ))}
                </div>
              </div>
            <div className="embla__buttons">
              <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
              <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
            </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div >
  )
}

export default DealsCarousel
