import styles from '@/app/components/page.module.css'
import Socials from '@/app/components/socials/socials';
// import { SubscribeToNewsletterForm } from './forms/subscribe_to_newsletter_form';
import Link from 'next/link';
import { Icons } from '@/app/components/ui/icons';
import { siteConfig } from '@/config/site';

const col1 = [
  {
    id:"1",
    title:"About Us",
    url:"/about",
  },
  {
    id:"2",
    title:"Careers",
    url:"/team",
  },
  {
    id:"3",
    title:"Contacts",
    url:"/contact",
  },
  {
    id:"4",
    title:"Pricing",
    url:"/pricing",
  },
  // {
  //   id:"5",
  //   title:"Privacy Policy",
  //   url:"/privacy",
  // },
  // {
  //   id:"6",
  //   title:"Terms & Conditions",
  //   url:"/terms",
  // }
];
const col2 = [
  // {
  //   id:"1",
  //   title:"Downloads",
  //   url:"/resources/downloads",
  // },
  // {
  //   id:"2",
  //   title:"Case Studies",
  //   url:"/resources/awaj_case_studies",
  // },
  // {
  //   id:"3",
  //   title:"Gallery",
  //   url:"/resources/awaj_gallery",
  // },
  // {
  //   id:"4",
  //   title:"Content Marketing",
  //   url:"/resources/learning/content",
  // },
  // {
  //   id:"5",
  //   title:"Social Media Ad",
  //   url:"/resources/learning/social-media",
  // },
  // {
  //   id:"6",
  //   title:"Awaj ET Tools",
  //   url:"/resources/tools",
  // },
  {
    id:"5",
    title:"Privacy Policy",
    url:"/privacy",
  },
  {
    id:"6",
    title:"Terms & Conditions",
    url:"/terms",
  }
];
const col3 = [
  // {
  //   id:"1",
  //   title:"Blogs",
  //   url:"/blog",
  // },
  {
    id:"2",
    title:"Overview",
    url:"/overview",
  },
  // {
  //   id:"3",
  //   title:"How It Works",
  //   url:"/resources/how_it_works",
  // },
  {
    id:"4",
    title:"Getting Started",
    url:"/getting_started",
  },
  // {
  //   id:"5",
  //   title:"Webinars",
  //   url:"/webinars",
  // },
  {
    id:"6",
    title:"Help Center",
    url:"/help_center",
  }
];

function FooterList1() {
  return (
    <li>
    {col1.map(card=>(
      <Link key={card.id} href={card.url} target='_blank'
      className="p-1 flex items-start  hover:text-orange-300 tr04">
        <div className="ml-1">
          <p className="text-sm font-light py-1 md:py-0">
            {card.title}
          </p>
        </div>
      </Link>
    ))}
    </li>
  );
}

function FooterList2() {
  return (
    <li className={styles.tiercard}>
    {col2.map(card=>(
      <Link key={card.id} href={card.url} target='_blank'
      className="p-1 flex items-start  hover:text-orange-300 tr04">
        <div className="ml-1">
          <p className="text-sm font-light py-1 md:py-0">
            {card.title}
          </p>
        </div>
      </Link>
    ))}
    </li>
  );
}

function FooterList3() {
  return (
    <li className={styles.tiercard}>
    {col3.map(card=>(
      <Link key={card.id} href={card.url} target='_blank'
      className="p-1 flex items-start  hover:text-orange-300 tr04">
        <div className="ml-1">
          <p className="text-sm font-light py-1 md:py-0">
            {card.title}
          </p>
        </div>
      </Link>
    ))}
    </li>
  );
}



export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container} id='footer'>
        <div className={styles.footcta}>
          <div className='relative flex flex-col items-center justify-center'>
            <Link
              aria-label="Home"
              href="/"
              className="hidden items-center space-x-2 lg:flex"
            >
              <Icons.awajlogocircle className="h-6 w-8" aria-hidden="true" />
              <span className="hidden font-bold lg:inline-block">
              {siteConfig.name}
              </span>
            </Link>
            <p className='text-sm text-center font-light py-2 '>
              ©2026 Ace Digital Advert PLC. All rights reserved.
            </p>
          </div>
          <div className='flex flex-col justify-between items-center gap-2'>
            <div className='relative w-full px-0 md:px-12'>
            {/* <SubscribeToNewsletterForm/> */}
            </div>
            <div className='text-sm font-light pb-2'>
            <p>
              ሰላም ቤተሰብ 👋 Join our online community
            </p>
            </div>
          </div>
          <Socials/>
        </div>
        <div className={styles.listcontainer}>
          <ul className="flex justify-between w-full flex-wrap gap-4">
            <li className="space-y-5 row-span-2">
              <h2 className="text-lg tracking-wide">Company</h2>
              <ul className="space-y-4 text-md">
                <FooterList1/>
              </ul>
            </li>
            <li className="space-y-5 row-span-2">
              <h2 className="text-lg tracking-wide">Resources</h2>
              <ul className="space-y-4">
                <FooterList2/>
              </ul>
            </li>
            <li className="space-y-5 row-span-2">
              <h2 className="text-lg tracking-wide">Support</h2>
              <ul className="space-y-4">
                <FooterList3/>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
