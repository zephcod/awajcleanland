"use client";
import * as React from "react"
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/app/components/ui/button";
import { Calculator, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Separator } from "@/app/components/ui/separator";
import Link from "next/link"
import { Icons } from '@/app/components/ui/icons';
import { Slider } from "@/app/components/ui/slider";
import { formatNumbers} from "@/app/utils/utils";

export default function AdCalculator() {
  const [impressions, setImpressions] = React.useState<number>(21000);
//   const [conversionRate, setConversionRate] = useState(5);
  const [adPeriod, setAdPeriod] = React.useState<number>(5);

const platformRates = {
  meta: 1,
  google: 1.8,
  tiktok: .8,
  linkedin: 3.5,
};

const platformInteraction = {
  meta: 1,
  google: .8,
  tiktok: 2.8,
  linkedin: .5,
};

const [platform, setPlatform] = useState("meta");
const [costPerLead, setCostPerLead] = useState(
  platformRates.meta
);

  const estimatedSpend =
    impressions > 0 ? (impressions / 28) * adPeriod * platformRates[platform] : 0;

 const interaction =
    impressions * adPeriod * platformInteraction[platform] * .0025;

 const estimatedCustomers =
    impressions * adPeriod * .0000625 * platformRates[platform];

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button size="default" variant="outline">
                <Calculator className="mr-2 h-4 w-4" />
                Calculator
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" />
              <Dialog.Content aria-describedby={undefined}
              className="fixed bg-card border left-1/2 top-1/2 w-[95vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 md:p-8 shadow-xl z-50">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-2xl font-bold">
                    Awaj Calculator
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="rounded-md p-2 hover:bg-muted">
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="w-full flex flex-row justify-between">
                        <label className="text-sm font-medium">
                        Daily Impression | የዕለት እይታ
                        </label>
                        <span className="text-lg font-bold">{formatNumbers(impressions)} እይታ</span>
                    </div>
                    <Slider
                      variant="default"
                      aria-label="Daily impression slider"
                      thickness="thin"
                      name="456"
                      defaultValue={[21000]}
                      min={21000}
                      max={1000000}
                      step={1000}
                      value={[impressions]}
                      onValueChange={(value: number[]) => {
                        setImpressions(value[0]);
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="w-full flex flex-row justify-between">
                        <label className="text-sm font-medium">
                        Ad Period | የማስታወቂያ ቆይታ
                        </label>
                        <span className="text-lg font-bold">{adPeriod} ቀን</span>
                    </div>
                    <Slider
                      variant="default"
                      aria-label="Ad period slider"
                      thickness="thin"
                      name="456"
                      defaultValue={[5]}
                      min={4}
                      max={90}
                      step={1}
                      value={[adPeriod]}
                      onValueChange={(value: number[]) => {
                        setAdPeriod(value[0]);
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                        Advertising Platform | የማስታወቂያ መድረክ
                    </label>
                    <Select
                        value={platform}
                        onValueChange={(value) => {
                        setPlatform(value);
                        setCostPerLead(
                            platformRates[value as keyof typeof platformRates]
                        );
                        }}
                    >
                        <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Platform" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="meta">
                            Meta (Facebook + Instagram )
                        </SelectItem>
                        <SelectItem value="google">
                            Google (Web + Youtube Adsense) 
                        </SelectItem>
                        <SelectItem value="tiktok">
                            TikTok Platform
                        </SelectItem>
                        <SelectItem value="linkedin">
                            LinkedIn Sales Navigator
                        </SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div className="rounded-xl bg-accent p-4">
                    <h3 className="font-semibold mb-2 ">
                      Approx. Results | ግምት ውጤት
                    </h3>
                    <Separator/>
                    <div className="space-y-1 mt-2">
                      <div className="flex justify-between">
                        <span>Engagement | ግንኙነት</span>
                        <span className="font-semibold">
                          {interaction.toFixed(0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Customers | ደንበኛ</span>
                        <span className="font-semibold">
                          {estimatedCustomers.toFixed(0)}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between">
                        <span>Cost | ጠቅላላ ወጪ</span>
                        <span className="font-semibold text-lg">
                          ETB {Math.round(estimatedSpend).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <em className='text-sm text-muted-foreground text-center max-w-3xl m-auto'>
                            No hidden cost. All prices include 15% VAT.
                        </em>
                      </div>
                    </div>
                  </div>
                  <div className="ring-1 ring-border rounded-md p-2">
                    <h3 className="font-semibold my-1 ">
                      Disclaimer | ማሳሰቢያ
                    </h3>
                    <span className="text-sm text-muted-foreground text-center max-w-3xl m-auto">
                        This calculator provides a preliminary estimate. 
                        Schedule a free consultation for a customized advertising strategy and budget forecast.
                    </span>
                    <div className="w-full m-auto justify-center mt-2 items-center">
                        <Link 
                            href="/book_consult" 
                            rel="noopener noreferrer"
                            target='_blank'
                            >
                            <div className='w-full text-foreground bg-ghost hover:bg-accent flex flex-row items-center justify-center gap-1 ring-1 ring-border rounded-md px-4 py-2'>
                                <p className='text-base'>Book a Free Consultation</p>
                                <Icons.arrowExternalLink className='h-4 w-4'/>
                            </div>
                        </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
    </section>
  );
}