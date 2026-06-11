import styles from '@/app/components/pricing/page.module.css'
import PopularOrders from '@/app/components/pricing/popular_orders';
import Subscriptions from '@/app/components/pricing/subscription';
import type { Metadata } from 'next'
import CallUs from '@/app/sections/ctas/call_us';
import Discount from '@/app/sections/ctas/discount';

export const metadata: Metadata = {
  title: 'Awaj pricing and plans',
  description: 'Awaj digital advertising monthly and annual subscription pricings and plans',
}

export default function Price(){

  return (
    <section className='w-full'>
      <div className={styles.container}>
        <>
          <h1 className="mt-2 py-1 text-3xl text-center text-muted-foreground font-extrabold leading-[1.15] lg:text-4xl">
            Monthly Plans 
          </h1>
          <h1 className="mb-2 py-1 text-3xl text-center text-primary font-extrabold leading-[1.15] lg:text-4xl">
            ወርሃዊ ጥቅሎች 
          </h1>
          <p className='text-base text-muted-foreground text-center max-w-3xl'>
            We offer monthly plans in three packages. 
            Affordable monthly marketing plans designed to help your business grow consistently and sustainably.
            Test Awaj Essential monthly plan and see our services in action! 
          </p>
          <br />
          <em className='text-base text-muted-foreground text-center max-w-3xl'>
            All prices include 15% VAT.
          </em>
          <br/>
        </>
        <Subscriptions/>
      </div>
      <CallUs/>
      <div className='mt-8 text-base text-muted-foreground text-center max-w-3xl m-auto'>
        <br/>
        <h2 className=' font-semibold text-2xl'>
          Popular one time solutions
        </h2>
      </div>
      <PopularOrders/>
      <Discount/>
    </section>
  );
}