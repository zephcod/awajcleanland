"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { orderSchema } from "@/lib/validations/order"
import { createConsultation } from "@/services/consultation-service"

import { Button, buttonVariants } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Form,  FormControl,  FormField,  FormItem,  FormLabel,  FormMessage,} from "@/app/components/ui/form"
import type { z } from "zod"
import { Icons } from "../ui/icons"
import { createOrder } from "@/services/orders-services"
import { Separator } from "../ui/separator"


type Inputs = z.infer<typeof orderSchema>

export function OrderForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

   const form = useForm<Inputs>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
        $id: "string",
        clientName: "",
        email: "",
        phone: "",
        company: "",
        targetedFrom: "",
        description:"",
        totalAmount: 0,
        promoCode: "",
        industry: "",
        $createdAt: new Date(),
        $updatedAt: new Date(),
    },
  })

  async function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        console.log("data", JSON.stringify(data))
        await createOrder(data)
        toast.message("Your order has been submitted successfully!", {
          description: "We'll review your request and get back to you soon.",
        })
        form.reset()
      } catch (err) {
        console.log("Error creating order:", err)
        toast.message("Error occured while submitting order request", {
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
                Submit Order
                <span className="sr-only">Sign in</span>
            </Button>
        </form>
    </Form>
  );
}