'use client'
import * as React from "react"
import styles from './page.module.css'
import { BsCheck } from 'react-icons/bs';
import '@/components/pricing/test.css'
import { Slider } from "@/components/UI/slider";
import { formatPrice } from "@/app/utils/utils"
import { Button } from "../UI/button";
import axios from "axios";
import { toast } from "sonner";
import { Icons } from "../UI/icons";
import { Input } from "../UI/input";
import { Badge } from "../UI/badge";



export default function MelaPricing(){
    const [loading, setLoading] = React.useState(false);
    const [loading2, setLoading2] = React.useState(false);
    const [silverMela, setSilverMela] = React.useState<[number]>([20])
    const silverMelaFormat = Number(silverMela)
    const silverMelaPrice = (silverMelaFormat*.1)
    const [goldMela, setGoldMela] = React.useState<[number]>([20])
    const goldPriceFormat = Number(goldMela)
    const goldMelaPrice = (goldPriceFormat*.5)

    const onSilverBuy = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/chapa?amount=${silverMelaPrice}&prod=silverMela-${silverMela[0]}`);
  
        window.location.href = response.data.url;
      } catch (error:any) {
        if (error.message === 'Request failed with status code 401') {
          toast.error('You do not have an account please sign up first');
          window.location.href = '/signup';
        } else {
          toast.error(JSON.stringify(error.message));
        }
      } finally {
        setLoading(false);
      }
    }
 
    const onGoldBuy = async () => {
      try {
        setLoading2(true);
        const response = await axios.get(`/api/chapa?amount=${goldMelaPrice}&prod=goldMela-${goldMela[0]}`);
  
        window.location.href = response.data.url;
      } catch (error:any) {
        if (error.message === 'Request failed with status code 401') {
          toast.error('You do not have an account please sign up first');
          window.location.href = '/signup';
        } else {
          toast.error(JSON.stringify(error.message));
        }
      } finally {
        setLoading2(false);
      }
    }

    return (
      <section className="flex flex-col md:flex-row gap-6 items-center">
          <div className={styles.canvas}>
            <div className= {styles.card}>
              <div className='flex flex-col gap-4 p-4 relative'>
                <div className="flex flex-row justify-center gap-2">
                  <p> Silver Coin </p>
                  <Badge variant='accent'>+{silverMela[0]}</Badge>
                </div>
                <Slider
                  color="accent"
                  variant="default"
                  aria-label="Enterprise package slider"
                  thickness="thin"
                  name="456"
                  defaultValue={[2000]}
                  min={500}
                  max={10000}
                  step={100}
                  value={silverMela}
                  onValueChange={(
                    value: typeof silverMela
                    ) => {
                    setSilverMela(value)
                  }}
                />
                <div className="flex flex-row items-center gap-2 px-6">
                    <p className="text-center font-extralight text-base">Coin: </p>
                    <Input
                    type="number"
                    inputMode="numeric"
                    defaultValue={silverMela[0]}
                    value={silverMela[0]}
                    min={500}
                    step={100}
                    max={10000}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      setSilverMela([value])
                    }} />
                </div>
                <p> {formatPrice(silverMelaPrice)} </p>
              </div>
              <div className="bg-accent font-light border-t-2 border-b-2 text-sm p-2 border-border mb-2">
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Get access to 50+ AI models</p>
                </div>
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Free access to prompts lab</p>
                </div>
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Members only gallery access</p>
                </div>
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Generative AI Images</p>
                </div>
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Generative AI Audio</p>
                </div>
              </div>
              <Button variant='accent' className="m-4"disabled={loading} onClick={onSilverBuy}>
                      {loading && (
                      <Icons.spinner
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                      />
                      )} Buy Silver Coin</Button>
            </div>
          </div>
          <div className={styles.canvas}>
            <div className= {styles.card}>
              <div className='flex flex-col gap-4 p-4 relative'>
                <div className="flex flex-row justify-center gap-2">
                  <p> Gold Coin </p>
                  <Badge>+{goldMela[0]}</Badge>
                </div>
                <Slider
                  variant="default"
                  aria-label="Enterprise package slider"
                  thickness="thin"
                  name="456"
                  defaultValue={[1000]}
                  min={100}
                  max={2000}
                  step={100}
                  value={goldMela}
                  onValueChange={(
                    value: typeof goldMela
                    ) => {
                    setGoldMela(value)
                  }} />
                <div className="flex flex-row items-center gap-2 px-6">
                  <p className="text-center font-extralight text-base">Coin: </p>
                  <Input
                  type="number"
                  inputMode="numeric"
                  defaultValue={goldMela[0]}
                  value={goldMela[0]}
                  min={100}
                  step={100}
                  max={2000}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    setGoldMela([value])
                  }} />
                </div>
                <p> {formatPrice(goldMelaPrice)} </p>
              </div>
              <div className="bg-accent font-light border-t-2 border-b-2 text-sm p-2 border-border mb-2">
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>All silver mela features included</p>
                </div>
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Additional expert AI models</p>
                </div>
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>AI Companions with memory</p>
                </div>
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Generative AI Video</p>
                </div>
                <div className='p-2 flex flex-row items-center gap-2'>
                  <BsCheck/><p>Images with Midjourney</p>
                </div>
              </div>
              <Button className="m-4"disabled onClick={onGoldBuy}>
                      {loading2 && (
                      <Icons.spinner
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                      />
                      )} Buy Gold Mela</Button>
            </div>
          </div>
    </section>
    )}