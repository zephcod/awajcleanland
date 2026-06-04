import React from 'react'
import Image from "next/image";
import styles from '@/app/components/pricing/popular_orders.module.css';
import Meta from '@/public/social/meta.png'
import LinkedIn from '@/public/social/linkdin.png'
import Twitter from '@/public/social/twitter.png'
import Telegram from '@/public/social/telegram.png'
import PhotoCamera from '@/public/casestudy/photo_camera.png'
import PromoVideo from '@/public/casestudy/promo.webp'
import Branding from '@/public/casestudy/branding.webp'
import Training from '@/public/casestudy/training.webp'
import Google from '@/public/social/google.png'
import Website from '@/public/social/website.png'
import Link from 'next/link';
import ExpandingArrow from '@/app/components/expanding_arrow';

interface ArticleCardrProps {
  id: number; title:string; price:string; img:string;
}
function ArticleCard (props:ArticleCardrProps) {
  return (
    <article className={styles.card}>
    <header className={styles.card_header}>
      <p>17 Orders this week</p>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.imgContainer}>
      <Image
          src={props.img}
          fill={true}
          alt=""
          className={styles.image}
          />
    </div>
      <div className={styles.price}>
        <div className={styles.author_name_prefix}>Starting from</div>
        {props.price}
      </div>
    <div className={styles.tags}>
      <Link href="/pricing/check_out">Order</Link>
      <Link href="/pricing/build-campaign">+ Build</Link>
    </div>
    </article>
  )
}


const PopularOrders = () => {
  return (
    <div className={styles.container}>
    <section className={styles.card_list}>
          <ArticleCard
            id={1}
            title='Meta Boost'
            price='5,000ETB'
            img={Meta.src}/>
          <ArticleCard
            id={2}
            title='Google Ads'
            price='5,000ETB'
            img={Google.src}/>
          <ArticleCard
            id={4}
            title='Ad Promo Video'
            price='4,500ETB'
            img={PromoVideo.src}/>
          <ArticleCard
            id={6}
            title='Photography'
            price='2,500ETB'
            img={PhotoCamera.src}/>
          <ArticleCard
            id={5}
            title='Branding Refresh'
            price='4,000ETB'
            img={Branding.src}/>
          <ArticleCard
            id={7}
            title='In person Training'
            price='8,500ETB'
            img={Training.src}/>
          <ArticleCard
            id={8}
            title='Website Design'
            price='20,000ETB'
            img={Website.src}/>
          <ArticleCard
            id={3}
            title='Social Media Management'
            price='7,500ETB'
            img={LinkedIn.src}/>
          <ArticleCard
            id={9}
            title='New Social Setup'
            price='25,000ETB'
            img={Telegram.src}/>
          <ArticleCard
            id={10}
            title='Influencer Collab'
            price='40,000ETB'
            img={Twitter.src}/>
      </section>
        <div className='absolute my-auto bottom-1'>
          <Link href={'/pricing/build-campaign'} className="relative group mt-20 sm:mt-0 rounded-full flex items-center justify-center mx-auto text-primary-foreground dark:text-secondary-foreground text-lg font-light py-2 px-6 transition-all">
            <p>Check more solutions...</p>
          <ExpandingArrow/>
          </Link>
        </div>
      </div>
  )
}

export default PopularOrders