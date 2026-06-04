import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Banner from "@/public/character/about_banner.png"
import { Metadata } from "next"
import Content from "@/public/character/1882.png"
import Mission1 from "@/public/casestudy/hand_bulb.png"
import Mission2 from "@/public/casestudy/technology.png"
import Faqs from "@/app/components/faq/faqs"
import Stats from "@/app/sections/stats"
import { Separator } from "@/app/components/ui/separator"
import CallUs from "@/app/sections/ctas/call_us"

export const metadata: Metadata = {
  title: 'About Awaj ET',
  description: 'Information and summary about Awaj ET, the agency, and related platforms',
}


const About = () => {
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
          <h1 className="text-lg text-secondary-foreground font-bold leading-[1.15] ">Digital Storytellers</h1>
          <h2 className="text-md text-muted-foreground pt-2 font-semibold">
            Handcrafting digital experiences
          </h2>
        </div>
      </div>
      <div className="max-w-3xl text-muted-foreground my-10 px-2 m-auto">
        <h2 className="font-semibold text-3xl text-muted-foreground">What is Awaj ET?</h2>
        <p className="mt-4 mb-2">
          Awaj ET is a Customer Relationship Management and Content Management System (CRM & CMS) software. 
          Awaj ET is comprised of tools that helps businesses manage their relationships with their customers and prospects. 
          It allows them to captivate, nurture and organize their prospects, track interactions, automate workflows, generate reports, and more. 
          Our software is highly utilized by growing businesses to improve customer attraction, satisfaction, loyalty, retention, and revenue. 
          The software can also help businesses streamline their sales, marketing, and advertisement processes, 
          and optimize their performance and productivity.
        </p>
        <Image src={Content} width={700} height={500} alt='Awaj ET Case Studies Icon'/>
        <br />
        <h2 className="font-semibold text-3xl text-muted-foreground">Awaj ET Meda.</h2>
        <p className="mt-4 mb-10">
        Welcome to the forefront of AI exploration with Awaj ET, we&apos;ve redefined the landscape for AI experimentation, 
        offering a flexible, cost-effective approach to accessing cutting-edge technologies. 
        Our platform serves as an expansive playground, providing developers, businesses, 
        and researchers the freedom to explore the vast potential of AI without the constraints of traditional pricing models. 
        With our Pay-As-You-Go model, you pay only for the resources you consume, enabling unlimited creativity and innovation at your fingertips.
        </p>
        <h2 className="font-semibold text-3xl text-muted-foreground">Awaj Ad Agency.</h2>
        <p className="mt-4 mb-10">
        Awaj agency is a subsidiary entity based on the Awaj ET CRM and led by the core team to provide marketing and sales services to clients. 
        We help businesses create and execute strategies to reach their target audience, increase brand awareness, generate leads, 
        and drive sales. Our team offers various services, such as web design, SEO, social media marketing, content marketing, 
        email marketing, PPC advertising, video marketing, and more.
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
      <div className="h-12"></div>
      <Stats/>
      <CallUs/>
      <div className="h-16"></div>
      <Faqs/>
    </div>
  );
};

export default About;
