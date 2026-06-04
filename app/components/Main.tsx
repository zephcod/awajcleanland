import Hero from "../sections/hero";
import ServiceCarousel from "../sections/service_carousel/service_carousel";
import ValueProp from "../sections/value_proposition";
import styles from '../components/page.module.css'
import Headline1 from "../sections/ctas/headline1";
import Stats from "../sections/stats";
// import { QuickCampaign } from "../components/pricing/quick_campaign";
import CallUs from "../sections/ctas/call_us";
import CasesSection from "../sections/ctas/casestudies";
import DealsSection from "../sections/ctas/deals";

export default function Main() {
  return (
    <section className={styles.maincontainer}>
        <div className={styles.heroContainer}>
          <Hero/>
        </div>
      {/* <Headline1/>
      <section id='case_sec'>
      <CasesSection/>
      </section>
      <h2 className="pt-24 mb-2 md:mb-8 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
        Check our main services.
      </h2>
      <ServiceCarousel/>
      <div className="h-12"></div>
      <DealsSection/>
      <div className="h-24"></div>
      <Stats/>
      <ValueProp/>
      <CallUs/>
      <div className="h-24"></div> */}
      <section id='quick' className="w-full">
      {/* <QuickCampaign/> */}
      </section>
    </section>
  );
}
