import type { Metadata } from 'next'
import styles from "./page.module.css"
import { Separator } from "@/app/components/ui/separator"
import Image from "next/image"
import Banner from "@/public/character/awaj-team-banner2.jpg"
import Content from "@/public/character/3995.png"
import ETH from "@/public/logo/et.svg"
import UAE from "@/public/logo/ae.svg"
import Mission1 from "@/public/casestudy/hand_bulb.png"
import Mission2 from "@/public/casestudy/technology.png"
import Faqs from "@/app/components/faq/faqs"
import Stats from "@/app/sections/stats"
import Discount from "@/app/sections/ctas/discount"
import GlassFlash from '@/app/components/ui/flash_glass'
import Aman from '@/public/profile/aman.jpg'
import Ibsa from '@/public/profile/ibsaa.jpg'
import Sof from '@/public/profile/sofi.jpg'
import Leul from '@/public/profile/leul.jpg'
import Nat from '@/public/profile/nati.jpg'
import Eden from '@/public/profile/edu.jpg'
import Nahom from '@/public/profile/nahom.jpg'
import Maya from '@/public/profile/maya.jpg'
import Samri from '@/public/profile/samri.jpg'
import Kal from '@/public/profile/kal.jpg'
import Ela from '@/public/profile/ela.jpg'
import Abel from '@/public/profile/abel.jpg'

export const metadata: Metadata = {
  title: 'Teams and Career Opportunities | Awaj ET ',
  description: 'Career opportunities and the team behind Awaj ET, the agency, and related platforms',
}

const industries = [
  {
    photo: Aman,
    title: 'CEO',
    name:'Amanuel Melesse',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Ibsa,
    title: 'COO',
    name:'Ibsaa Bekele',
    desc:'A strategy orchestrator, performance elevator and navigator of deals.',
  },
  {
    photo: Eden,
    title: 'CMO',
    name:'Eden Mulugeta',
    desc:'Marketing impact and growth mastermind taking brands to new heights.',
  },
  {
    photo: Sof,
    title: 'CTO',
    name:'Sofonias Melesse',
    desc:'A pioneer in digital innovations, shaping platforms for the digital era.',
  },
  {
    photo: Nat,
    title: 'Fullstack Dev',
    name:'Natnael Asefaw',
    desc:'Digital sucess builder from backend to frontend with seamless experiences.',
  },
  {
    photo: Leul,
    title: 'Data Scientist',
    name:'Luel Ashenafi',
    desc:'A guide to digital odyssey unveilling insights and powering strategies.',
  },
  {
    photo: Nahom,
    title: 'Creative Director',
    name:'Nahom Yohannes',
    desc:'A transformer of concepts into captivating visuals that speak louder than words.',
  },
  {
    photo: Maya,
    title: 'Social Media Guru',
    name:'Maya Mengstu',
    desc:'A digital guru, content curator, trend analyst and engagement strategist.',
  },
  {
    photo: Samri,
    title: 'Graphic Designer',
    name:'Samrawit Ashenafi',
    desc:'Elevator of ideas creating visual excellence with creativity and percision.',
  },
  {
    photo: Kal,
    title: 'Sales Manager',
    name:'Kalkidan Berihun',
    desc:'A Driver of success through prospect strategy, nurturing and streamlining sales.',
  },
  {
    photo: Ela,
    title: 'Video Editor',
    name:'Elias Dawit',
    desc:'A Visual maestro crafting impactful narratives into digital stories.',
  },
  {
    photo: Abel ,
    title: 'Photographer/Designer',
    name:'Abel Birhanu',
    desc:'A lens of creativity capturing and mastering brands and stories in pixels.',
  },
];


