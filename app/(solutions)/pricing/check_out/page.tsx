import type { Metadata } from 'next'
import PaymentOptions from '@/app/sections/payment_options'
import { Icons } from '@/app/components/ui/icons'
import InRoundButton from '@/app/components/button/inround'
import { BsRocketTakeoffFill } from 'react-icons/bs'

export const metadata: Metadata = {
  title: 'Check Out',
  description: 'Awaj Ad AI Tools',
}

const CheckOut = () => {
  return (
    <div className='flex flex-col items-center' id='deals'>
        <div className='text-muted-foreground items-center text-center flex flex-col-reverse md:flex-row mx-auto max-w-4xl'>
            <div className='flex-1 justify-evenly'>
                <div className='flex flex-row text-muted-foreground items-center justify-center text-center gap-2 w-full p-4 m-auto'>
                        <Icons.billing className='h-8 w-8 '/>
                    <h3 className='text-2xl lg:text-3xl font-bold leading-[1.15]'>Check-out |
                    <span className='text-primary'>{' '}ማዘዣ{" "}</span></h3>
                </div>
                <p className='px-4'>Awaj&apos;s digital marketing bundled deals are carefully tailored to meet specific marketing campaign schemes.</p>
                <br />
                <p className='px-4'>The offers include everything needed to create and manage a successful online campaign with guaranteed results. </p>
                <div className='h-10'></div>
                <InRoundButton url="https://forms.gle/apw4ygztRuVXj7S69" text="Order Now">
                    <span><BsRocketTakeoffFill/></span>
                </InRoundButton>
            </div>
        </div>
        
      <PaymentOptions/>
        </div>
  )
}

export default CheckOut