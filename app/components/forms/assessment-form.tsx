"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button, buttonVariants } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Form,  FormControl,  FormField,  FormItem,  FormLabel,  FormMessage,} from "@/app/components/ui/form"
import type { z } from "zod"
import { Icons } from "../ui/icons"
import { assessmentSchema } from "@/lib/validations/assessment"
import { Separator } from "../ui/separator"
import { createAssessment } from "@/services/assessment-service"


type Inputs = z.infer<typeof assessmentSchema>

export function AssessmentForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

   const form = useForm<Inputs>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
        $id: "string",
        clientName: "",
        email: "",
        phone: "",
        company: "",
        targetedFrom: "",
        description:"",
        industry: "",
        links: "",
        $createdAt: new Date(),
        $updatedAt: new Date(),
    },
  })

  async function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        console.log("data", JSON.stringify(data))
        await createAssessment(data)
        toast.message("Your assessment has been submitted successfully!", {
          description: "We'll review your account and get back to you soon.",
        })
        form.reset()
      } catch (err) {
        console.log("Error submitting assessment:", err)
        toast.message("Error occured while submitting assessment", {
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
                        <Input placeholder="name of your company..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Separator className="mt-6 mb-4 py-2" />
                <FormField
                control={form.control}
                name="targetedFrom"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>How did you hear about us?</FormLabel>
                    <FormControl>
                        <Select >
                        <SelectTrigger >
                            <SelectValue placeholder="Select how you heard about us" {...field}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>How you heard about us</SelectLabel>
                            <SelectItem value="Referral">Referral | ከሌላ ሰው</SelectItem>
                            <SelectItem value="Facebook">Facebook</SelectItem>
                            <SelectItem value="Instagram">Instagram</SelectItem>
                            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                            <SelectItem value="TikTok">TikTok</SelectItem>
                            <SelectItem value="Google Search">Google Search</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
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
                <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Links to your social pages</FormLabel>
                    <FormControl>
                        <Textarea placeholder="የመሃበራዊ ድህረ-ገጽ አድራሻዎን እዚህ ያስገቡ" {...field} />
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
                Send Request
                <span className="sr-only">Sign in</span>
            </Button>
        </form>
    </Form>
  );
}