const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={Banner}
          fill={true}
          alt="About Awaj ET - Creative Banner"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className="text-2xl text-secondary-foreground font-light leading-[1.15] ">Digital Storytellers</h1>
          <h2 className="text-md text-secondary-foreground font-light pt-2">
            Handcrafting digital experiences
          </h2>
        </div>
      </div>
      <div className="max-w-3xl text-muted-foreground my-10 px-2 m-auto">
        <div className='flex flex-row flex-wrap gap-2 w-full'>
          <h2 className="font-semibold text-3xl text-muted-foreground">Behind Awaj ET</h2>
          <Image src={ETH} width={50}  alt='Awaj ET Ethiopia' className='rounded-3xl'/>
          <Image src={UAE} width={50}  alt='Awaj ET UAE' className='rounded-3xl'/>
        </div>
        <p className="mt-4 mb-2">
          Awaj ET is originally created in Ethiopia and UAE with a team of 4 young professionals. 
          Their multi-disciplinary expertise in marketing, sales, computer science, engineering, 
          and economics is the key to the excellence in the solutions we provide. 
          The algorithm that fuels Awaj ET took a great deal of commitment to reach where we are now, 
          and we are further evolving and iterating to deliver the best CRM tool for SMEs in developing countries.
        </p>
          <Image src={Content} width={700} height={500} alt='Awaj ET Team and Career'/>
          <br />
        <h2 className="font-semibold text-3xl text-muted-foreground text-center">Meet the Masters Behind Our Magic.</h2>
        <p className="mt-4 mb-10 text-center">
        In the dynamic world of digital marketing, success is a result of innovation, strategy, and the relentless pursuit of excellence. 
        Get to know the wizards who make the magic happen at Awaj ET:
        </p>
      </div>
      <div className='max-w-6xl m-auto grid gap-4 grid-cols-1 md:grid-cols-4'>
        {industries.map((ind, indIndex) => (
          <div key={indIndex}>
            <GlassFlash>
              <div className='flex flex-col gap-4 items-center text-muted-foreground'>
                <Image src={ind.photo} alt={ind.name} className='mt-5 rounded-md' height={200}/>
                <div className='bg-card flex ring-border ring-inset ring-1 rounded-xl flex-col items-center p-4'>
                  <h3 className='font-bold text-lg md:text-xl'>{ind.name}</h3>
                  <h3 className='font-light text-base md:text-lg'>{ind.title}</h3>
                  <Separator/>
                  <p className='text-start pt-2 px-3'>{ind.desc}</p>
                </div>
              </div>
            </GlassFlash>
          </div>
        ))}
      </div>
      <div className='max-w-5xl mt-12 mx-auto'>
        <Separator/>
        <h2 className="font-semibold text-center mt-12 text-3xl text-muted-foreground">Work with us.</h2>
      </div>
      <div className='flex flex-col md:flex-row max-w-5xl px-2 m-auto gap-16'>
        <div className='flex-1 flex flex-col gap-4 items-center'>
          <Image src={Mission2} width={200} height={200} alt='Awaj ET Case Studies Icon'/>
          <div>
            <h2 className="font-semibold text-3xl text-muted-foreground">Technical Excellence.</h2>
            <p className='text-muted-foreground py-3'>
            If you are interested in working with an agile team to develop, customize, integrate, test, and maintain web, 
            mobile and desktop-based CRM applications built on various technology frameworks we are the right fit for you. 
            Join our growing team to be a part of a brighter future!
            </p>
          </div>
        <Separator/>
        </div>
        <div className='flex-1 flex flex-col gap-4 items-center'>
          <Image src={Mission1} width={200} height={200} alt='Awaj ET Case Studies Icon'/>
          <div>
            <h2 className="font-semibold text-3xl text-muted-foreground">Greatest Improvisers.</h2>
            <p className='text-muted-foreground py-3'>
            We are looking for self-directed learners who take full responsibility for growth and skill development. 
            We compensate our team very attractively. In exchange we will hold you accountable to meeting deadlines 
            and take ownership of problems and shepherd the process until resolved.
            </p>
          </div>
        <Separator/>
        </div>
      </div>
      <div className="h-12"></div>
      <Stats/>
      <Discount/>
      <div className="h-16"></div>
      <Faqs/>
    </div>
  )
}

export default Team