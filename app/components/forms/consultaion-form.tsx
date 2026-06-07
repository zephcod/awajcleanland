"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { consultationSchema } from "@/lib/validations/consultation"
import { createConsultation } from "@/services/consultation-service"

import { Button, buttonVariants } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Form,  FormControl,  FormField,  FormItem,  FormLabel,  FormMessage,} from "@/app/components/ui/form"
import type { z } from "zod"
import { Icons } from "../ui/icons"
import { Separator } from "../ui/separator"


type Inputs = z.infer<typeof consultationSchema>

export function ConsultationForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

   const form = useForm<Inputs>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
        $id: "string",
        clientName: "",
        email: "",
        phone: "",
        company: "",
        description:"",
        category: "",
        industry: "",
        location: "",
        $createdAt: new Date(),
        $updatedAt: new Date(),
    },
  })

  async function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        console.log("data", JSON.stringify(data))
        await createConsultation(data)
        toast.message("Your consultation request has been submitted successfully!", {
          description: "We'll review your request and get back to you soon.",
        })
        form.reset()
      } catch (err) {
        console.log("Error creating consultation:", err)
        toast.message("Error occured while submitting consultation request", {
          description: `${err}`,
        })
      }
    })
  }

  return (
    <Form {...form}>
        <form
        className="grid gap-4 space-y-6"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
            <div className="flex flex-col w-full">
                                        <FormField
                                        control={form.control}
                                        name="clientName"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel>Name*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="your name..." {...field} />
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
                                                <Input placeholder="name of your business..." {...field} />
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
                                        <Separator className="mt-6 mb-4 py-2" />
                                        <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel>What would you like a consultation on?</FormLabel>
                                            <FormControl>
                                                <Select  >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a consultation topic" {...field}/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                    <SelectLabel>Consultation Topics</SelectLabel>
                                                    <SelectItem value="launch1">Launch Company</SelectItem>
                                                    <SelectItem value="launch2">Launch Product/Service</SelectItem>
                                                    <SelectItem value="leads">Generate Leads</SelectItem>
                                                    <SelectItem value="content_creation">Content Creation</SelectItem>
                                                    <SelectItem value="social_ads">Social Media Ads</SelectItem>
                                                    <SelectItem value="strategy">Marketing Strategy</SelectItem>
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
                                                        <SelectValue placeholder="Select your business industry" {...field}/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                        <SelectLabel>Industries</SelectLabel>
                                                        <SelectItem value="retail">Retail</SelectItem>
                                                        <SelectItem value="B2B">B2B</SelectItem>
                                                        <SelectItem value="construction">Construction</SelectItem>
                                                        <SelectItem value="commerece">E-commerce</SelectItem>
                                                        <SelectItem value="healthcare">Healthcare</SelectItem>
                                                        <SelectItem value="entertainment">Entertainment</SelectItem>
                                                        <SelectItem value="service">Service</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                            />
                                    </div>
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Questions | Clarifications</FormLabel>
                                                <FormControl>
                                                    <Textarea  placeholder="ጥያቄዎች ወይም ማብራሪያዎች ከፈለጉ እዚህ ይጻፉልን" {...field}/>
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                                        />
            <Button disabled={isPending}>
                {isPending && (
                    <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                    />
                )}
                Book Consultation
                <span className="sr-only">Sign in</span>
            </Button>
        </form>
    </Form>
  );
}