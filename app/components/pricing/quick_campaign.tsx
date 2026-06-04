"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { loginSchema } from "@/lib/validations/auth"
import { Button, buttonVariants } from "@/app/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import { Icons } from "@/app/components/ui/icons"
import { toast } from "sonner"
import { quickCampaignSchema } from "@/lib/validations/solution"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import Link from "next/link"
import { Textarea } from "@/app/components/ui/textarea"
import Image from "next/image"
import HolderAstro from "@/public/character/astro-holding.png";

type Inputs = z.infer<typeof quickCampaignSchema>

export function QuickCampaign() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
//   const {setAuthStatus} = useAuth()

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      description: "",
      category:"",
      budget:""
    },
  })

  async function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        
      } catch (err) {
        toast.message("Error occured while logging in", {
          description: `${err}`,
        })
      }
    })
  }

  return (
    <div className="flex flex-col items-center mt-16 md:mt-32 mx-auto bg-card w-full text-muted-foreground">
        <Image src={HolderAstro} alt="awaj et astro-holding card" height={200} className="-mt-[105px] md:-mt-[168px]"/>
        <div className="flex flex-col p-4 items-center">
        <h3 className="pt-4 text-2xl text-center font-bold leading-[1.15] lg:text-3xl">
            Build a quick campaign
        </h3>
        <p className="mt-1 mb-4 text-center">👉{' '}<span className="underline">Fill the form and get a free insight report</span></p>
            <Form {...form}>
                <form
                className="grid gap-4"
                onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
                    <div className="flex flex-col md:flex-row w-full justify-center my-4 gap-4">
                        <div className="flex flex-col w-64">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Name*</FormLabel>
                                <FormControl>
                                    <Input placeholder="your full name..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email*</FormLabel>
                                <FormControl>
                                    <Input placeholder="abe.kebe@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Phone*</FormLabel>
                                <FormControl>
                                    <Input placeholder="+251912345678" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                    <Input placeholder="name of your company..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <div className="hidden md:flex border-border border-dashed border-l-2 h-72 w-2 mx-4"></div>
                        <div className="flex md:hidden border-border border-dashed border-b-2 h-6 w-64"></div>
                        <div className="flex flex-col w-64">
                            <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>What can we do for you?</FormLabel>
                                <FormControl>
                                    <Select  >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a campaign" {...field}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>Campaigns</SelectLabel>
                                        <SelectItem value="apple">Launch Company</SelectItem>
                                        <SelectItem value="banana">Launch Product/Service</SelectItem>
                                        <SelectItem value="blueberry">Generate Leads</SelectItem>
                                        <SelectItem value="grapes">Content Creation</SelectItem>
                                        <SelectItem value="pineapple">Social Media Management</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Your Budget</FormLabel>
                                <FormControl>
                                    <Select >
                                    <SelectTrigger >
                                        <SelectValue placeholder="Select budget range" {...field}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>Campaigns</SelectLabel>
                                        <SelectItem value="<10K">{'<10K ETB'}</SelectItem>
                                        <SelectItem value="10K-25K">{"10K-25K ETB"}</SelectItem>
                                        <SelectItem value="25K-50K">{"25K-50K ETB"}</SelectItem>
                                        <SelectItem value="50K-100K">{"50K-100K ETB"}</SelectItem>
                                        <SelectItem value=">100K">{'>100K ETB'}</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Industry</FormLabel>
                                <FormControl>
                                    <Select >
                                    <SelectTrigger >
                                        <SelectValue placeholder="Select your industry" {...field}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>Industries</SelectLabel>
                                        <SelectItem value="retail">Retail</SelectItem>
                                        <SelectItem value="B2B">B2B</SelectItem>
                                        <SelectItem value="construction">Construction</SelectItem>
                                        <SelectItem value="commerece">E-commerce</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="your business location..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                    </div>
                            <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Describe your campaign</FormLabel>
                                <FormControl>
                                    <Textarea  placeholder="" {...field}/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                <div className="flex flex-col md:flex-row gap-4 my-4 mx-auto items-center">
                    <Button disabled={isPending}>
                    {isPending && (
                        <Icons.spinner
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                        />
                    )}
                    Book a review
                    <span className="sr-only">Sign in</span>
                    </Button>
                    <Link href="/pricing/build-campaign">
                        <div
                        className={buttonVariants({
                            variant:'outline',
                            size: "default",
                        })}
                        >
                        Go to full builder 🡥
                        <span className="sr-only">Go to full builder</span>
                        </div>
                    </Link>
                </div>
            </form>
        </Form>
        </div>
    </div>
  )
}
