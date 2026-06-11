import '../../styles/hero_animation.css'
import Image from "next/image"
import styles from '../sections/page.module.css'
import Rocket from '@/public/character/awaj_hero.webp'
import Statue1 from '@/public/landmark/ethiopian_landmark-min.webp'
import BubbleBg from '../components/ui/bubble_bg';
import CtaHeadline from './ctas/cta_headline';
import ColorButton from '@/app/components/button/color_btn';
import Content from "@/public/awajai_cloud-min.webp"
import ScrollLink from '@/app/components/ui/scroll_link'
import { Icons } from '@/app/components/ui/icons'
import AdCalculator from './ctas/ad_calculator'

const Hero = () => {
  return (
        <div className="loop-wrapper">
            <div className={styles.container}>
                <div className={styles.glass}>
                    <div className={styles.subtitle}>
                        <h2>
                        🏆 Win the digital race!
                        </h2>
                    </div>
                    <div className={styles.desc}>
                        <p >
                        Claim your market share online and get tangible results.
                        </p>
                    </div>
                    <div className='h-4 border-border border-dashed border-b-2 mb-6'></div>
                    <div className='relative hidden md:flex flex-row justify-evenly items-baseline gap-4'>
                        <ColorButton text='Packages' url='#deals'><Icons.arrowDown className='h-4 w-4'/></ColorButton>
                        <ColorButton text='Testimonials' url='#case_sec'><Icons.arrowDown className='h-4 w-4'/></ColorButton>
                        {/* <RoundButton url='/resources/overview' text='Take a Tour'><Icons.arrowUpRight className='h-4 w-4'/></RoundButton> */}
                    </div>
                </div>
                <div className='flex md:hidden flex-col mx-4 my-1'>
                    <div className={styles.subtitle}>
                        <h2>
                        🏆 Win the digital race!
                        </h2>
                    </div>
                    <div className={styles.desc}>
                        <p >
                        Claim your market share online and get tangible results.
                        </p>
                    </div>
                    <Image className='cloud' src={Content} width={400} height={400} alt='Awaj ET Digital Billboard'/>
                    <div className='flex flex-row mt-2 gap-4 justify-center items-center'>
                        <ScrollLink href={'#deals'}>Packages</ScrollLink>
                        <AdCalculator/>
                    </div>
                </div>
                <div className='hidden md:flex'><CtaHeadline/></div>
            </div>
            <BubbleBg/>
            <div className='statue1'><Image src={Statue1.src}  width={3400} height={400} alt=''/></div>
            <div className='statue2'><Image src={Statue1.src}  width={3400} height={400}alt=''/></div>
            <div className="hill"></div>
            <div className="truck">
            <Image src={Rocket.src} width={600} height={800}alt=''/>
                <div className='awaj'>አዋጅ!</div>
                <div className='awaj'>አዋጅ!</div>
                <div className='awaj'>አዋጅ!</div>
            </div>
        </div>
  )
}

export default Hero