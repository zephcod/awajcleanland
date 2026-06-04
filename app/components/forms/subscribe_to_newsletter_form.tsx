"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { emailSchema } from "@/lib/validations/email"
import { Button } from "@/components/UI/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form"
import { Input } from "@/components/UI/input"
import { Icons } from "@/components/UI/icons"

type Inputs = z.infer<typeof emailSchema>

export function SubscribeToNewsletterForm() {
  const [loading, setLoading] = React.useState(false);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(emailSchema),
  })

  async function onSubmit(data: Inputs) {
    console.log(data)
    setLoading(true)
      const response = await fetch("/api/subscribers", {
        method: "POST",
        headers:{"Content-Type":"application/json",},
        body: JSON.stringify({
          email: data.email,
          // This token is used as a search param in the email preferences page to identify the subscriber.
          token: crypto.randomUUID(),
          subject: "Welcome to Skateshop13",
        }),
      })

      if (response.status === 409) {
        toast.error("You are already subscribed to our newsletter.")
        setLoading(false);
      }

      if (response.status === 422) {
        toast.error("Inavlid input.")
        setLoading(false);
      }

      if (response.status === 429) {
        toast.error("The daily email limit has been reached.")
        setLoading(false);
      }

      if (response.status === 500) {
        toast.error("Something went wrong. Please try again later.")
        setLoading(false);
      }

      if (response.ok) {
        toast.success("You have been subscribed to our newsletter.")
        form.reset()
        setLoading(false);
      }
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full "
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative ">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="abera@etmail.com"
                  className="pr-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <Button
                className="absolute right-[5.2px] top-[5.5px] z-20 h-7 w-7"
                variant="outline"
                size="icon"
                disabled={loading}
              >
                {loading ? (
                  <Icons.spinner
                    className="h-3 w-3 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <Icons.send className="h-3 w-3" aria-hidden="true" />
                )}
                <span className="sr-only">Join newsletter</span>
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
