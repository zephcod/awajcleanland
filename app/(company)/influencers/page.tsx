import styles from "./page.module.css"
import Image from "next/image"
import InfluencerBg from "@/public/character/1846.png"
import { Metadata } from "next"
import Stats from "@/app/sections/stats"
import Discount from "@/app/sections/ctas/discount"
import Faqs from "@/app/components/faq/faqs"
import { Separator } from "@/app/components/ui/separator"
import Mission1 from "@/public/casestudy/hand_bulb.png"
import Mission2 from "@/public/casestudy/technology.png"
import { Icons } from "@/app/components/ui/icons"

export const metadata: Metadata = {
  title: 'Awaj Influencers | Awaj ET',
  description: 'Awaj ET software, the agency, and related platforms use cases and partnerships for influencers and creators',
}


const Influencers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={InfluencerBg}
          fill={true}
          alt="awaj et digital marketing influencers"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <p className="text-2xl text-secondary-foreground font-light leading-[1.15] ">Creators and Influencers</p>
          <h2 className="text-md text-muted-foreground pt-2 font-semibold">
            Handcrafting digital experiences
          </h2>
        </div>
      </div>
      <div className="max-w-3xl text-muted-foreground my-10 px-2 m-auto">
        <h2 className="font-semibold text-3xl text-muted-foreground">Connecting Brands and Creators.</h2>
        <p className="mt-4 mb-2">
        We at Awaj ET allocate significant effort into connecting brands with influencers and creators. 
        We help brands reach their target audience through authentic and engaging content created by influencers 
        and creators who share their values and vision. We offer a range of services, including:
        </p>
        <div className="relative flex flex-col p-4 gap-3 max-w-lg my-4 mx-auto">
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                  Matching
                </h3>
              </div>
              <p className="pb-4 text-muted-foreground">
              Cross matching the best influencers and creators with the best brands, based on vision, goals, budget, and niche.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <h3 className='font-semibold text-lg text-muted-foreground border-dashed border-b-2'>
                  Negotiation
                </h3>
              </div>
              <p className="pb-4 text-muted-foreground">
              Negotiating contracts and terms between creators and brands, ensuring fair compensation and clear expectations.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                  Management
                </h3>
              </div>
              <p className="pb-4 text-muted-foreground">
              Managing campaigns and collaborations, from planning to execution to reporting, ensuring quality and consistency.
              </p>
            </div>
            <div className="relative">
              <div className='flex flex-row gap-4 mb-2 items-center'>
                <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.check className='bg-card m-2 rounded-full p-1 shadow-md'/> </div>
                <h3 className="font-semibold text-lg text-muted-foreground border-dashed border-b-2">
                  Analytics
                </h3>
              </div>
              <p className="pb-4 text-muted-foreground">
              Measuring and reporting the impact of influencer and creator marketing campaigns using data-driven analytics.
              </p>
            </div>
          </div>
        <h2 className="font-semibold text-3xl text-muted-foreground">Future of Digital Marketing.</h2>
        <p className="mt-4 mb-10">
        We believe that influencer and creator marketing is the future of digital marketing, 
        as it allows brands to build trust, loyalty, and advocacy among their customers. 
        If you are interested in working with us, please contact us today and let us help you grow your brand 
        with influencer and creator marketing.
        </p>
        <Separator/>
        <h2 className="font-semibold text-center mt-12 text-3xl text-muted-foreground">Awaj ET is mission driven.</h2>
      </div>
      <div className='flex flex-col md:flex-row max-w-5xl px-2 m-auto gap-16'>
        <div className='flex-1 flex flex-col gap-4 items-center'>
          <Image src={Mission1} width={200} height={200} alt='Awaj ET Case Studies Icon'/>
          <div>
            <h2 className="font-semibold text-3xl text-muted-foreground">Optimization through innovation.</h2>
            <p className='text-muted-foreground py-3'>
              We believe in the power of innovation and entrepreneurship to transform the lives of millions of people in developing countries. 
              We provide customer and prospect management solutions to small and medium enterprises (SMEs) across various sectors, 
              helping them grow their businesses, reach new customers, and optimize their operations. 
            </p>
          </div>
        <Separator/>
        </div>
        <div className='flex-1 flex flex-col gap-4 items-center'>
          <Image src={Mission2} width={200} height={200} alt='Awaj ET Case Studies Icon'/>
          <div>
            <h2 className="font-semibold text-3xl text-muted-foreground">Marketing and sales for SMEs.</h2>
            <p className='text-muted-foreground py-3'>
              Our mission is to support the development of a vibrant and inclusive SME ecosystems, 
              where entrepreneurs can access the tools, skills, and networks they need to succeed in the digital age. 
              We are committed to delivering high-quality solutions, fostering long-term partnerships, 
              and creating positive social impact through our work.
            </p>
          </div>
        <Separator/>
        </div>
      </div>
      <Discount/>
      <Stats/>
      <div className="h-16"></div>
      <Faqs/>
    </div>
  );
};

export default Influencers;
