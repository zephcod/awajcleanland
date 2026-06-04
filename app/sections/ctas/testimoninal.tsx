'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Profile from "@/public/profile/profile.svg";
import Mahi from "@/public/profile/ts2.png";
import Rahel from "@/public/profile/ts3.png";
import Ante from "@/public/profile/ts4.png";
import Mo from "@/public/profile/ts5.png";
import { Separator } from '@/components/UI/separator';


interface ToolTipProps {
    title:string; tip:string; 
  }
  function ToolTip (props:ToolTipProps){
    return(
    <div>

    </div>
    )
  }


function Testimonial() {
  const slides = [
    {
      url: Profile,
      client:'Bruk Daniel',
      title:'Marketing Director, Impact International PLC',
      testimonial:'Finding a CRM software that satisfied both our requirements and our clients expectations was something I never imagined available locally here in Addis Abeba. Great job Awaj Team, Keep up the good work!',
    },
    {
      url: Mahi,
      client:'Mahlet Getachew',
      title:'Owner, Mahi Beauty & Day Spa',
      testimonial:'I was impressed by the platform and decided to use it for my customers. It helps me with all aspects of my business, from finding leads to closing deals. It has made a huge difference in my results. I highly appreciate their innovation and constant updates.',
    },
    {
      url: Rahel,
      client:'Rahel Atnafu',
      title:'Freelancer, Digital Marketing',
      testimonial:'I am very impressed by the quality and value of Awaj ET. They always anticipate my needs and deliver new features that exceed my expectations. They are very attentive to feedback and act on it promptly. This is very rare and admirable. I appreciate you guys, truly.',
    },
    {
      url: Ante,
      client:'Anteneh Mekuriya',
      title:'Creative Director, Proximal Studio',
      testimonial:'This has been a transformative experience. Our entire business is now based on Awaj ET. We have no intention of switching back to our old ways. Where else can you get SMS, email, phone, social media, and web dev in one platform?',
    },
    {
      url: Mo,
      client:'Mosisa Bekele',
      title:'Owner, Mo Gymnasium',
      testimonial:'My experience with the platform was amazing from the start...They showed genuine interest in my business and helped me achieve new heights. The technology is constantly evolving and improving. They are offering new services and features that I appreciate.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-[280px] m-2 '>
      <div className='flex flex-row items-center duration-500 justify-center'>
        <div className='rounded-full p-2 bg-accent hover:bg-card opacity-50 text-muted-forground cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='flex flex-col md:flex-row bg-card shadow-md items-center rounded-lg mx-2 max-w-3xl '>
            <Image src={slides[currentIndex].url} 
            alt={slides[currentIndex].client} 
            width={200} 
            height={200} 
            className='w-24 ring-2 m-4 ring-border rounded-full'/>
            <div className='flex flex-col items-center justify-start bg-accent gap-1 p-4'>
                <p>{slides[currentIndex].client}</p>
                <p className='text-muted-foreground text-sm'>{slides[currentIndex].title}</p>
                <Separator/>
                <p className='text-muted-foreground'>{slides[currentIndex].testimonial}</p>
            </div>
        </div>
        <div className='rounded-full p-2 bg-accent hover:bg-card opacity-50 text-muted-forground cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer text-muted-foreground'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;