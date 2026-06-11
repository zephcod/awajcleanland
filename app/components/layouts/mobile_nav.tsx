"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MainNavItem, SidebarNavItem } from "../../../types"

import { siteConfig } from "../../../config/site"
import { cn } from "../../utils/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import { Button } from "../../components/ui/button"
import { ScrollArea } from "../../components/ui/scroll_area"
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet"
import { Icons } from "../../components/ui/icons"
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Content from "@/public/logo/awaj_ai_logo.svg"

interface MobileNavProps {
  mainNavItems?: MainNavItem[]
  sidebarNavItems: SidebarNavItem[]
}

export function MobileNav({ mainNavItems, sidebarNavItems }: MobileNavProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-4 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined} side="left" className="pl-1 pr-0 bg-card border-border">
        <Dialog.Title >
        <div className="px-7 items-center text-center">
          <Link
            aria-label="Home"
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Image src={Content} width={25} height={25} 
            alt="AwajET Logo"/>
            <span className="font-bold ml-2 pb-1">{siteConfig.name}</span>
          </Link>
        </div>
        </Dialog.Title>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="pl-1 pr-7">
            <Accordion type="single" collapsible className="w-full ">
              {mainNavItems?.map((item, index) => (
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className="text-sm capitalize">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {item.items?.map((subItem, index) =>
                        subItem.href ? (
                          <MobileLink
                            key={index}
                            href={String(subItem.href)}
                            pathname={pathname}
                            setIsOpen={setIsOpen}
                            disabled={subItem.disabled}
                          >
                            {subItem.title}
                          </MobileLink>
                        ) : (
                          <div
                            key={index}
                            className="text-foreground/70 transition-colors"
                          >
                            {item.title}
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
  pathname: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        pathname === href && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}
