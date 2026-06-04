'use client'
import React, { useState } from "react";
import Image from "next/image";
import Content from "@/public/deal1.svg";
import Content2 from "@/public/screen2.png";
import Content3 from "@/public/screen3.png";
import Content4 from "@/public/screen4.png";
import styles from '@/sections/deals/deals.module.css'
import { Icons } from "@/components/UI/icons";
import Fb from '@/public/character/blub.png'
import LinkedIn from '@/public/character/value.png'
import Insta from '@/public/character/social-deal.png'
import Reviver from '@/public/character/marketing-541.png'
import Actuator from '@/public/character/adv-538.png'
import Booster from '@/public/character/megafono.png'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/UI/tooltip";

interface ToolTipProps {
  title:string; tip:string; 
}
function ToolTip (props:ToolTipProps){
  return(
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="ring-1 ring-border rounded-sm w-6 cursor-pointer">{props.title}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{props.tip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

function RadarValue(val:number){
  return(
    <div className="flex flex-row gap-2 ">
      <div className={val>0?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>1?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>2?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>3?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>4?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>5?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>6?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>7?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>8?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      <div className={val>9?'h-2 w-2 md:h-3 md:w-3 bg-primary rounded-full ring-2 ring-border':'h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-border'}></div>
      
    </div>
  )
}

interface ArticleCardrProps {
    id: number; title:string; price:string; img:string; action:Function;
  }
  function DealCard (props:ArticleCardrProps) {
    return (
      <div className={styles.card} onClick={props.action}>
        <div className={styles.imgContainer}>
          <Image
              src={props.img}
              fill={true}
              alt=""
              className={styles.image}
              />
        </div>
        <div className='flex text-base text-muted-foreground flex-col items-center'>
          <h2>{props.title}</h2>
          <div className="border-border border-b-2 h-2 w-full"></div>
          <div className='text-xl'>
            {props.price}
          </div>
        </div>
      </div>
    )
  }

interface DealProps {
    id: number; 
    title:string; 
    desc:string; 
    list1:string; list2:string; list3:string; list4:string; list5:string;
    price:string; 
    img:string; 
    link:string;
    values:number[];
  }
  function DealDisplay (props:DealProps) {
    return (
        <div className={styles.modal}>
            <div className='flex flex-col md:flex-row bg-accent rounded-lg p-2 gap-4 items-center'>
              <div className="flex-1">
                <Image src={Content} width={800} height={800} className="items-end" alt='Content Marketing Awaj Ad'/>
              </div>
              <div className="flex flex-col flex-1">
                <div className='text-center text-lg font-semibold rounded-md mb-4 w-fit p-2 ring-1 ring-border'>
                    <p>{props.title} - Bundle</p>  
                </div> 
                <div className="flex flex-row gap-2 text-muted-foreground items-center">
                  <div className="flex flex-col items-start text-sm gap-1">
                    <ToolTip title={"S"} tip={"Here goes nothing"}/>
                    <ToolTip title={"L"} tip={"Here goes nothing"}/>
                    <ToolTip title={"C"} tip={"Here goes nothing"}/>
                    <ToolTip title={"T"} tip={"Here goes nothing"}/>
                    <ToolTip title={"F"} tip={"Here goes nothing"}/>
                    <ToolTip title={"A"} tip={"Here goes nothing"}/>
                    <ToolTip title={"V"} tip={"Here goes nothing"}/>
                    <ToolTip title={"B"} tip={"Here goes nothing"}/>
                  </div>
                  <div className="flex flex-col items-start text-sm gap-1">
                    <div>Sales</div>
                    <div>Leads</div>
                    <div>Costs</div>
                    <div>Time</div>
                    <div>Followers</div>
                    <div>Aesthetic</div>
                    <div>Viability</div>
                    <div>Brand</div>
                  </div>
                  <div className="flex flex-col items-start text-sm gap-4 md:gap-3">
                    {RadarValue(props.values[0])}
                    {RadarValue(props.values[1])}
                    {RadarValue(props.values[2])}
                    {RadarValue(props.values[3])}
                    {RadarValue(props.values[4])}
                    {RadarValue(props.values[5])}
                    {RadarValue(props.values[6])}
                    {RadarValue(props.values[7])}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.feature}>
                <p className="hidden md:flex text-base mt-6 text-muted-foreground">{props.desc}</p>
                <p className="mt-6">Bundled services:</p>
                <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                    <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                    <Icons.chevronRight className='bg-card rounded-full p-1 shadow-sm'/> 
                    </div>
                    <p className="">{props.list1}</p>
                </div>
                <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                    <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                    <Icons.chevronRight className='bg-card rounded-full p-1 shadow-sm'/> 
                    </div>
                    <p className="">{props.list2}</p>
                </div>
                <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                    <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                    <Icons.chevronRight className='bg-card rounded-full p-1 shadow-sm'/> 
                    </div>
                    <p className="">{props.list3}</p>
                </div>
                <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                    <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                    <Icons.chevronRight className='bg-card rounded-full p-1 shadow-sm'/> 
                    </div>
                    <p className="">{props.list4}</p>
                </div>
                <div className="flex flex-row gap-4 items-center mt-2 ml-2">
                    <div className='bg-accent opacity-70 rounded-full shadow-md p-1'>
                    <Icons.chevronRight className='bg-card rounded-full p-1 shadow-sm'/> 
                    </div>
                    <p className="">{props.list5}</p>
                </div>
                <p className="mt-8">Check more...</p>
            </div>
      </div>
    )
  }

const DealsPage = () => {
    const [showService, setShowService] = useState(6);

  return (
    <div className='flex flex-col justify-center items-center m-auto w-3/4'>
      <div className={styles.canvas}>
        {showService===1 ? (
            <DealDisplay
                id={1}
                title={"Reviver"}
                desc={""}
                price={""}
                img={""}
                link={""} 
                values= {[7,3,9,4,3,8,5,4,6]}
                list1={"Strategy development"} 
                list2={"Content creation"} 
                list3={"Content distribution"} 
                list4={"Content optimization"} 
                list5={"Content analytics"}/>
        ) : 
        showService===2 ? (
            <DealDisplay
                id={2}
                title={"Booster"}
                desc={""}
                price={""}
                img={""}
                values= {[3,5,6,8,7,5,2,9,4]}
                link={""} list1={""} list2={""} list3={""} list4={""} list5={""}/>
        ) : 
        showService===3 ? (
            <DealDisplay
                id={3}
                title={"Actuator"}
                desc={""}
                price={""}
                img={""}
                values= {[3,5,6,8,7,5,2,9,4]}
                link={""} list1={""} list2={""} list3={""} list4={""} list5={""}/>
        ) : 
        showService===4 ? (
            <DealDisplay
                id={4}
                title={"Orbiter"}
                desc={""}
                price={""}
                img={""}
                values= {[3,5,6,8,7,5,2,9,4]}
                link={""} list1={""} list2={""} list3={""} list4={""} list5={""}/>
        ) :
        showService===5 ? (
            <DealDisplay
                id={5}
                title={"Miner"}
                desc={""}
                price={""}
                img={""}
                values= {[3,5,6,8,7,5,2,9,4]}
                link={""} list1={""} list2={""} list3={""} list4={""} list5={""}/>
        ) :
        /* show service 6 */
            <DealDisplay
                id={6}
                title={"Launcher"}
                desc={""}
                price={""}
                img={""}
                values= {[3,5,6,8,7,5,2,9,4]}
                link={""} list1={""} list2={""} list3={""} list4={""} list5={""}/>
        }
        <div className={styles.container}>
          <div className="flex flex-row gap-2 text-muted-foreground items-center">
            Browse bundles here 
            <Icons.arrowDown className='h-4 w-4 animate-bounce'/>
          </div>
            <div className={styles.card_list}>
                <DealCard
                    action={()=>setShowService(1)}
                    id={1}
                    title='Reviver'
                    price='3,500ETB'
                    img={Reviver.src}/>
                <DealCard
                    action={()=>setShowService(2)}
                    id={2}
                    title='Booster'
                    price='7,000ETB'
                    img={Booster.src}/>
                <DealCard
                    action={()=>setShowService(3)}
                    id={3}
                    title='Actuator'
                    price='12,500ETB'
                    img={Actuator.src}/>
                <DealCard
                    action={()=>setShowService(4)}
                    id={1}
                    title='Orbiter'
                    price='8,500ETB'
                    img={Fb.src}/>
                <DealCard
                    action={()=>setShowService(5)}
                    id={2}
                    title='Miner'
                    price='7,000ETB'
                    img={Insta.src}/>
                <DealCard
                    action={()=>setShowService(6)}
                    id={3}
                    title='Launcher'
                    price='5,000ETB'
                    img={LinkedIn.src}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DealsPage