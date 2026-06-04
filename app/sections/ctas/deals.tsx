import Link from 'next/link'
import React from 'react'
import { Icons } from '@/app/components/ui/icons'
import { ProductImageCarousel } from '@/app/components/product-image-carousel'
import InRoundButton from '@/app/components/button/inround'
import { BsRocketTakeoffFill } from 'react-icons/bs'
import Deal1 from '@/public/deals/deal-1-starter.png'
import Deal2 from '@/public/deals/deal-2-launcher.png'
import Deal3 from '@/public/deals/deal-3-booster.png'
import Deal4 from '@/public/deals/deal-4-miner.png'

const ima = [
    {
    id: '1',
    name: Deal1.src,
    url: Deal1.src,
    },
    {
    id: '2',
    name: Deal2.src,
    url: Deal2.src,
    },
    {
    id: '2',
    name: Deal3.src,
    url: Deal3.src,
    },
    {
    id: '2',
    name: Deal4.src,
    url: Deal4.src,
    },
]


const DealsSection = () => {
  return (
    <div className='flex flex-col items-center' id='deals'>
        <div className='text-muted-foreground items-center text-center flex flex-col-reverse md:flex-row mx-auto max-w-4xl'>
            <div className='flex-1 justify-evenly'>
                <div className='flex flex-row text-muted-foreground items-center justify-center text-center gap-2 w-full p-4 m-auto'>
                    <Link href={'/resources/downloads'} className='cursor-pointer'>
                        <Icons.billing className='h-8 w-8 '/>
                    </Link>
                    <h3 className='text-2xl lg:text-3xl font-bold leading-[1.15]'>Package
                    <span className='text-primary'>{' '}Deals{" "}</span></h3>
                </div>
                <p className='px-4'>Awaj&apos;s digital marketing bundled deals are carefully tailored to meet specific marketing campaign schemes.</p>
                <br />
                <p className='px-4'>The offers include everything needed to create and manage a successful online campaign with guaranteed results. </p>
                <div className='h-10'></div>
                <InRoundButton url="/pricing/deals" text="Explore Deals">
                    <span><BsRocketTakeoffFill/></span>
                </InRoundButton>
            </div>
            <ProductImageCarousel
            className="w-full px-2 md:w-1/2"
            images={ima ?? []}
            options={{
                loop: true,
            }}
            />
        </div>
    </div>
  )
}

export default DealsSection