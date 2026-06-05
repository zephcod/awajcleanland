"use client"

import { Toaster as RadToaster } from "sonner"

export function Toaster() {
  return (
    <RadToaster
      position="bottom-left"
      toastOptions={{
        style: {
          background: "rgb(var(--card))",
          color: "rgb(var(--foreground))",
          border: "1px solid rgb(var(--border))",
        },
      }}
    />
  )
}
