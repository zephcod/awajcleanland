import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/app/components/button/button";
import Character_contact from "@/public/character/contact.webp";
import Faqs from "@/app/components/faq/faqs";
import Stats from "@/app/sections/stats";
import MapEmbed from "@/app/sections/ctas/map";
import { Icons } from "@/app/components/ui/icons";
import HelpBg from "@/public/character/3990.png"
import Link from "next/link";
import { Separator } from "@/app/components/ui/separator";

export const metadata = {
  title: "Awaj ET Contact Page",
  description: "Awaj ET Contact Page",
};

const Contact = () => {
  return (
      <div className={styles.maincontainer}>
        <div className="mt-24 max-w-4xl m-auto">
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src={Character_contact}
                alt=""
                fill={true}
                className={styles.image}
                />
            </div>
          </div>
        </div>
      <div className="flex flex-col md:flex-row gap-2 max-w-5xl m-auto text-muted-foreground mt-24">
        <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1">
          <div className="relative">
            <div className='flex flex-row gap-4 mb-2 items-center'>
              <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.office className='bg-card m-2 h-8 w-8 rounded-full p-1 shadow-md'/> </div>
              <h3 className="font-semibold text-lg  border-dashed border-b-2">
                Head Quarters
              </h3>
            </div>
            <p className="pb-2">Yeka Sub-City, Addis Abeba, Ethiopia.</p>
            <p className="pb-4">Djibuti St, Yeab Building, 802B.</p>
          </div>
          <div className="relative">
            <div className='flex flex-row gap-4 mb-2 items-center'>
              <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.user className='bg-card m-2 h-8 w-8 rounded-full p-1 shadow-md'/> </div>
              <h3 className="font-semibold text-lg border-dashed border-b-2">
                Contact
              </h3>
            </div>
            <div className="flex flex-row gap-4 p-1">
              <p className="w-16">Sales:</p>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.phone className="h-4 w-4"/>
                  <p>+251976873419</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.mail className="h-4 w-4"/>
                  <p>sales@awajad.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 p-1">
              <p className="w-16">Support:</p>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.phone className="h-4 w-4"/>
                  <p>+251965213662</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.mail className="h-4 w-4"/>
                  <p>support@awajad.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 p-1">
              <p className="w-16">General:</p>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.phone className="h-4 w-4"/>
                  <p>+251903569999</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.mail className="h-4 w-4"/>
                  <p>info@awajad.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MapEmbed/>
        </div>
      <div className="h-12"></div>
      <Stats/>
      <div className="h-16"></div>
      <Faqs/>
    </div>
  );
};

export default Contact;
