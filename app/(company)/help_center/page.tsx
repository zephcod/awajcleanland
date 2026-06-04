import React from "react";
import styles from "./page.module.css"
import Image from "next/image"
import HelpBg from "@/public/character/3990.png"
import { Metadata } from "next"
import { Icons } from "@/app/components/ui/icons"
import Link from "next/link"
import Faqs from "@/app/components/faq/faqs"
import Content from "@/public/character/1882.png"

export const metadata: Metadata = {
  title: 'Help Center | Awaj ET',
  description: 'Assorted helpful resources and support portal for Awaj ET software, the agency, and related platforms',
}


const Help = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={HelpBg}
          fill={true}
          alt="awaj et help center"
          className={styles.img}
        />
        <div className={styles.imgText}>
            <div className="flex flex-col gap-4 items-center m-auto">
              <div className='ring-1 ring-accent bg-card opacity-90 rounded-md shadow-md p-4 items-center'>
                <h2 className="font-semibold text-4xl m-auto text-center text-muted-foreground">We are here to help!</h2>
                <p className="p-4 text-center text-muted-foreground max-w-2xl m-auto">
                  Do you have a question, suggestion, partnerships ideas or just want to say hello? We love hearing from you. 
                  Reach out! we&apos;ll get back to you promptly.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-2 text-muted-foreground">
                <div className='ring-1 ring-accent bg-card opacity-90 rounded-md shadow-md p-4 items-center w-56'>
                  <Link href={'/pricing/deals'} className="flex flex-row gap-4 items-center">
                    <Icons.book className="h-8 w-8"/>
                    <p className="p-1 font-semibold text-lg ">
                      Awaj Deals<br/> አዋጅ ጥቅሎች 🡥
                    </p>
                  </Link>
                </div>
                <div className='ring-1 ring-accent bg-card opacity-90 rounded-md shadow-md p-4 items-center w-56'>
                <Link href={'/team'} className="flex flex-row gap-4 items-center">
                  <Icons.radar className="h-8 w-8"/>
                    <p className="p-1 font-semibold text-lg ">
                      Career<br/>Opportunities 🡥
                    </p>
                  </Link>
                </div>
                <div className='ring-1 ring-accent bg-card opacity-90 rounded-md shadow-md p-4 items-center w-56'>
                <Link href={'/contact'} className="flex flex-row gap-4 items-center">
                  <Icons.phone className="h-8 w-8"/>
                    <p className="p-1 font-semibold text-lg ">
                      Contact Us<br/> ያግኙን 🡥
                    </p>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row max-w-7xl m-auto mt-8 p-8 gap-16'>
        <div className={styles.item}>
          <h2 className="font-semibold text-3xl text-muted-foreground">Awaj ET Help Center</h2>
          <p className='text-muted-foreground'>
            Welcome to Awaj ET help center. In this article, we will guide you through the main features and 
            functionalities of our platform and answer some frequently asked questions. 
            Whether you are a new or a returning user, we hope you will find this article useful and informative.
            <br />
            <Image src={Content} width={500} height={500} alt='Awaj ET Case Studies Icon'/>
            <br />
            Our website is designed to provide you with a seamless and enjoyable online experience. 
            You can browse, search, and order various solutions and subscriptions from our catalog, 
            as well as access your account settings, order history, and customer support. 
            Check the features sections to some of the key features of our platform:
          </p>
        </div>
        <div className={styles.item}>
          <h2 className="font-semibold text-3xl text-muted-foreground">Awaj ET Features:</h2>
          <div className="relative flex flex-col gap-3 max-w-4xl mx-auto flex-1">
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                  <Link href={'/'}>
                    <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                    Home page 🡥
                    </h3>
                  </Link>
              </div>
              <p className="pb-4 text-muted-foreground">
              This is where you can find the latest deals, promotions, and recommendations based on your preferences and browsing history. 
              You can also access the main menu, AI copilot, and the campaign board from here.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                  <Link href={'/'}>
                      <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                      Solutions catalog 🡥
                      </h3>
                  </Link>
              </div>
              <p className="pb-4 text-muted-foreground">
              This is where you can explore our wide range of products and services, categorized by type, brand, price, rating, and more. 
              You can also filter, sort, and compare different options to find the best one for you.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                  <Link href={'/'}>
                    <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                    Product page 🡥
                    </h3>
                  </Link>
              </div>
              <p className="pb-4 text-muted-foreground">
              This is where you can view the details, specifications, reviews, and images of a specific product or service. 
              You can also add it to your campaign or compare list from here.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                  <Link href={'/'}>
                    <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                    Campaign board 🡥
                    </h3>
                  </Link>
              </div>
              <p className="pb-4 text-muted-foreground">
              This is where you can review your selected items, adjust the quantity, apply coupons or discounts, and proceed to checkout.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                  <Link href={'/'}>
                    <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                    Checkout 🡥
                    </h3>
                  </Link>
              </div>
              <p className="pb-4 text-muted-foreground">
              This is where you can enter your billing information, choose your payment method, and confirm your order.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                  <Link href={'/'}>
                    <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                    Account 🡥
                    </h3>
                  </Link>
              </div>
              <p className="pb-4 text-muted-foreground">
              This is where you can manage your personal information, preferences, security settings, payment methods, addresses, and subscriptions. 
              You can also view your order history, track your shipments, and request returns or refunds from here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl text-muted-foreground my-10 m-auto text-center">
      <h2 className="font-semibold text-3xl text-muted-foreground">Contact Customer Support</h2>
        <p className="mt-4 mb-10">
          If you have any further questions or need assistance with anything, 
          please do not hesitate to contact us. We are always happy to help. Thank you for choosing Awaj ET!
        </p>
      </div>
      <Faqs/>
    </div>
  );
};

export default Help;
