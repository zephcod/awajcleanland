import image1 from '@/public/deals/deal-1-starter.png'
import image2 from '@/public/deals/deal-2-launcher.png'
import image3 from '@/public/deals/deal-3-booster.png'
import image4 from '@/public/deals/deal-4-miner.png'
import image5 from '@/public/deals/deal-5-orbiter.png'
import image6 from '@/public/deals/deal-6-actuator.png'
import radar1 from '@/public/deals/radar1-starter.svg'

export const images: string[] = [image1.src, image2.src, image3.src, image4.src, image5.src, image6.src]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex

export type DealProps =  {
    id: number; 
    title:string; 
    desc:string; 
    list1:string; list2:string; list3:string;
    price:string; 
    img:string; 
    link:string;
    values:number[];
  }

export const deals: DealProps[] = [
    {
        id:1,
        title:"Starter",
        desc:"Ideal for existing companies entering digital marketing.",
        price:"5,000 ETB",
        img:radar1.src,
        link:"starter",
        values: [7,3,9,4,3,8,5,4,6],
        list1:"Comprehensive digital presence audit.",
        list2:"Social media boost & engagement strategy.",
        list3:"Improve online visibility through SEO essentials.", 
    },
    {
        id:2,
        title:"Launcher",
        desc:"Tailored for startups launching new brands, product, or services.",
        price:"8,000 ETB",
        img:radar1.src,
        link:"launcher",
        values: [7,3,9,4,3,8,5,4,6],
        list1:"Brand identity and voice development.",
        list2:"Website development and integration.",
        list3:"Targeted advertising campaign.", 
    },
    {
        id:3,
        title:"Booster",
        desc:"Designed to push existing online brands for maturation.",
        price:"10,000 ETB",
        img:radar1.src,
        link:"booster",
        values: [7,3,9,4,3,8,5,4,6],
        list1:"Strategic content marketing boost.",
        list2:"Advanced SEO strategy & search ranking.",
        list3:"Email/SMS lead generation strategy.", 
    },
    {
        id:4,
        title:"Miner",
        desc:"Geared towards finding new leads online.",
        price:"7,000 ETB",
        img:radar1.src,
        link:"miner",
        values: [7,3,9,4,3,8,5,4,6],
        list1:"Incentivized lead generation strategy.",
        list2:"Value based original content creation.",
        list3:"Conversation rate and lead optimization.", 
    },
    {
        id:5,
        title:"Orbiter",
        desc:"Tailored for mature brands focusing to establish authority.",
        price:"16,000 ETB",
        img:radar1.src,
        link:"orbiter",
        values: [7,3,9,4,3,8,5,4,6],
        list1:"Thought leadership and authority content.",
        list2:"Influencer partnership & management.",
        list3:"Community building & development strategy.", 
    },
    {
        id:6,
        title:"Actuator",
        desc:"Crafted for turning leads and audience into revenue.",
        price:"20,000 ETB",
        img:radar1.src,
        link:"actuator",
        values: [7,3,9,4,3,8,5,4,6],
        list1:"Sales funnel audit & optimization.",
        list2:"Re-engagement analysis and strategy.",
        list3:"Affiliate & price rebate strategy.", 
    }
]

export const dealByIndex = (index: number): DealProps => deals[index % deals.length]