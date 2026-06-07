'use client'
import * as React from "react"
import styles from './page.module.css'
import Outline from '@/app/components/button/outline';
import { BsCheck } from 'react-icons/bs';
import '@/app/components/pricing/test.css'
import { Slider } from "@/app/components/ui/slider";
import { formatPrice } from "@/app/utils/utils"



export default function Subscriptions(){
    const [selectMonthly,setSelectMonthly ] = React.useState<Boolean>(true);
    const [priceFix, setPriceFix] = React.useState<[number]>([50000])
    const priceFormat = Number(priceFix)
    const customerSize = (priceFormat*0.2)
    interface PriceWrapperProps {
      id: number; title:string; price:number; feature1:string; feature2:string; feature3:string; feature4:string; feature5:string; feature6:string; feature7:string; feature8:string;
    }
    
    function PriceWrapper(props:PriceWrapperProps) {
      return (
          <div key={props.id} className={styles.canvas}>
            <div className= {styles.card}>
              <div className={styles.banner}>
                <p className='text-center p-1'>
                  {props.title}
                </p>
                <p className={selectMonthly===true?'price_title':'price_title2'}>
                {formatPrice(props.price)}
                </p>
              </div>
              <div className={styles.detail}>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>{props.feature1}</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>{props.feature2}</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>{props.feature3}</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>{props.feature4}</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>{props.feature5}</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>{props.feature6}</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>{props.feature7}</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>{props.feature8}</p>
                </div>
              </div>
              <Outline text='Order' url='/pricing/check_out'/>
            </div>
          </div>
      );
    }
  
    return (
      <section>
        <div className={selectMonthly === true ?'toggler':'toggler2'} onClick={() => {
            setSelectMonthly((prev) => !prev);
            }}>
          <div className='p-3 text-sm text-black font-semibold'>Annually</div>
          <div className='p-3 text-sm text-muted-foreground font-semibold'>Monthly</div>
          <div
            className={'ball2'}
            style={selectMonthly === true ? { left: "2px" } : { right: "2px" }}/>
        </div><br/>
        <div className={styles.tiercard}>
          <PriceWrapper 
          price={selectMonthly?10000:8500} 
          title='📣 Essential' 
          id={1} 
          feature1='6,000 ETB Direct Ad spend'
          feature2='1 Campaign Setup'
          feature3='Daily Performance monitoring'
          feature4='Audience targeting setup'
          feature5='Basic monthly report'
          feature6='NO Retargeting'
          feature7='NO Competitor analysis'
          feature8='NO Content optimization'
          />
          <PriceWrapper 
          price={selectMonthly?20000:18000} 
          title='📈 Business' 
          id={2} 
          feature1='13,000 ETB Direct Ad spend'
          feature2='2 Campaign Setup'
          feature3='Daily Performance monitoring'
          feature4='Audience +ad targeting setup'
          feature5='Weekly insight report'
          feature6='Retargeting setup'
          feature7='Competitor analysis'
          feature8='Ad Content optimization'
          />
          <div className={styles.canvas}>
            <div className= {styles.card}>
              <div className={styles.banner}>
                <p className='text-center p-2'>
                📂 Enterprise
                </p>
                <p className={selectMonthly===true?'price_title':'price_title2'}>
                {formatPrice(priceFormat)}
                </p>
                
                <Slider
                  variant="default"
                  aria-label="Enterprise package slider"
                  thickness="thin"
                  name="456"
                  defaultValue={[50000]}
                  min={50000}
                  max={1000000}
                  step={10000}
                  value={priceFix}
                  onValueChange={(
                    value: typeof priceFix
                    ) => {
                    setPriceFix(value)
                  }}
                />
                <p className="text-center py-1 font-extralight text-sm">* customer size: {customerSize}</p>
              </div>
              <div className={styles.detail2}>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>All business features included</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Full funnel strategy</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Brand tone development</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Partnership arbitration</p>
                </div>
                <div className='px-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Premium support</p>
                </div>
              </div>
              <div className="items-start flex flex-col">
                <p className="px-4 pb-1 font-extralight text-sm">* Enterprise invoices settled monthly</p>
                <p className="px-4 pb-2 font-extralight text-sm">* Consult sales for further inquiry</p>
              </div>
              <div className="flex flex-row justify-evenly">
              <Outline text='Order' url='/pricing/check_out'/>
              <Outline text='Contact us' url='contact'/>
              </div>
            </div>
          </div>
        </div>
    </section>
    )}