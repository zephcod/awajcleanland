'use client'
import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsMegaphoneFill } from "react-icons/bs";
import Image from "next/image";
import Content from "@/public/screenb1-min.webp";
import Content2 from "@/public/screenb1-min.webp";
import Content3 from "@/public/screenb1-min.webp";
import Content4 from "@/public/screenb1-min.webp";
import styles from '@/app/sections/service_carousel/service_caraouse.module.css'
import { Icons } from "@/app/components/ui/icons";



const ServiceCarousel = () => {
  const [showService, setShowService] = useState(1);

  return (
    <div className='flex flex-col md:flex-row justify-center items-center m-auto w-3/4'>
        <div className='flex flex-row md:flex-col gap-8 p-8 '>
          <button className={styles.round} type="button" onClick={() => setShowService(1)}>
            <span><AiFillFire/></span>
          </button>
          <div className="md:flex h-2 hidden"></div>
          <button className={styles.round} type="button" onClick={() => setShowService(2)}>
              <span><AiTwotoneLike/></span>
          </button>
          <div className="md:flex h-2 hidden"></div>
          <button className={styles.round} type="button" onClick={() => setShowService(3)}>
            <span><BsMegaphoneFill/></span>
          </button>
          <div className="md:flex h-2 hidden"></div>
          <button className={styles.round} type="button" onClick={() => setShowService(4)}>
          <span><AiOutlineLineChart/></span>
          </button>
        </div>
      <div className="md:flex w-6 hidden"></div>
      <div className={styles.canvas}>
        {showService===1 ? (
          <div className={styles.modal}>
            <div className={styles.feature}>
              <div className='text-center text-lg font-semibold rounded-md w-3/4 p-2 ring-1 ring-border'>
                <p>Content Marketing</p>  
              </div> 
              <p className="hidden md:flex text-base mt-6 text-muted-foreground">
              Content marketing services are a way to create and distribute valuable, relevant, 
              and consistent content to attract and retain a clearly defined audience.
              </p>
              <p className="mt-6">Our services include:</p>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Strategy development</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Content creation</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Content distribution</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Content optimization</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Content analytics</p>
              </div>
              <p className="mt-8">Check more...</p>
            </div>
            <div className='flex flex-auto flex-row bg-accent rounded-lg'>
            <Image src={Content} width={800} height={800} className="items-end" alt='Content Marketing Awaj Ad'/>
            </div>
          </div>
        ) : 
        showService===2 ? (
          <div className={styles.modal}>
            <div className={styles.feature}>
              <div className='text-center text-lg text-muted-foreground font-semibold rounded-md w-3/4 p-2 ring-1 ring-border'>
                <p>Social Media</p>  
              </div> 
              <p className="hidden md:flex text-base mt-6 text-muted-foreground">
              We offer a range of social media marketing services to help you grow your online presence and reach new customers. 
              </p>
              <p className="mt-6">Our services include:</p>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Creating and managing social media accounts </p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Developing and implementing social media strategies </p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Creating and posting original engaging content </p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Monitoring and analyzing your social media performance </p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Running paid social media campaigns </p>
              </div>
              <p className="mt-8">Check more...</p>
            </div>
            <div className='flex flex-auto flex-row bg-accent rounded-lg'>
            <Image src={Content2} width={800} height={800} className="items-end" alt='Content Marketing Awaj Ad'/>
            </div>
          </div>
        ) : 
        showService===3 ? (
          <div className={styles.modal}>
            <div className={styles.feature}>
              <div className='text-center text-lg text-muted-foreground font-semibold rounded-md w-3/4 p-2 ring-1 ring-border'>
              <p>Paid Advertising</p>
              </div> 
              <p className="hidden md:flex text-base mt-6 text-muted-foreground">
              Our paid digital advertising services allows you to reach your target audiences by leveraging all 
              social media platforms immense data with attractively affordable costs.
              </p>
              <p className="mt-6">Our services include:</p>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Planning, research, optimization, and monitoring ads</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Pay per click ads for search engines</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Ads and boosts for social media platforms</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Fixed influencer advertisement </p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Affiliated commission work advertisement</p>
              </div>
              <p className="mt-8">Check more...</p>
            </div>
            <div className='flex flex-auto flex-row bg-accent rounded-lg'>
            <Image src={Content3} width={800} height={800} className="items-end" alt='Content Marketing Awaj Ad'/>
            </div>
          </div>
        ) : 
        /* show service 4 */
          <div className={styles.modal}>
            <div className={styles.feature}>
              <div className='text-center text-lg text-muted-foreground font-semibold rounded-md w-3/4 p-2 ring-1 ring-border'>
                <p>Marketing Intelligence</p>  
              </div> 
              <p className="hidden md:flex text-base mt-6 text-muted-foreground">
              We offer data-driven digital marketing intelligence services to help 
              businesses optimize their online presence and performance.
              </p>
              <p className="mt-6">Our services include:</p>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Provide insights into customer behavior and preferences</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Discern trends across various channels and platforms</p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Propose recommendations for improving design, content, SEO and more </p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                   <Icons.check className='bg-card rounded-full p-1 shadow-sm'/> 
                </div>
                <p className="">Tools to measure and analyze the effectiveness of digital marketing campaigns and strategies</p>
              </div>
              <p className="mt-8">Check more...</p>
            </div>
            <div className='flex flex-auto flex-row bg-accent rounded-lg'>
            <Image src={Content4} width={800} height={800} className="items-end" alt='Content Marketing Awaj Ad'/>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ServiceCarousel;
